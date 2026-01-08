function Product(props) {
    const{title, price, onSale} = props

    return(
        <>
        <h1>{title}</h1>
        <p>{price}</p>
        <p style={{color:onSale ? "green" : "red"}}>{onSale ? "SALE!" : "not on sale"}</p>
        </>
    )
}

export default Product