# Flux Cycles


## Room Cycles

### Rooms API Request Actions

* `fetchAllRooms`
  0. invoked from `RoomsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/rooms` is called.
  0. `receiveAllRooms` is set as the callback.

* `createRoom`
  0. invoked from new room button `onClick`
  0. `POST /api/rooms` is called.
  0. `receiveSingleRoom` is set as the callback.

* `fetchSingleRoom`
  0. invoked from `RoomDetail` `didMount`/`willReceiveProps`
  0. `GET /api/rooms/:id` is called.
  0. `receiveSingleRoom` is set as the callback.

* `updateRoom`
  0. invoked from `RoomForm` `onSubmit`
  0. `PATCH /api/rooms` is called.
  0. `receiveSingleRoom` is set as the callback.

* `destroyRoom`
  0. invoked from delete room button `onClick`
  0. `DELETE /api/rooms/:id` is called.
  0. `removeRoom` is set as the callback.

### Rooms API Response Actions

* `receiveAllRooms`
  0. invoked from an API callback.
  0. `Room` store updates `_rooms` and emits change.

* `receiveSingleRoom`
  0. invoked from an API callback.
  0. `Room` store updates `_rooms[id]` and emits change.

* `removeRoom`
  0. invoked from an API callback.
  0. `Room` store removes `_rooms[id]` and emits change.

### Store Listeners

* `RoomsIndex` component listens to `Room` store.


## Bunny Cycles

### Bunnies API Request Actions

* `fetchAllBunnies`
0. invoked from `BunnyIndex` `didMount`/`willReceiveProps`
0. `GET api/bunnies` is called.
0. `receiveAllBunnies` is set as the callback.

* `fetchSingleBunny`
0. invoked from `BunnyIndexItem` `didMount`/`willReceiveProps`
0. `GET api/bunnies/:id` is called.
0. `receiveSingleBunny` is set as the callback.

* *`fetchSuitableBunnies`
  0. invoked from `BunnyList` `didMount`/`willReceiveProps`
  0. `GET api/chores/:id/bunnies` is called.
  0. `receiveSuitableBunnies` is set as the callback.

* `fetchSingleBunny`
  0. invoked from `BunnyOverview` `didMount`/`willReceiveProps`
  0. `GET api/bunnies/:id` is called.
  0. `receiveSingleBunny` is set as the callback.*

### Bunnies API Response Actions

* `receiveSuitableBunnies`
  0. invoked from an API callback.
  0. `Bunny` store updates `_bunnies` and emits change.

* `receiveSingleBunny`
  0. invoked from an API callback.
  0. `Bunny` store updates `_bunnies[id]` and emits change.

### Store Listeners

* `BunnyIndex` component listens to `Bunny` store.


## Chore Cycles

### Chores API Request Actions

* `fetchAllChores`
  0. invoked from `ChoresIndex` `didMount`/`willReceiveProps`
  0. `GET /api/chores` is called.
  0. `receiveAllChores` is set as the callback.

* `createChore`
  0. invoked from new chore button `onClick`
  0. `POST /api/chores` is called.
  0. `receiveSingleChore` is set as the callback.

* `fetchSingleChore`
  0. invoked from `ChoreDetail` `didMount`/`willReceiveProps`
  0. `GET /api/chores/:id` is called.
  0. `receiveSingleChore` is set as the callback.

* `updateChore`
  0. invoked from `ChoreForm` `onSubmit`
  0. `PATCH /api/chores` is called.
  0. `receiveSingleChore` is set as the callback.

* `destroyChore`
  0. invoked from delete chore button `onClick`
  0. `DELETE /api/chores/:id` is called.
  0. `removeChore` is set as the callback.

### Chores API Response Actions

* `receiveAllChores`
  0. invoked from an API callback.
  0. `Chore` store updates `_chores` and emits change.

* `receiveSingleChore`
  0. invoked from an API callback.
  0. `Chore` store updates `_chores[id]` and emits change.

* `removeChore`
  0. invoked from an API callback.
  0. `Chore` store removes `_chores[id]` and emits change.

### Store Listeners

* `ChoresSearch` component listens to `Chore` store.
* `BunnyChoreIndex` component listens to `Chore` store.


## Booking Cycles

### Bookings API Request Actions

* `fetchAllBookings`
  0. invoked from `ChoreBooking` `didMount`/`willReceiveProps`
  0. `GET /api/bookings` is called.
  0. `receiveAllBookings` is set as the callback.

* `createBooking`
  0. invoked from new booking button `onClick`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the callback.

* `updateBooking`
  0. invoked from update booking button `onClick`
  0. `PATCH /api/bookings/:id` is called.
  0. `receiveSingleBooking` is set as the callback.

* `fetchSingleBooking`
  0. invoked from `Dashboard` `didMount`/`willReceiveProps`
  0. `GET /api/bookings/:id` is called.
  0. `receiveSingleBooking` is set as the callback.

* `cancelBooking`
  0. invoked from cancel chore button `onClick`
  0. `DELETE /api/bookings/:id` is called.
  0. `removeBooking` is set as the callback.

### Bookings API Response Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. `Booking` store updates `_booking` and emits change.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. `Booking` store updates `_booking[id]` and emits change.

* `removeBooking`
  0. invoked from an API callback.
  0. `Booking` store removes `_booking[id]` and emits change.

### Store Listeners

* `Dashboard` component listens to `Booking` store.
* `ChoreBooking` component listens to `Booking` store.


## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `BunnyProfile` `didMount`/`willReceiveProps`
  0. `GET /api/bunnies/:id/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `fetchRoomReviews`
  0. invoked from `RoomIndex` `didMount`/`willReceiveProps`
  0. `GET /api/rooms/:id/reviews` is called.
  0. `receiveRoomReviews` is set as the callback.

* `createReview`
  0. invoked from `BunnyReviewForm` submit review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveRoomReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `BunnyProfile` component listens to `Review` store.
* `RoomIndex` component listens to `Review` store.
