#!/bin/bash

BASE_URL="http://localhost:8080/api"

echo "1. GET /api/products/"
curl -s "$BASE_URL/products/" | jq .
echo -e "\n"

echo "2. POST /api/products/ (Add Product)"
curl -s -X POST "$BASE_URL/products/" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Product",
    "description": "A description",
    "code": "XYZ123",
    "price": 100,
    "status": true,
    "stock": 10,
    "category": "Test",
    "thumbnails": ["img1.jpg"]
  }' | jq .
echo -e "\n"

echo "3. GET /api/products/ (After Add)"
curl -s "$BASE_URL/products/" | jq .
echo -e "\n"

echo "4. PUT /api/products/{id} (Update Product)"
# Assuming ID 1 exists or the one we just created is the last one. 
# We'll just try to update ID 1 for now, or we can parse the output, but let's keep it simple.
curl -s -X PUT "$BASE_URL/products/1" \
  -H "Content-Type: application/json" \
  -d '{
    "price": 150
  }' | jq .
echo -e "\n"

echo "5. DELETE /api/products/{id}"
curl -s -X DELETE "$BASE_URL/products/1" | jq .
echo -e "\n"

echo "6. POST /api/carts/ (Create Cart)"
CART_RES=$(curl -s -X POST "$BASE_URL/carts/" \
  -H "Content-Type: application/json" \
  -d '{
    "products": []
  }')
echo $CART_RES | jq .
echo -e "\n"

# Extract Cart ID (simple extraction, assuming valid json return)
CID=$(echo $CART_RES | jq .id)
echo "Created Cart ID: $CID"

echo "7. GET /api/carts/$CID"
curl -s "$BASE_URL/carts/$CID" | jq .
echo -e "\n"

echo "8. POST /api/carts/$CID/product/2 (Add Product to Cart)"
# Assuming Product ID 2 exists. If not, this might fail unless we created it. 
# Let's verify products.json content first or add another product to be sure.
curl -s -X POST "$BASE_URL/carts/$CID/product/2" | jq .
echo -e "\n"
