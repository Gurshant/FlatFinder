class RemovePhoneFromUsers < ActiveRecord::Migration[6.0]
  def change

    remove_column :users, :phone, :integer
    add_column :users, :phone, :string
  end
end
