json.id @booking.id
json.bunny do
  json.id @booking.bunny.id
  json.name @booking.bunny.user.name
  json.image_url asset_path(@booking.bunny.user.image.url)
end
json.parent do
  json.id @booking.parent.id
  json.name @booking.parent.name
  json.image_url asset_path(@booking.parent.image.url)
end
json.chore @booking.chore
json.room @booking.room
json.details @booking.details
json.date @booking.date
json.completed @booking.completed
