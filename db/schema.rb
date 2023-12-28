# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_12_28_183446) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_trgm"
  enable_extension "plpgsql"
  enable_extension "unaccent"

  create_table "activities", id: :serial, force: :cascade do |t|
    t.string "trackable_type"
    t.integer "trackable_id"
    t.string "owner_type"
    t.integer "owner_id"
    t.string "key"
    t.jsonb "parameters", default: {}
    t.string "recipient_type"
    t.integer "recipient_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type"
    t.index ["owner_type", "owner_id"], name: "index_activities_on_owner_type_and_owner_id"
    t.index ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type"
    t.index ["recipient_type", "recipient_id"], name: "index_activities_on_recipient_type_and_recipient_id"
    t.index ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fields", force: :cascade do |t|
    t.string "name", null: false
    t.string "type"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ldaps", force: :cascade do |t|
    t.string "name", null: false
    t.string "host"
    t.string "port"
    t.string "domain"
    t.string "username"
    t.string "password"
    t.string "tree_base"
    t.string "user_search"
    t.string "sync_interval"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "outlets", force: :cascade do |t|
    t.string "name", null: false
    t.string "short"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_outlets_on_slug", unique: true
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "preferred_name"
    t.boolean "active", default: true, null: false
    t.bigint "default_position_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["default_position_id"], name: "index_people_on_default_position_id"
    t.index ["user_id"], name: "index_people_on_user_id"
  end

  create_table "people_roles", id: false, force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "role_id"
    t.index ["person_id", "role_id"], name: "index_people_roles_on_person_id_and_role_id"
    t.index ["person_id"], name: "index_people_roles_on_person_id"
    t.index ["role_id"], name: "index_people_roles_on_role_id"
  end

  create_table "periods", force: :cascade do |t|
    t.string "name", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "person_group_assignments", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.bigint "person_group_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_group_id"], name: "index_person_group_assignments_on_person_group_id"
    t.index ["person_id"], name: "index_person_group_assignments_on_person_id"
  end

  create_table "person_groups", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_person_groups_on_slug", unique: true
  end

  create_table "person_groups_roles", id: false, force: :cascade do |t|
    t.bigint "person_group_id"
    t.bigint "role_id"
    t.index ["person_group_id", "role_id"], name: "index_person_groups_roles_on_person_group_id_and_role_id"
    t.index ["person_group_id"], name: "index_person_groups_roles_on_person_group_id"
    t.index ["role_id"], name: "index_person_groups_roles_on_role_id"
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text "content"
    t.text "label"
    t.string "searchable_type"
    t.bigint "searchable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable"
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.bigint "outlet_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["outlet_id"], name: "index_positions_on_outlet_id"
    t.index ["slug"], name: "index_positions_on_slug", unique: true
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource"
  end

  create_table "rules", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "field_id", null: false
    t.string "operator"
    t.decimal "operation_value"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id"], name: "index_rules_on_field_id"
  end

  create_table "service_templates", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "service_templates_fields", force: :cascade do |t|
    t.bigint "service_template_id", null: false
    t.bigint "field_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id"], name: "index_service_templates_fields_on_field_id"
    t.index ["service_template_id"], name: "index_service_templates_fields_on_service_template_id"
  end

  create_table "services", force: :cascade do |t|
    t.date "date", null: false
    t.bigint "period_id", null: false
    t.bigint "service_template_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["period_id"], name: "index_services_on_period_id"
    t.index ["service_template_id"], name: "index_services_on_service_template_id"
  end

  create_table "services_periods", force: :cascade do |t|
    t.bigint "service_id", null: false
    t.bigint "period_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["period_id"], name: "index_services_periods_on_period_id"
    t.index ["service_id"], name: "index_services_periods_on_service_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.bigint "person_id", null: false
    t.bigint "position_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_shifts_on_person_id"
    t.index ["position_id"], name: "index_shifts_on_position_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.boolean "active", default: true, null: false
    t.jsonb "table_preferences", default: {}
    t.jsonb "user_preferences", default: {}
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["table_preferences"], name: "index_users_on_table_preferences", using: :gin
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
    t.index ["user_preferences"], name: "index_users_on_user_preferences", using: :gin
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  add_foreign_key "people", "positions", column: "default_position_id"
  add_foreign_key "people", "users"
  add_foreign_key "person_group_assignments", "people"
  add_foreign_key "person_group_assignments", "person_groups"
  add_foreign_key "positions", "outlets"
  add_foreign_key "rules", "fields"
  add_foreign_key "service_templates_fields", "fields"
  add_foreign_key "service_templates_fields", "service_templates"
  add_foreign_key "services", "periods"
  add_foreign_key "services", "service_templates"
  add_foreign_key "services_periods", "periods"
  add_foreign_key "services_periods", "services"
  add_foreign_key "shifts", "people"
  add_foreign_key "shifts", "positions"
end
