from fastapi import FastAPI
from routes import product

app = FastAPI(title="Product Service")

app.include_router(product.router, prefix="/products", tags=["Products"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Product Service!"}
