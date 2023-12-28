class CreateOutlets < ActiveRecord::Migration[7.1]
  def change
    create_table :outlets do |t|
      t.string :name
      t.string :slug

      t.timestamps
    end
  end
end
