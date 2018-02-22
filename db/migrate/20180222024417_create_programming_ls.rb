class CreateProgrammingLs < ActiveRecord::Migration[5.0]
  def change
    create_table :programming_ls do |t|
      t.string :name
      t.string :imgLink
      t.integer :percent_iq

      t.timestamps
    end
  end
end
