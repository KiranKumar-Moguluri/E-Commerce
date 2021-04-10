  
import axios from 'axios';
import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import CartScreen from '../screens/CartScreen';

export default class Checkout extends Component {
    onToken = (token, addresses) => {
        axios.post("http://demo-check2-kalikaprasadreddy-dev.apps.sandbox.x8i5.p1.openshiftapps.com/user/checkout", token).then((response) => {
            var tnxId = response.data.split("/")
            console.log(tnxId[4])
            //console.log(CartScreen.getCartSubTotal);
            //window.open(response.data, '_self')
        })
            .catch((error) => { alert('Payment rejected!') })
    };

    render() {
        return (
            <StripeCheckout
                amount = {CartScreen.getCartSubTotal} //sample amount need to be loaded from previous componenets based on bill. Should change after some time
            
                billingAddress
                //description="Good Product" //Need to be loaded from previous components, Still not yet implemented in backend for prod Description
                locale="auto"
                name="Payment Gateway"
                //shippingAddress
                currency="INR"
                stripeKey="pk_test_51IXRY4SBSAjaFl6wjK3IErufWwgWq5uQhaZQdazzumz3QYVlfr50Fnb0RhRw5RPKURPyOzJcixGGg3QmSSywWkHe00EwKICt68"
                token={this.onToken}
                zipCode
                label="Pay with 💳"
            />
        )
    }
}