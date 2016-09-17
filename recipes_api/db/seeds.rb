Recipe.destroy_all

Recipe.create!(
    {
       name: "Scrambled Eggs", servings: "3-4", ingredients:"4 eggs, dash of milk, pinch of salt, pinch of pepper", preperation:"1. Crack eggs into bowl. 2. Add milk, salt and pepper. 3. Whisk. 4. Pop in microwave for 2 mins.",
       image:"eggs.jpg", video:"https://www.youtube.com/embed/L_J6ERLpFKI?list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc"
    }
)# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
