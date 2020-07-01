# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '--- Seeding Shops ---'
3.times do
  Shop.create(
    name: Faker::Company.name,
    address_1: Faker::Address.street_address,
    address_2: Faker::Address.community,
    city: Faker::Address.city,
    town: Faker::Address.city,
    post_code: Faker::Address.postcode,
    image_url: 'https://media.gettyimages.com/photos/an-exterior-view-of-the-body-shop-in-central-london-picture-id1170112053?s=612x612'
  )
end

puts '--- Seeding Products ---'
Product.create([
  {
    category_name: 'Dry Goods',
    description: 'Dry items such as ',
    shop: Shop.first
  },
  {
    category_name: 'Fruits',
    description: 'Seasonal fruits',
    shop: Shop.last
  },
  {
    category_name: 'Vegetables',
    description: 'Seasonal vegetables',
    shop: Shop.find(2)
  },
  {
    category_name: 'Fruits',
    description: 'Seasonal Fruits',
    shop: Shop.last
  },
  {
    category_name: 'Fruits',
    description: 'Seasonal Fruits',
    shop: Shop.first
  },
  {
    category_name: 'Household cleaners',
    description: 'Eco cleaners for the house',
    shop: Shop.last
  }
  ])
