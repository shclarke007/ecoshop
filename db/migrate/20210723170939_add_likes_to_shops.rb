class AddLikesToShops < ActiveRecord::Migration[6.0]
  def change
    add_column :shops, :total_likes, :integer
  end
end
