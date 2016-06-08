# ChoreBunny
![logo]
[logo]: ./app/assets/images/chore_bunny_logo.png

[Heroku Link][heroku] **NB:** Link to production site.

[heroku]: https://chorebunny.herokuapp.com

## Minimum Viable Product

ChoreBunny is a web application inspired by TaskRabbit that will be built using Ruby on Rails and React/Flux. The presentation twist is that instead of searching by *metro* area, you search by *rooms* in your house, and instead of *taskers*, you have your *children/workers/bunnies* to choose from to complete household chores.

By the end of Week 9, this app will, at a minimum, incorporate the following:

- [x] New account creation, login, and guest/demo login.
- [ ] Smooth, bug-free navigation.
- [ ] Adequate seed data to demonstrate the site's features.
- [ ] The minimum features necessary for an TaskRabbit style emulation site: chore navigation, worker/bunny navigation and booking, full profile views and review writing/rating.
  - [x] Searching for bunnies.
  - [x] Making bookings for chores.
  - [ ] Reviewing bunnies.
- [x] Hosting on Heroku.
- [x] CSS styling that matches the essence of TaskRabbit styling.
- [ ] A production README, replacing this README.

## Product Goals and Priorities

ChoreBunny will allow users to do the following:

- [x] Create an account (MVP)
- [x] Log in / Log out, as parent including as a Guest parent (MVP)
- [x] Search for workers/bunnies (MVP)
- [x] Making bookings for chores with individual bunnies (MVP)
- [ ] Create and read reviews of workers/bunnies (MVP)
- [ ] Edit and delete reviews of workers/bunnies (not MVP)
- [ ] Filter bunnies for chores by their ratings (not MVP)
- [ ] Log in / Log out, as bunny including as a Guest bunny (desirable feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication.

- [x] create new project.
- [x] create `User` model.
- [x] authentication.
- [x] user signup/signin pages.
- [x] blank landing page after signin.

### Phase 2: Rooms/Chores/Bunnies/Bookings Models, API, and basic APIUtil (2 days)

**Objective:** Rooms/Chores/Bunnies/Bookings can be created, read, edited and destroyed through the API.

- [x] create `Room` & `Chore` & `Bunny` & `Booking` models.
- [x] seed the database with a small amount of test data.
- [x] CRUD API for rooms, chores, bunnies and bookings (`RoomController`, `ChoreController`, `BunnyController`, `BookingController`)
- [x] jBuilder views for rooms, chores, bunnies & bookings.
- [x] setup Webpack & Flux scaffold.
- [x] setup `APIUtil` to interact with the API.
- [x] test out API interaction in the console.

### Phase 3: Flux/React Architecture and Router (1.5 days)

**Objective:** Bookings can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each Booking component, building out the flux loop as needed.
  - [x] `Dashboard`
  - [x] `BookingDetailsForm`
  - [x] `BunnySearchForm`
    - [x] `BunnyIndex`
      - [x] `BunnyIndexItem`
  - [x] `BookingConfirmationForm`
- [x] setup cancellation from bookings within `Dashboard`
- [x] save Bookings to the DB on confirmation.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/login) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Implement detailed Booking Stages (1 day)

**Objective:** Add `BookingStageHeader`, `BookingDetailsForm`, `BunnySearch`, `Scheduler`, `QuickAssignment` and `BunnyFilter` components to booking process.

- [x] create `BookingStageHeader` and style `BookingDetailsForm` and `BunnySearchForm` components.
- [x] create `QuickAssignment` component.
  - [x] Apply CSS styling.

### Phase 6: Implement BunnyProfile and Reviews (1 day)

**Objective:** Add a profile view for Bunnies and create Review model.

- [ ] create `Review` model and table, reviews belong to completed bookings.
- [ ] create `BunnyProfile` component
- build out API, Flux loop, and components for:
  - [ ] creating review of a booking
  - [ ] viewing reviews in BunnyProfile
- [ ] Style new elements

### Phase 7: Add UserAccountPage and ChoreSearch on Dashboard (1 day)

**objective:** Add UserAccountPage component.

- [ ] create `UserAccountPage` and `ChoreSearch` component.
- build out API, Flux loop and components for:
  - [ ] searching for common chores
  - [ ] browsing account information

### Phase 8: Styling Cleanup and Seeding (0.5 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Sign in as Bunny, manage bookings.
- [ ] Smart component population (popular chores show in Dashboard)
- [ ] Add booking cancellations for bunnies.
- [ ] Allow users to upload profile pictures.
- [ ] Log in with Google / Facebook.
