
class Product:
  def __init__(self, id: str, name: str, description: str, type: str, price: float):
    self.id = id
    self.name = name
    self.description = description
    self.type = type
    self.price = price

  def to_dict(self):
    """Convert the product object to a dictionary."""
    return {
      "id": self.id,
      "name": self.name,
      "description": self.description,
      "type": self.type,
      "price": self.price
    }