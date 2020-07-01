class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :category_name
      t.string :description
      t.belongs_to :shop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
