class Addgoogleuidtousers < ActiveRecord::Migration
  def change
    add_column :users, :google_uid, :integer
  end
end
