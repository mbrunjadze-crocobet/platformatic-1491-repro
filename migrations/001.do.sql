-- Add SQL in this file to create the database tables for your API
CREATE TABLE IF NOT EXISTS movies (id SERIAL PRIMARY KEY, title TEXT NOT NULL);
-- 
CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT NOT NULL);
-- 
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,
  CONSTRAINT fk_reviews_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_reviews_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id)
);
-- 
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,
  CONSTRAINT fk_comments_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_comments_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id)
);