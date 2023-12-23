class CreateServices < ActiveRecord::Migration[7.1]
  def change
    create_table :services do |t|
      t.date :date, null: false
      t.references :period, null: false, foreign_key: true
      t.references :service_template, null: false, foreign_key: true

      t.timestamps
    end
  end
end
