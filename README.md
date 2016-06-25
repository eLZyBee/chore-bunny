# ChoreBunny
![logo]
[logo]: ./app/assets/images/chore_bunny_logo.png

[Chore Bunny][heroku]

[heroku]: http://www.chorebunny.site

## What is it?

ChoreBunny is a web application inspired by TaskRabbit that is built using Ruby on Rails and React/Flux. The presentation twist is that instead of searching by task **categories**, you search by **rooms** in your house, and instead of **taskers**, you have your **bunnies** (children) to choose from to complete household chores.

ChoreBunny is a single-page application built with Ruby on Rails, React.js and Flux. It uses a PostgreSQL database.

![dash]
[dash]: ./docs/wireframes/chorebunny-dashboard.png

## Features

### Making bookings

The key functionality of the site is hiring your bunnies for household chores. As such the dashboard/home page offers three ways to start making a new booking. There is the chore `Search` bar where you can search by specific chore. A make a booking button for diving straight into booking. Or you can click on one of the most popular rooms displayed in the `RoomIndex` component, to book a chore in that room.

The `Booking` component renders the appropriate stage of booking, `BookingDetailsForm`, `BunnySearchForm` and finally `BookingConfirmationForm`.  Available bunnies are rendered under the `BunnyIndex` inside the `BunnySearchForm` and `QuickAssignment` too, which allows any bunny to accept the chore.

### Interacting with bookings

Any new bookings turn up on your dashboard/home page under the `BookingIndex` component. This holds a series of `BookingIndexItems` which render differently based on whether the booking is **completed** or not, and whether or not a **review** has been left for the booking.

### Bunny profiles

Just in case you don't know your children very well and could use a refresher on them, the `BunnyProfile` component contains information about individual bunnies. This is subdivided into the `BunnyChores`, `BunnyReviews` and `BunnyAbout` components.


## Further Implementation

### Bunny log in

The immediate functionality I would like to add is the ability for Bunnies to log in and view their upcoming appointments. Expanding on this, they should also be able to set their rate (in BunnyPoints™), view their accrued BunnyPoints™ and a list of rewards (set by the parent) with their associated cost.

### Accepting Quick Assignments

Bunnies should be able to see a list of quick assign chores on their dashboard. On a 'first come first serve' basis, they should be able to accept a chore and the parents dashboard should dynamically update to reflect which Bunny has accepted the chore.
