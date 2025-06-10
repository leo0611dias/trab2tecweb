import React, { useEffect, useContext } from 'react';
import SuccessIcon from "../../img/success.png";
import OrderContext from '../../context/orderContext';

const OrderConfirmation = () => {
  const { checkoutDetails } = useContext(OrderContext);

  useEffect(() => {
    fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(checkoutDetails)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao enviar pedido");
        console.log("Pedido enviado com sucesso!");
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  }, [checkoutDetails]);

  return (
    <center>
      <img alt="" className="img-circle" src={SuccessIcon} width="50px" height="50px" />
      <br /><br />
      <h4>Your order has been successfully placed!</h4>
      <br /><br />
    </center>
  );
};

export default OrderConfirmation;
