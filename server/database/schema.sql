-- Active: 1718631178665@@127.0.0.1@3306@antares
CREATE TABLE genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE poster (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255) NOT NULL,
    image_alt VARCHAR(255),
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);

INSERT INTO
    poster (
        title,
        description,
        image_url,
        artist_id,
    )
VALUES (
        'Chuuuttt',
        'assets/images/Chuuuttt.jpg',
        1,
        5,
        2.287592,
        48.862725
    );