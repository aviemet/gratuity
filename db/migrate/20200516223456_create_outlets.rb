class CreateOutlets < ActiveRecord::Migration[7.1]
  def change
    create_table :outlets do |t|
      t.string :name, null: false
      t.string :short
      t.string :slug
      t.index :slug, unique: true

      t.timestamps
    end
  end
end
