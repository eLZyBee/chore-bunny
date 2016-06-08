json.id @review.id
json.booking_id @review.booking_id
json.author @review.parent.name
json.image_url asset_path(@review.parent.image.url)
json.body @review.body
json.positive @review.positive
