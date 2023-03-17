
create TABLE t_movies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    year VARCHAR(255)
);

create TABLE t_genre(
    id SERIAL PRIMARY KEY,
    genre VARCHAR(255),
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES t_movies (id)
);