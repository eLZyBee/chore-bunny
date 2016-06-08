class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :booking_id, null: false
      t.text :body
      t.boolean :positive, default: true

      t.timestamps null: false
    end
    add_index :reviews, :booking_id
  end
end
