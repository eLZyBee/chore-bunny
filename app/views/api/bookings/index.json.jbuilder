if @bookings
  json.array! @bookings do |booking|
    json.extract! booking, :id, :bunny_id, :parent_id, :chore_id, :room_id, :details, :date, :completed
  end
else
  json.array! @appointments do |appointment|
    json.extract! appointment, :id, :bunny_id, :parent_id, :chore_id, :room_id, :details, :date, :completed
  end
end
