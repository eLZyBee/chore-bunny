class Changeusersforoauth < ActiveRecord::Migration
  def change
    remove_column :users, :google_uid, :integer
    add_column :users, :google_uid, :string
    add_index :users, :google_uid
  end
end
