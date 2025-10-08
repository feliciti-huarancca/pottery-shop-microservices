from fastapi import APIRouter
from models.product import Product
from services.product_service import ProductService

router = APIRouter()
product_service = ProductService()

@router.get("/")
def get_all_products():
  return product_service.get_all_products()

@router.get("/{product_id}")
def get_product(product_id: str):
  return product_service.get_product(product_id)

# TODO use pydantic to handle parsing and validation
@router.post("/")
def add_product(product: dict):
  return product_service.add_product(product["name"], product["description"], product["type"], product["price"])