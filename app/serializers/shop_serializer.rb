class ShopSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :address_1, :address_2, :image_url, :slug, :city, :town, :post_code

  has_many :products
end

