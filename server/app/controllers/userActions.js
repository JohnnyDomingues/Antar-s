const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res) => {
  try {
    // Fetch all items from the database
    const user = await tables.user.readAll();

    // Respond with the items in JSON format
    res.status(200).json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    res.status(500).json(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);

    if (user == null) {
      res.sendStatus(403);
    }

    const verified = await argon2.verify(user.password, req.body.password);
    if (verified) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.password;

      const token = await jwt.sign(
        { sub: user.id, is_admin: user.is_admin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
        })
        .json(user);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const create = async (req, res, next) => {
  // Extract the item data from the request body
  const user = req.body;

  try {
    const hashedPassword = await argon2.hash(user.password, hashingOptions);

    // Modify user data to include hashed password
    const userData = {
      ...user,
      password: hashedPassword,
    };

    // Insert the item into the database
    await tables.user.create(userData);

    // Respond with HTTP 200 (OK) and the user data (without password)
    res.sendStatus(201);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const update = async (req, res, next) => {
  const { id } = req.params; // Récupère l'ID de l'utilisateur à mettre à jour
  const userUpdates = req.body;

  try {
    const result = await tables.user.update({ ...userUpdates, id });

    if (result > 0) {
      res.sendStatus(204); // Si la mise à jour est réussie
    } else {
      res.sendStatus(404); // Si l'utilisateur n'est pas trouvé
    }
  } catch (err) {
    next(err); // Passe l'erreur au middleware de gestion des erreurs
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

const destroy = async (req, res) => {
  try {
    // Fetch the userId from the request parameters
    const userId = req.params.id;

    // Attempt to delete the user from the database
    const rows = await tables.user.destroy(userId);

    // Check if any rows were affected (meaning the user was deleted)
    if (rows.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  destroy,
  login,
  create,
  update,
  read,
};
