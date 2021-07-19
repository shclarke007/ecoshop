# frozen_string_literal: true

class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :category_name, :description, :shop_id
end
