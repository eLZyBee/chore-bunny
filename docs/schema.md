# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
household_id    | integer   | not null, foreign key (references households), indexed
session_token   | string    | not null, indexed
password_digest | string    | not null

## bunnies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed

## chores
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
room_id     | integer   | not null, foreign key (references rooms), indexed
name        | string    | not null
details     | text/json | not null

## households
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bunny_id    | integer   | not null, foreign key (references bunnies), indexed
parent_id   | integer   | not null, foreign key (references users), indexed
chore_id    | integer   | not null, foreign key (references chores), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed
details     | text/json | not null
date        | datetime  | not null
completed   | boolean   | default false

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique
description | text      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
booking_id  | integer   | not null, foreign key (references bookings), indexed
positive    | boolean   | default true
body        | text      |
