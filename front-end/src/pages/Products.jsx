import React, { useEffect, useState } from 'react';
import LoadingBar from '../Components/LoadingBar';
import NavBar from '../Components/NavBar';
import ProductCard from '../Components/ProductCard';
import { getDeliveryData } from '../Services/DeliveryAppApi';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUserToken = JSON.parse(localStorage.getItem('user'));
    const { token } = getUserToken;
    const data = async () => {
      const response = await getDeliveryData(token);
      setProducts(response);
    };
    data();
  }, []);

  return (
    <div>
      <NavBar />
      { products && products.length === 0 && <LoadingBar />}
      <div className="grid grid-cols-4 gap-4 mt-4 rounded-lg">
        {
          products.map((item) => (
            <ProductCard key={ item.id } products={ item } />
          ))
        }
      </div>
    </div>
  );
}
