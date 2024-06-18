DROP DATABASE IF EXISTS roadie_db;
CREATE DATABASE roadie_db;
\c roadie_db;

DROP TABLE IF EXISTS artists;

CREATE TABLE artists
(
    id VARCHAR PRIMARY KEY,
    name VARCHAR,
    IsArtist BOOLEAN,
    genre VARCHAR,
    city VARCHAR,
    email VARCHAR
    price VARCHAR
);

INSERT INTO artists
    (id, name, isArtist, genre, city, email, price)
VALUES
    ('1', 'Test Artist', 'TRUE', 'Metal', 'New York', 'test@bookmenow.com', '$$$'), 
    ('2', 'Test Artist 2', 'TRUE', 'Hip Hop', 'Greece', 'test2@bookmenow.com', '$$$');    