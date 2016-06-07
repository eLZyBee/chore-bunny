# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160607161311) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "bunny_id",                   null: false
    t.integer  "parent_id",                  null: false
    t.integer  "chore_id",                   null: false
    t.integer  "room_id",                    null: false
    t.datetime "date",                       null: false
    t.boolean  "completed",  default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.text     "details",                    null: false
  end

  add_index "bookings", ["bunny_id"], name: "index_bookings_on_bunny_id", using: :btree
  add_index "bookings", ["chore_id"], name: "index_bookings_on_chore_id", using: :btree
  add_index "bookings", ["parent_id"], name: "index_bookings_on_parent_id", using: :btree
  add_index "bookings", ["room_id"], name: "index_bookings_on_room_id", using: :btree

  create_table "bunnies", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bunnies", ["user_id"], name: "index_bunnies_on_user_id", using: :btree

  create_table "chores", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "links", force: :cascade do |t|
    t.integer  "chore_id",   null: false
    t.integer  "room_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "links", ["chore_id"], name: "index_links_on_chore_id", using: :btree
  add_index "links", ["room_id"], name: "index_links_on_room_id", using: :btree

  create_table "rooms", force: :cascade do |t|
    t.string   "name",               null: false
    t.text     "description",        null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "rooms", ["name"], name: "index_rooms_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",               null: false
    t.string   "email",              null: false
    t.string   "session_token",      null: false
    t.string   "password_digest",    null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "google_uid"
    t.text     "blurb"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["google_uid"], name: "index_users_on_google_uid", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
