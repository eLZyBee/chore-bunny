# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Seed Guest account
User.create(name: 'Guesty McGuestface', email: 'guest@test.com', password: 'password')

# Seed users that will be bunnies and seed them as bunnies too
bunnies = %w{Elki Avie Tommy Ryan Jack Michelle Laura Marcus Alan Sasha}
blurbs = [
  "I am very careful and delicate. If you want a job done right, choose me.",
  "I'm good at hiding and am very helpful.",
  "I like to race to get things done quickly, don't trust me with ceramics.",
  "I love outdoor chores and am very good at watering the plants.",
  "If the price is right, I'll get it done in no time.",
  "I am super organized and tidy but I need help to reach the sink.",
  "I like dusting and I don't like the vacuum.",
  "I am very careful emptying the dishwasher, I can even prepare meals.",
  "Always careful not to overfeed the pets. Knows where all the cleaning stuff is.",
  "I love cooking especially baking, I will even clean up after."
]
bunnies.each_with_index do |bunny, i|
  this_bunny = User.create(
    name: bunny,
    email: "#{bunny.downcase}@#{bunny.downcase}.com",
    password: "password",
    blurb: blurbs[i]
  )
  this_bunny.image = File.open("#{Rails.root}/app/assets/images/bunnies/#{this_bunny.name.downcase}.png")
  this_bunny.save
end

i = 2
while i <= 11
  Bunny.create(user_id: i)
  i += 1
end

# Seed rooms
rooms = {
  "Study" => "Got books lying around?", # 1
  "Kitchen" => "Do I see a pile of washing up?", # 2
  "Bathroom" => "Those teeth won't brush themselves!", # 3
  "Bedroom" => "How do you even walk through this place?", # 4
  "Living room" => "When did we last put the vacuum over?", # 5
  "Garden" => "Grab your watering can and wellies!", # 6
  "Whole house" => "Nobody is going outside until there is no dust in this house!", # 7
  "Attic" => "Chase out the ghosts.", # 8
  "Basement" => "Load the washer dryer.", # 9
  "Conservatory" => "Those windows could use a wipe down.", # 10
  "Garage" => "You can't drive the car until you can fix it.", # 11
  "Hall" => "Why are there shoes everywhere?", # 12
  "Porch" => "Did the paper arrive today?" # 13
}

highlighted_rooms = %w{ kitchen bathroom bedroom living\ room garden whole\ house}

rooms.each do |name, description|
  room = Room.create(
    name: name,
    description: description
  )
  if highlighted_rooms.include?(room.name.downcase)
    filename = room.name.downcase.gsub(' ', '')
    room.image = File.open("#{Rails.root}/app/assets/images/rooms/#{filename}.png")
    room.save
  end
end

# Seed chores
chores = [
  "Put away toys",
  "Fill pet's food dish",
  "Put clothes in hamper",
  "Wipe up spills",
  "Dust",
  "Pile books and magazines",
  "Make bed",
  "Empty wastebaskets",
  "Bring in mail or newspaper",
  "Clear table",
  "Pull weeds",
  "Vacuum",
  "Water flowers",
  "Unload utensils from dishwasher",
  "Wash plastic dishes at the sink",
  "Fix bowl of cereal",
  "Sort laundry",
  "Sweep floors",
  "Set and clear table",
  "Help make and pack lunch",
  "Weed and rake leaves",
  "Tidy bedroom",
  "Load dishwasher",
  "Put away groceries",
  "Help make dinner",
  "Make own snacks",
  "Wash table after meals",
  "Put away own laundry",
  "Sew buttons",
  "Make own breakfast",
  "Peel vegetables",
  "Cook simple foods, such as toast",
  "Mop floor",
  "Take pet for a walk",
  "Unload dishwasher",
  "Fold laundry",
  "Clean bathroom",
  "Wash windows",
  "Wash car",
  "Cook simple meal with supervision",
  "Iron clothes",
  "Do laundry",
  "Baby-sit younger siblings",
  "Clean Kitchen",
  "Change bed sheets"
]

chores.each do |chore|
  Chore.create(name: chore)
end

# Seed links between chores and rooms
rooms_with_chores = {
  1 => [5, 6, 8, 12, 13, 18, 29, 33, 38, 41],
  2 => [2, 5, 8, 10, 13, 14, 15, 16, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31, 32, 33, 35, 38, 40, 41, 42, 44],
  3 => [1, 5, 8, 33, 37, 38],
  4 => [1, 3, 5, 6, 7, 8, 12, 17, 22, 28, 36, 38, 45],
  5 => [1, 2, 4, 5, 6, 8, 10, 12, 13, 18, 19, 27, 33, 38, 43],
  6 => [1, 9, 11, 13, 21, 34, 39],
  7 => [1, 2, 5, 8, 12, 13, 18, 38, 43],
  8 => [6],
  9 => [6, 17, 36, 41, 42],
  10 => [4, 5, 8, 10, 12, 18, 19, 27, 29, 33, 38, 41],
  11 => [6, 39],
  12 => [2, 5, 8, 12, 18, 33, 38, 41],
  13 => [2, 9, 11, 13, 21, 34]
}

rooms_with_chores.each do |room_id, chore_ids|
  chore_ids.each do |chore_id|
    Link.create(room_id: room_id, chore_id: chore_id)
  end
end

# QuickAssign seed

Bunny.create(id: -1, user_id: -1)
User.create(id: -1, name:'Quick Assign', email:'quick@assign.qa', password:'quickassign')
