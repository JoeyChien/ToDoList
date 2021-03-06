class CreateToDoLists < ActiveRecord::Migration[6.0]
  def change
    create_table :to_do_lists do |t|
      t.string :name
      t.string :description
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
