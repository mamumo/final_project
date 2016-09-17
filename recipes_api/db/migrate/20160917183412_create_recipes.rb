class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :servings
      t.text :ingredients
      t.text :preperation
      t.string :image
      t.string :video

      t.timestamps null: false
    end
  end
end
