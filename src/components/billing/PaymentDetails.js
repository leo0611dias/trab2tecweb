import React, { useContext, useState } from 'react'
import { Form, FormGroup, Row, Col, Label, FormFeedback } from 'reactstrap';
import TextInput from '../common/TextInput';
import OrderContext from '../../context/orderContext'; // Importing Context API

const PaymentDetails = () => {
    const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API
    const [errors, setErrors] = useState({});

    const handleInputChange = ({ target: { name, value } }) => {
        const data = { ...checkoutDetails }
        data["PaymentsData"][name] = value;
        setCheckoutDetails(data);
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    const validate = () => {
        const { PaymentsData } = checkoutDetails;
        const newErrors = {};
        if (!PaymentsData.cardName) newErrors.cardName = "Obrigatório";
        if (!PaymentsData.cardNumber) newErrors.cardNumber = "Obrigatório";
        if (!PaymentsData.expiryDate) newErrors.expiryDate = "Obrigatório";
        if (!PaymentsData.cvvNumber) newErrors.cvvNumber = "Obrigatório";

        // Validação simples de cartão (16 dígitos)
        if (PaymentsData.cardNumber && !/^\d{16}$/.test(PaymentsData.cardNumber)) {
            newErrors.cardNumber = "Deve conter 16 dígitos numéricos";
        }
        // Validação de CVV (3 ou 4 dígitos)
        if (PaymentsData.cvvNumber && !/^\d{3,4}$/.test(PaymentsData.cvvNumber)) {
            newErrors.cvvNumber = "CVV inválido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const { PaymentsData } = checkoutDetails;

    return (
        <>
            <h5>Payment Method</h5> <br />
            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="cardName">Name on card *</Label>
                            <input
                                type="text"
                                name="cardName"
                                value={PaymentsData.cardName}
                                className={`form-control ${errors.cardName ? "is-invalid" : ""}`}
                                placeholder="Name on card"
                                onChange={handleInputChange}
                            />
                            {errors.cardName && <FormFeedback style={{ display: "block" }}>{errors.cardName}</FormFeedback>}
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="cardNumber">Card Number *</Label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={PaymentsData.cardNumber}
                                className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                                placeholder="Card Number"
                                onChange={handleInputChange}
                            />
                            {errors.cardNumber && <FormFeedback style={{ display: "block" }}>{errors.cardNumber}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="expiryDate">Expiry Date *</Label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={PaymentsData.expiryDate}
                                className={`form-control ${errors.expiryDate ? "is-invalid" : ""}`}
                                placeholder="MM/YY"
                                onChange={handleInputChange}
                            />
                            {errors.expiryDate && <FormFeedback style={{ display: "block" }}>{errors.expiryDate}</FormFeedback>}
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="cvvNumber">CVV *</Label>
                            <input
                                type="text"
                                name="cvvNumber"
                                value={PaymentsData.cvvNumber}
                                className={`form-control ${errors.cvvNumber ? "is-invalid" : ""}`}
                                placeholder="CVV"
                                onChange={handleInputChange}
                            />
                            {errors.cvvNumber && <FormFeedback style={{ display: "block" }}>{errors.cvvNumber}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default PaymentDetails
