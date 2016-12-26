class Product < ApplicationRecord
  enum category: [:mobile, :watches, :detergents]
end
