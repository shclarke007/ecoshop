class CreateShops < ActiveRecord::Migration[6.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :town
      t.string :post_code
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
