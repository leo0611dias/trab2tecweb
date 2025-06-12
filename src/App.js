
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MultiStepForm from "./components/common/MultiStepForm/MultiStepForm";
import { ShippingAddress, PaymentDetails, ReviewOrder, OrderConfirmation } from "./components/billing/index";
import OrderContext from './context/orderContext'; // Context API
import Listagem from './components/Listagem'; // NOVO componente de listagem

import "./App.css"; // Importando estilo

// Componentes do formulário por etapa
const componentsList = [
  { headerText: 'Shipping Address', headerIcon: 'fa fa-address-card', component: <ShippingAddress /> },
  { headerText: 'Payment Details', headerIcon: 'fa fa-credit-card', component: <PaymentDetails /> },
  { headerText: 'Review Order', headerIcon: 'fa fa-clock-o', component: <ReviewOrder /> },
  { headerText: 'Order Confirmation', headerIcon: 'fa fa-check', component: <OrderConfirmation /> },
];

// Estado inicial do formulário
const InitialValues = {
  shippingData: { firstName: "", lastName: "", address1: "", address2: "", city: "", state: "", postalcode: "", country: "" },
  PaymentsData: { cardName: "", cardNumber: "", expiryDate: "", cvvNumber: "" },
  productsData: [
    { id: "pr1", productName: "Product 1" },
    { id: "pr2", productName: "Product 2" },
    { id: "pr3", productName: "Product 3" },
    { id: "pr4", productName: "Product 4" }
  ]
};

function App() {
  const [checkoutDetails, setCheckoutDetails] = useState(InitialValues);
  const [proceedNext, setProceedNext] = useState(true);

  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Formulário</Link>
        <Link to="/listagem">Listagem</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <OrderContext.Provider value={{ checkoutDetails, setCheckoutDetails, setProceedNext }}>
                <MultiStepForm
                  list={componentsList}
                  displayProgressBar={true}
                  proceedNext={proceedNext}
                />
              </OrderContext.Provider>
            </div>
          }
        />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </Router>
  );
}

export default App;
