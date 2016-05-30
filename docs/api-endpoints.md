# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`
- `GET /account`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Rooms

- `GET /api/rooms`
- `POST /api/rooms`
- `GET /api/rooms/:id`
- `PATCH /api/rooms/:id`
- `DELETE /api/rooms/:id`

### Bunnies

- `GET bunnies/:id`
- `POST bunnies`
- `PATCH bunnies/:id`
- `GET chores/:id/bunnies`
  - filtered by household

### Chores

  - `GET /api/chores`
  - `POST /api/chores`
  - `GET /api/chores/:id`
  - `PATCH /api/chores/:id`
  - `DELETE /api/chores/:id`

### AvailableChores

  - `GET bunnies/:id/available_chores`
  - `POST bunnies/:id/available_chores`
  - `DELETE bunnies/:id/available_chores/:id`
  - `PATCH bunnies/:id/available_chores/:id`

### Bookings

  - `GET /bookings/new`
  - `GET /api/bookings/:id`
  - `DELETE /api/bookings/:id`
  - `PATCH /api/bookings/:id`
  - `POST /api/bookings`
  - `GET /api/users/bookings`
    - filter parents bookings
  - `GET /api/bunnies/bookings`
    - filter bunnies bookings

### Reviews

- `GET /reviews/new`
- `GET /api/bunnies/:id/reviews`
- `GET /api/rooms/:id/reviews`
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
