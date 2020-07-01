class Shop < ApplicationRecord
  has_many :products
  validates :name, :address_1, :city, :post_code, presence: true
  validates :post_code, uniqueness: true

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end
