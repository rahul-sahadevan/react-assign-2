
// component for product card------------
function Product({product}){
    // console.log(product)

    return (
        <div className="product-card">
            <div className="image-div">
                <img src={product.image}></img>
            </div>
            <div className="details">
                <p>Name:{product.title}</p>
                <p>Cat:{product.category}</p>
                <p>Price:{product.price}</p>
                <p>Rating:{product.rating.rate}</p>
            </div>

        </div>
    )
}
export default Product