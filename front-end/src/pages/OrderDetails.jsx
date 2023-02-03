import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleById, updateStatus } from '../Services/DeliveryAppApi';
import TableHeaderCheckout from '../Components/TableHeaderCheckout';
import TableBodyCheckout from '../Components/TableBodyCheckout';
import DeliveryAppContext from '../Context/DeliveryAppContext';
import NavBar from '../Components/NavBar';

export default function OrderDetails() {
  const { orderId } = useParams();
  const { setCart } = useContext(DeliveryAppContext);
  const [saleData, setSalaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const COD = 'customer_order_details';
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const resultOrder = async () => {
      const orderData = await getSaleById(orderId, token);
      setSalaData(orderData);
      setLoading(false);
      return setCart(orderData.products);
    };
    resultOrder();
  }, [setCart, orderId]);

  const getDateFormated = (date) => {
    const dateFormated = new Date(date);
    const day = dateFormated.getDate();
    const month = dateFormated.getMonth() + 1;
    const year = dateFormated.getFullYear();
    return `0${day}/0${month}/${year}`;
  };

  const handleStatus = async (event) => {
    const { name } = event.target;
    const { token } = JSON.parse(localStorage.getItem('user'));
    await updateStatus(orderId, name, token);
    const orderData = await getSaleById(orderId, token);
    setSalaData(orderData);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <NavBar />
      <h1>Detalhe de Pedido</h1>
      <div>
        <section key={ saleData.id }>
          <div>
            <p
              data-testid={ `${COD}__element-order-details-label-order-id` }
            >
              {`Pedido ${saleData.id}`}
            </p>
            <p data-testid={ `${COD}__element-order-details-label-seller-name` }>
              {`P. Vend: ${saleData?.seller?.name}`}
            </p>
            <p data-testid={ `${COD}__element-order-details-label-order-date` }>
              {`${getDateFormated(saleData.saleDate)}`}
            </p>
            <p
              data-testid={ `${COD}__element-order-details-label-delivery-status${0}` }
            >
              {`${saleData.status}`}
            </p>
            <button
              data-testid="customer_order_details__button-delivery-check"
              name="Entregue"
              type="button"
              disabled={ saleData.status !== 'Em Trânsito' }
              onClick={ handleStatus }
            >
              Marcar como Entregue
            </button>
          </div>
          <table>
            <TableHeaderCheckout />
            <TableBodyCheckout />
          </table>
        </section>
        <button
          data-testid="customer_order_details__element-order-total-price"
          type="button"
        >
          { `Total: ${saleData?.totalPrice?.replace('.', ',')}` }
        </button>
      </div>
    </div>
  );
}
