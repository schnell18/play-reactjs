import React from "react"

function Product(props) {
    return (
        <div>
            <h3>Name: {props.product.name}</h3>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.product.price) } - {props.product.description}</p>
        </div>
    )
}

export default Product