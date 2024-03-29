# frozen_string_literal: true

class ShopSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :address_1, :address_2, :image_url, :slug, :city,
             :town, :post_code, :website, :total_likes, :updated_at

  has_many :products
end

