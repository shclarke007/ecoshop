class AddWebsiteToShops < ActiveRecord::Migration[6.0]
  def change
    add_column :shops, :website, :string
  end
end
