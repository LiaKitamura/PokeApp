class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :team_name,  null: false, unique: true
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
