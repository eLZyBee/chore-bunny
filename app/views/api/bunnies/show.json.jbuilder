json.id @bunny.id
json.user do
  json.user_id @bunny.user.id
  json.name @bunny.user.name
  json.image_url @bunny.user.image.url
end
