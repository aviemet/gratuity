class CreateServicesPeriods < ActiveRecord::Migration[7.1]
  def change
    create_table :services_periods do |t|
      t.references :service, null: false, foreign_key: true
      t.references :period, null: false, foreign_key: true

      t.timestamps
    end
  end
end
