import React, { useContext, useState, forwardRef, useImperativeHandle } from 'react';
import { Form, FormGroup, Row, Col, Label, FormFeedback } from 'reactstrap';
import TextInput from '../common/TextInput';
import OrderContext from '../../context/orderContext'; // Importing Context API

const ShippingAddress = forwardRef((props, ref) => {
    const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API
    const [errors, setErrors] = useState({});

    const handleInputChange = ({ target: { name, value } }) => {
        const data = { ...checkoutDetails }
        data["shippingData"][name] = value;
        setCheckoutDetails(data);
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    const validate = () => {
        const { shippingData } = checkoutDetails;
        const newErrors = {};
        if (!shippingData.firstName) newErrors.firstName = "Obrigatório";
        if (!shippingData.lastName) newErrors.lastName = "Obrigatório";
        if (!shippingData.address1) newErrors.address1 = "Obrigatório";
        if (!shippingData.city) newErrors.city = "Obrigatório";
        if (!shippingData.state) newErrors.state = "Obrigatório";
        if (!shippingData.postalcode) newErrors.postalcode = "Obrigatório";
        if (!shippingData.country) newErrors.country = "Obrigatório";
        if (shippingData.address1 && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(shippingData.address1)) {
            newErrors.address1 = "Deve ser um email válido";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    useImperativeHandle(ref, () => ({
        validate
    }));

    const { shippingData } = checkoutDetails;

    return (
        <>
            <h5>Shipping Address</h5> <br />
            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="firstName">First Name *</Label>
                            <input
                                type="text"
                                name="firstName"
                                value={shippingData.firstName}
                                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                placeholder="First Name"
                                onChange={handleInputChange}
                            />
                            {errors.firstName && <FormFeedback style={{ display: "block" }}>{errors.firstName}</FormFeedback>}
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="lastName">Last Name *</Label>
                            <input
                                type="text"
                                name="lastName"
                                value={shippingData.lastName}
                                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                placeholder="Last Name"
                                onChange={handleInputChange}
                            />
                            {errors.lastName && <FormFeedback style={{ display: "block" }}>{errors.lastName}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address1">Email *</Label>
                    <input
                        type="email"
                        name="address1"
                        value={shippingData.address1}
                        className={`form-control ${errors.address1 ? "is-invalid" : ""}`}
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                    {errors.address1 && <FormFeedback style={{ display: "block" }}>{errors.address1}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="address2">Address 2</Label>
                    <input
                        type="text"
                        name="address2"
                        value={shippingData.address2}
                        className="form-control"
                        placeholder="Address 2"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="city">City *</Label>
                            <input
                                type="text"
                                name="city"
                                value={shippingData.city}
                                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                placeholder="City"
                                onChange={handleInputChange}
                            />
                            {errors.city && <FormFeedback style={{ display: "block" }}>{errors.city}</FormFeedback>}
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="state">State/Region *</Label>
                            <input
                                type="text"
                                name="state"
                                value={shippingData.state}
                                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                                placeholder="State/Region"
                                onChange={handleInputChange}
                            />
                            {errors.state && <FormFeedback style={{ display: "block" }}>{errors.state}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="postalcode">Postal Code *</Label>
                            <input
                                type="text"
                                name="postalcode"
                                value={shippingData.postalcode}
                                className={`form-control ${errors.postalcode ? "is-invalid" : ""}`}
                                placeholder="Postal Code"
                                onChange={handleInputChange}
                            />
                            {errors.postalcode && <FormFeedback style={{ display: "block" }}>{errors.postalcode}</FormFeedback>}
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="country">Country *</Label>
                            <input
                                type="text"
                                name="country"
                                value={shippingData.country}
                                className={`form-control ${errors.country ? "is-invalid" : ""}`}
                                placeholder="Country"
                                onChange={handleInputChange}
                            />
                            {errors.country && <FormFeedback style={{ display: "block" }}>{errors.country}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
});
export default ShippingAddress;
