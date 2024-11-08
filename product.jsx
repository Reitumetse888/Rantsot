import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from localStorage on component mount
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const productName = event.target.productName.value;
    const productPrice = event.target.productPrice.value;
    const productQuantity = event.target.productQuantity.value;
    const productDescription = event.target.productDescription.value;

    const newProduct = {
      productName,
      productPrice,
      productQuantity,
      productDescription
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    event.target.reset(); // Reset the form after submission
  };

  const editProduct = (index) => {
    const product = products[index];
    
    const productName = prompt("Enter new Product Name:", product.productName);
    const productPrice = prompt("Enter new Product Price:", product.productPrice);
    const productQuantity = prompt("Enter new Product Quantity:", product.productQuantity);
    const productDescription = prompt("Enter new Product Description:", product.productDescription);

    if (productName && productPrice && productQuantity && productDescription) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        productName,
        productPrice,
        productQuantity,
        productDescription
      };
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <header>
      <section className="product-management">
        <form id="product-form" onSubmit={handleSubmit}>
          <h2>Product Management</h2>
          <div className="f1">
            <label htmlFor="product-name">Product Name:</label>
            <input type="text" id="product-name" name="productName" required />
          </div>
          <div className="f2">
            <label htmlFor="product-price">Product Price:</label>
            <input type="number" id="product-price" name="productPrice" required />
          </div>
          <div className="f3">
            <label htmlFor="product-quantity">Product Quantity:</label>
            <input type="number" id="product-quantity" name="productQuantity" required />
          </div>
          <div className="f4">
            <label htmlFor="product-description">Product Description:</label>
            <textarea id="product-description" name="productDescription"></textarea>
          </div>
          <button type="submit">Add Product</button>
          <Link to="/" className="homePageButton">
            <button type="button">HomePage</button>
          </Link>
        </form>
        <div className="h2">
          <h2>Product List</h2>
        </div>
        <table id="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productQuantity}</td>
                <td>{product.productDescription}</td>
                <td className='but'>
                  <button onClick={() => editProduct(index)}>Edit</button>
                  <button onClick={() => deleteProduct(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </header>
  );
}

export default Product;
