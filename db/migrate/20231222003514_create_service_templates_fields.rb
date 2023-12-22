class CreateServiceTemplatesFields < ActiveRecord::Migration[7.1]
  def change
    create_table :service_templates_fields do |t|
      t.references :service_template, null: false, foreign_key: true
      t.references :field, null: false, foreign_key: true

      t.timestamps
    end
  end
end
