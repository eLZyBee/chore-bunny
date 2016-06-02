json.array! @chores do |chore|
  json.extract! chore, :id, :name
end
