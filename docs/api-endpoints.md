# API Endpoints

Items in italics are possible removals.

## HTML API

### Root

- `GET /` - loads React web app

### Users

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

- `GET /api/bunnies/:id`
- `POST /api/bunnies`
- `PATCH /api/bunnies/:id`
*- `GET chores/:id/bunnies`
  - filtered by household*

### Chores

  - `GET /api/chores`
  - `POST /api/chores`
  - `GET /api/chores/:id`
  - `PATCH /api/chores/:id`
  - `DELETE /api/chores/:id`
  - `GET /api/rooms/:room_id/chores`

### *AvailableChores

  - `GET bunnies/:id/available_chores`
  - `POST bunnies/:id/available_chores`
  - `DELETE bunnies/:id/available_chores/:id`
  - `PATCH bunnies/:id/available_chores/:id`*

### Bookings

  - `GET /api/bookings`
  - filter parents bookings
  - `GET /api/bookings/:id`
  - `DELETE /api/bookings/:id`
  - `PATCH /api/bookings/:id`
  - `POST /api/bookings`
  - `GET /api/bunnies/:bunny_id/bookings`
    - filter bunnies bookings

### Reviews

- `GET /api/bunnies/:id/reviews`
- `GET /api/rooms/:id/reviews`
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
