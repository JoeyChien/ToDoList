class Group < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2 }

  has_many :to_do_list
end
