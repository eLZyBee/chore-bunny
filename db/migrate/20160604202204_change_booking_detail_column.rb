class ChangeBookingDetailColumn < ActiveRecord::Migration
  def change
    remove_column :bookings, :details, :json
    add_column :bookings, :details, :text, null: false
  end
end
