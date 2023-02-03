import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const testId = 'customer_products__element-navbar-link-products';

export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  const onClickNavigation = (setPath) => {
    history.push(setPath);
  };

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  const { name, role } = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="header-container">
      <nav>
        {
          role === 'customer'
            && <button type="button" data-testid={ testId }>Produtos</button>
        }
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ role === 'customer'
            ? () => onClickNavigation('/customer/orders')
            : () => onClickNavigation('/seller/orders') }
          className="ordersBtn"
        >
          Meus Pedidos
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {name}
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
