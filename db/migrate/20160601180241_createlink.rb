class Createlink < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :chore_id, null: false
      t.integer :room_id, null: false

      t.timestamps null: false
    end
    add_index :links, :chore_id
    add_index :links, :room_id
  end
end
