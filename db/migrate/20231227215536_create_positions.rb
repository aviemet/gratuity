class CreatePositions < ActiveRecord::Migration[7.1]
  def change
    create_table :positions do |t|
      t.string :name
      t.string :slug
      t.index :slug, unique: true

      t.timestamps
    end
  end
end
