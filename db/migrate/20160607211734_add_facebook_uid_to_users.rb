class AddFacebookUidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :facebook_uid, :string
    add_index :users, :facebook_uid
  end
end
