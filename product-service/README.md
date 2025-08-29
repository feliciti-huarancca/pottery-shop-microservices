## Product Service (FastAPI)

This microservice handles product-related operations.

### Setup

1. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

### Run the service

```
uvicorn app.main:app --reload
```

### Run tests

```
pytest
```
