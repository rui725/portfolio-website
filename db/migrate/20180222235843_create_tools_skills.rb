class CreateToolsSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :tools_skills do |t|
      t.string :name
      t.string :imgLink
      t.integer :percent_iq

      t.timestamps
    end
  end
end
