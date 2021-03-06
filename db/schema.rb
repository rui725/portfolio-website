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

ActiveRecord::Schema.define(version: 20180317012237) do

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "programming_ls", force: :cascade do |t|
    t.string   "name"
    t.string   "imgLink"
    t.integer  "percent_iq"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tools_skills", force: :cascade do |t|
    t.string   "name"
    t.string   "imgLink"
    t.integer  "percent_iq"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_emails", force: :cascade do |t|
    t.string   "email"
    t.string   "password"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "work_projects", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "imgLink"
    t.string   "info_link"
    t.integer  "category"
    t.string   "technology"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
