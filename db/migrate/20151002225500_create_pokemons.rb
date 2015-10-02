class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :pokedex_id
      t.text :types, array: true, default: []
      t.text :moves, array: true, default: []
      t.timestamps null: false
    end
  end
end
