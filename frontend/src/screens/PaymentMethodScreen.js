import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import OrderSteps from '../components/OrderSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentMethodScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <OrderSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='PayPal' name='paymentMethod'
                            value='PayPal'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required>
                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label='E-Wallet (ApplePay, SamsungPay, etc)'
                            id='EWallet' name='paymentMethod'
                            value='EWallet'
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label='Bank Account or Electronic Check'
                            id='BankAccount' name='paymentMethod'
                            value='BankAccount'
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentMethodScreen