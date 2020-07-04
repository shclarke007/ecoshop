class ShopSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :address_1, :address_2, :image_url, :slug, :city, :town, :post_code, :website

  has_many :products
end

