if @bookings
  json.array! @bookings do |booking|
    json.id booking.id
    json.bunny do
      json.id booking.bunny.id
      json.name booking.bunny.user.name
      json.image_url asset_path(booking.bunny.user.image.url(:thumb))
    end
    json.parent do
      json.id booking.parent.id
      json.name booking.parent.name
      json.image_url asset_path(booking.parent.image.url(:thumb))
    end
    json.review booking.review
    json.chore booking.chore
    json.room booking.room
    json.details booking.details
    json.date booking.date
    json.completed booking.completed

  end
else
  json.array! @appointments do |appointment|
    json.id appointment.id
    json.bunny do
      json.id appointment.bunny.id
      json.name appointment.bunny.user.name
      json.image_url asset_path(appointment.bunny.user.image.url)
    end
    json.parent do
      json.id appointment.parent.id
      json.name appointment.parent.name
      json.image_url asset_path(appointment.parent.image.url)
    end
    json.review appointment.review
    json.chore appointment.chore
    json.room appointment.room
    json.details appointment.details
    json.date appointment.date
    json.completed appointment.completed

  end
end
