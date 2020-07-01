class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :category_name, :description, :shop_id
end
