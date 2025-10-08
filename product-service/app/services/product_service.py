from models.product import Product
import uuid

class ProductService:
  def __init__(self):
    self.products = []

  def get_all_products(self):
    """Return a list of all products."""
    return [product.to_dict() for product in self.products]
  
  def get_product(self, product_id: str):
    """Return a product by its id."""
    for product in self.products:
      if product.id == product_id:
        return product.to_dict()
    return None
  
  def add_product(self, name: str, description: str, type: str, price: float):
    """Add a new product to the list."""
    new_product = Product(id=str(uuid.uuid4()), name=name, description=description, type=type, price=price)
    self.products.append(new_product)
    return new_product.to_dict()