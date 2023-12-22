class CreateFields < ActiveRecord::Migration[7.1]
  def change
    create_table :fields do |t|
      t.string :name
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
