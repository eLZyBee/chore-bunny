class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :bunny_id, null: false
      t.integer :parent_id, null: false
      t.integer :chore_id, null: false
      t.integer :room_id, null: false

      t.json :details, null: false
      t.datetime :date, null: false
      t.boolean :completed, default: false

      t.timestamps null: false
    end
    add_index :bookings, :bunny_id
    add_index :bookings, :parent_id
    add_index :bookings, :chore_id
    add_index :bookings, :room_id
  end
end
