class Product < ApplicationRecord
  belongs_to :shop
  validates :category_name, presence: true
end
