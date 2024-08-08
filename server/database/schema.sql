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

INSERT INTO genre (title) VALUES ('Science-Fiction');

INSERT INTO genre (title) VALUES ('Aventure');

INSERT INTO genre (title) VALUES ('Fantastique');

INSERT INTO genre (title) VALUES ('Fantasy');

INSERT INTO genre (title) VALUES ('Drame');

INSERT INTO genre (title) VALUES ('Historique');
INSERT INTO genre (title) VALUES ('Comédie');

INSERT INTO genre (title) VALUES ('Action');

INSERT INTO genre (title) VALUES ('Biopic');

INSERT INTO genre (title) VALUES ('Horreur');

INSERT INTO genre (title) VALUES ('Thriller');

INSERT INTO genre (title) VALUES ('Animation');


INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Alien',
        "Dans un futur lointain, l'équipage du vaisseau spatial Nostromo intercepte un signal de détresse provenant d'une planète inexplorée. Lors de l'exploration, ils découvrent une forme de vie extraterrestre mortelle qui commence à éliminer les membres de l'équipage un par un.",
        'assets/images/Alien.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Apocalypse Now',
        "Le capitaine Willard est envoyé en mission secrète pour éliminer le colonel Kurtz, un officier dément qui a formé une armée personnelle au cœur de la jungle cambodgienne. En remontant la rivière Nùng, Willard et son équipe affrontent les horreurs de la guerre du Vietnam. Le voyage devient une plongée dans la folie et la noirceur humaine. ",
        'assets/images/Apocalypse_now.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Bambi',
        "Bambi, un jeune faon, découvre les merveilles et les dangers de la forêt avec ses amis Panpan le lapin et Fleur la moufette. Alors qu'il grandit, il apprend des leçons importantes sur la vie, l'amour et la survie. La mort tragique de sa mère face à un chasseur marque un tournant dans sa vie. Bambi doit alors trouver la force de devenir le nouveau Prince de la forêt.",
        'assets/images/Bambi.jpg',
        12
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Blade Runner',
        "Dans un futur dystopique, Rick Deckard, un ancien blade runner, est chargé de traquer et de retirer quatre réplicants rebelles. Ces androïdes, conçus pour ressembler parfaitement aux humains, cherchent à prolonger leur courte durée de vie. En poursuivant sa mission, Deckard remet en question la nature de l'humanité et sa propre identité.",
        'assets/images/Blade_runner.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Conan le Barbare',
        "Après avoir vu ses parents tués et son village détruit par le seigneur de guerre Thulsa Doom, Conan est réduit en esclavage. Devenu adulte et un guerrier redoutable, il cherche à se venger de Thulsa Doom. Son voyage est parsemé de combats épiques, de rencontres avec des alliés et de découvertes mystiques. La quête de vengeance de Conan se transforme en une quête de son propre destin.",
        'assets/images/Conan.jpg',
        6
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Days of Heaven',
        "En 1916, Bill, sa petite amie Abby et sa jeune sœur Linda fuient Chicago pour travailler dans les champs de blé du Texas. Bill et Abby se font passer pour frère et sœur pour éviter les ragots. Le propriétaire des terres, gravement malade, tombe amoureux d'Abby, et Bill voit une opportunité de fortune.",
        'assets/images/Days_of_Heaven.jpg',
        5
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Die Hard',
        "Le policier new-yorkais John McClane se rend à Los Angeles pour rejoindre sa femme lors d'une fête de Noël dans un gratte-ciel. La fête est interrompue par un groupe de terroristes mené par Hans Gruber, qui prend les invités en otage. Seul et armé de son ingéniosité, McClane doit déjouer les plans des terroristes pour sauver les otages.",
        'assets/images/Die_hard.jpg',
        8
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Drive',
        "Un conducteur talentueux et taciturne travaille comme cascadeur le jour et comme chauffeur pour des criminels la nuit. Sa vie change lorsqu'il rencontre sa voisine Irene et son fils. Lorsque le mari d'Irene sort de prison, le conducteur accepte de l'aider dans un dernier coup pour protéger la famille. L'affaire tourne mal, plongeant le conducteur dans un monde de violence et de trahison.",
        'assets/images/Drive.jpg',
        5
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'E.T',
        "Un jeune garçon nommé Elliott découvre un extraterrestre abandonné sur Terre. Il le cache et forme avec lui un lien profond et mystérieux. Avec l'aide de ses frères et sœurs, Elliott doit protéger E.T. des autorités et trouver un moyen de le renvoyer chez lui. Leur aventure émouvante explore des thèmes d'amitié, de famille et de l'acceptation des différences.",
        'assets/images/ET.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Eyes Wide Shut',
        "Après une révélation de sa femme sur ses désirs secrets, le Dr Bill Harford entame une nuit de découverte et de tentation dans les rues de New York. Sa quête le conduit à une société secrète aux pratiques sexuelles énigmatiques et dangereuses. La frontière entre rêve et réalité devient floue alors qu'il plonge plus profondément dans ce monde clandestin.",
        'assets/images/Eyes_wide_shut.jpg',
        11
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Frankenstein',
        "Le Dr Victor Frankenstein, obsédé par l'idée de créer la vie, donne naissance à une créature à partir de parties de cadavres. Horrifié par son propre succès, il abandonne la créature, qui erre seule et incomprise. En quête d'acceptation, la créature se heurte à la peur et à la violence des humains. Sa vengeance contre son créateur entraîne une série de tragédies, interrogeant les limites de la science et de l'éthique.",
        'assets/images/Frankenstein.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Indiana Jones',
        "Dans un futur lointain, l'équipage du vaisseau spatial Nostromo intercepte un signal de détresse provenant d'une planète inexplorée. Lors de l'exploration, ils découvrent une forme de vie extraterrestre mortelle qui commence à éliminer les membres de l'équipage un par un.",
        'assets/images/Indiana_jones.jpg',
        2
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Its a Wonderful Life',
        "George Bailey, un homme bon et généreux, est au bord du suicide un soir de Noël. Un ange nommé Clarence lui montre ce que serait le monde sans lui. À travers cette vision, George réalise l'impact positif qu'il a eu sur sa communauté. En retrouvant espoir, il comprend la valeur de sa vie et l'importance des petites actions de gentillesse.",
        'assets/images/Its_a_wonderful_life.jpg',
        7
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Psychose ',
        "Marion Crane, en fuite après avoir volé de l'argent, trouve refuge dans un motel isolé géré par le mystérieux Norman Bates. Sa disparition entraîne une enquête menée par sa sœur et un détective privé. Ils découvrent que Norman vit avec sa mère dominatrice et possessive. Le suspense culmine avec la révélation choquante de la véritable nature de Norman et de sa relation avec sa mère.",
        'assets/images/Psycho.jpg',
        11
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Les Dents de la mer',
        "La petite station balnéaire d'Amity est terrorisée par un grand requin blanc. Le chef de la police, Martin Brody, tente de fermer les plages, mais se heurte à la résistance des autorités locales. Avec l'aide d'un océanographe et d'un chasseur de requins, Brody part en mer pour affronter la créature. La chasse devient une lutte intense pour la survie contre un prédateur implacable.",
        'assets/images/Jaws.jpg',
        1
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'La Nuit du chasseur',
        "Un prédicateur charismatique et meurtrier, Harry Powell, poursuit deux enfants pour s'emparer de l'argent volé par leur père décédé. Se cachant sous un masque de piété, il épouse leur mère pour se rapprocher de la fortune. Les enfants fuient, trouvant refuge chez une vieille dame courageuse. La confrontation finale révèle les vrais visages du bien et du mal.",
        'assets/images/La_nuit_du_chasseur.jpg',
        11
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'La Piscine',
        "Jean-Paul et Marianne passent des vacances dans une villa luxueuse avec piscine près de Saint-Tropez. Leur tranquillité est perturbée par l'arrivée de Harry, un ancien amant de Marianne, accompagné de sa fille, Pénélope. Les tensions montent, révélant des jalousies et des désirs enfouis. La situation dégénère en drame, transformant leur paradis en enfer.",
        'assets/images/La_piscine.jpg',
        5
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'La Planète des singes',
        "Après un atterrissage forcé sur une planète inconnue, des astronautes découvrent une société où les singes intelligents dominent les humains primitifs. Le commandant Taylor est capturé et doit prouver son intelligence pour survivre. Avec l'aide de deux chimpanzés sympathiques, il tente de révéler la vérité sur cette civilisation inversée. La découverte finale de Taylor remet en question tout ce qu'il savait sur l'humanité.",
        'assets/images/La_planete_des_singes.jpg',
        1
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Le Mépris',
        "Le scénariste Paul Javal est engagé pour réécrire un scénario adapté de L'Odyssée d'Homère. Lors de la production, des tensions surgissent entre Paul et sa femme Camille, exacerbées par le producteur américain et le réalisateur. Le tournage à Capri devient le théâtre de l'effritement de leur mariage. Camille ressent un profond mépris pour Paul, transformant leur amour en désillusion.",
        'assets/images/Le_mepris.jpg',
        5
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Le Parrain',
        "Vito Corleone, chef respecté et puissant de la famille mafieuse Corleone, doit transmettre son empire à l'un de ses fils. Lorsque Michael, le plus jeune fils, est entraîné dans le monde du crime suite à une attaque contre son père, il prend progressivement les rênes de la famille. Le film explore les dynamiques familiales, la loyauté et le pouvoir. La transformation de Michael en un chef impitoyable est à la fois fascinante et tragique.",
        'assets/images/Le_parrain.jpg',
        5
    );

     INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Le Silence des agneaux',
        "L'agent du FBI Clarice Starling est chargée d'interroger le brillant mais dangereux Dr Hannibal Lecter, un ancien psychiatre et cannibale, pour capturer un tueur en série. Leur relation complexe et intense révèle des indices cruciaux pour l'enquête. Clarice doit affronter ses propres peurs et démons. La chasse au tueur atteint un point culminant terrifiant.",
        'assets/images/Le_silence_des_agneaux.jpg',
        11
    );
    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Porco Rosso',
        "Dans l'entre-deux-guerres, un pilote de chasse italien transformé en cochon, Porco Rosso, travaille comme chasseur de primes. Il vole au-dessus de l'Adriatique, affrontant des pirates de l'air et des rivaux. Sa rencontre avec la jeune mécanicienne Fio et une ancienne amoureuse, Gina, l'oblige à confronter son passé et ses sentiments. Un duel aérien final met à l'épreuve son courage et son honneur.",
        'assets/images/Porco_rosso.jpg',
        12
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Fenêtre sur cour',
        "Bloqué chez lui avec une jambe cassée, le photographe Jeff observe ses voisins par la fenêtre de son appartement. Il devient convaincu qu'un de ses voisins a assassiné sa femme. Avec l'aide de sa petite amie Lisa et de son infirmière Stella, il tente de prouver le crime. Le suspense monte alors que le meurtrier potentiel découvre qu'il est observé.",
        'assets/images/Rear_window.jpg',
        11
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'The birds',
        "Dans une petite ville côtière, des attaques inexplicables d'oiseaux deviennent de plus en plus violentes et fréquentes. Melanie Daniels, une visiteuse, se retrouve prise au piège avec les habitants alors que les oiseaux deviennent meurtriers. Le chaos et la panique se propagent, menaçant la survie de la communauté. Le film explore la peur collective et l'imprévisibilité de la nature.",
        'assets/images/The_birds.jpg',
        11
    );

       INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Voyage au bout de l enfer',
        "Trois amis de Pennsylvanie, Michael, Nick et Steven, partent combattre au Vietnam. Capturés par l'ennemi, ils subissent des horreurs inimaginables qui les changent à jamais. De retour aux États-Unis, ils doivent faire face aux cicatrices physiques et psychologiques de la guerre. Leur amitié et leur humanité sont mises à rude épreuve dans un monde devenu méconnaissable.",
        'assets/images/The_deer_hunter.jpg',
        10
    );

     INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Les Chaussons rouges',
        "La danseuse Victoria Page rêve de devenir une étoile sous la direction du tyrannique impresario Boris Lermontov. Son talent la propulse au sommet, mais le conflit entre son art et son amour pour le compositeur Julian Craster la déchire. Le ballet des Chaussons Rouges devient une métaphore de sa propre vie. La passion et la tragédie s'entrelacent dans une danse fatale.",
        'assets/images/The_red_shoes.jpg',
        9
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'The Wicker Man',
        "Un policier est envoyé sur une île écossaise pour enquêter sur la disparition d'une jeune fille. Les habitants, pratiquant d'étranges rituels païens, refusent de coopérer. Son enquête révèle des vérités inquiétantes sur la communauté insulaire. Le mystère culmine dans un rituel terrifiant qui remet en question ses croyances et sa foi.",
        'assets/images/The_wicker_man.jpg',
        11
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Titanic',
        "Jack, un artiste pauvre, et Rose, une aristocrate engagée, se rencontrent à bord du Titanic. Leur amour interdit se développe malgré les différences sociales et les attentes familiales. La tragédie frappe lorsque le navire heurte un iceberg et commence à couler. Leur lutte pour survivre devient une histoire d'amour épique et déchirante.",
        'assets/images/Titanic.jpg',
        5
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Mon Voisin Totoro',
        "Satsuki et Mei, deux jeunes filles, emménagent à la campagne avec leur père pour être proches de leur mère hospitalisée. Elles découvrent des créatures magiques, dont Totoro, un esprit bienveillant de la forêt. Leur amitié avec Totoro les aide à traverser cette période difficile. Le film célèbre la magie de l'enfance et la beauté de la nature.",
        'assets/images/Totoro.jpg',
        12
    );

    INSERT INTO
    poster (
        title,
        description,
        image_url,
        genre_id
    )
VALUES (
        'Vertigo',
        "L'ex-policier Scottie, souffrant de vertige, est engagé pour suivre la femme apparemment perturbée d'un ami. Obsédé par elle, il assiste impuissant à sa mort tragique. Rongé par la culpabilité, il rencontre une femme ressemblant étrangement à la défunte. Scottie plonge dans une spirale de manipulation et de désespoir, cherchant à recréer son amour perdu.",
        'assets/images/Vertigo.jpg',
        11
    );