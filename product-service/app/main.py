from fastapi import FastAPI
#from app.routers import product

app = FastAPI()

# app.include_router(product.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Product Service!"}
