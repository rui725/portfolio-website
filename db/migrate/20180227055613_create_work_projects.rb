class CreateWorkProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :work_projects do |t|
      t.string :title
      t.text :description
      t.string :imgLink
      t.string :info_link
      t.integer :category
      t.string :technology

      t.timestamps
    end
  end
end
