class CreateBunnies < ActiveRecord::Migration
  def change
    create_table :bunnies do |t|
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :bunnies, :user_id
  end
end
