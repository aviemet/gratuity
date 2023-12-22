class CreateRules < ActiveRecord::Migration[7.1]
  def change
    create_table :rules do |t|
      t.string :name
      t.references :field, null: false, foreign_key: true
      t.string :operator
      t.decimal :operation_value
      t.text :description

      t.timestamps
    end
  end
end
