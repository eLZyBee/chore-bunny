if @bookings
  json.array! @bookings do |booking|
    json.id booking.id
    json.bunny booking.bunny.user
    json.parent booking.parent
    json.chore booking.chore
    json.room booking.room
    json.details booking.details
    json.date booking.date
    json.completed booking.completed

  end
else
  json.array! @appointments do |appointment|
    json.id appointment.id
    json.bunny appointment.bunny.user
    json.parent appointment.parent
    json.chore appointment.chore
    json.room appointment.room
    json.details appointment.details
    json.date appointment.date
    json.completed appointment.completed

  end
end
