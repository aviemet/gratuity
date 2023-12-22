class CreatePeriods < ActiveRecord::Migration[7.1]
  def change
    create_table :periods do |t|
      t.string :name
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
