


export const checkProduct = ({ product_id, cart_ids=[], wishlist_ids=[], in_stock = null})=>{
    let inCart = (cart_ids.findIndex( id => id == product_id ) !== -1) ;
    let inWishlist = (wishlist_ids.findIndex( id => id == product_id ) !== -1 );
    let inStock = in_stock ? in_stock.active : false;
    return { inCart, inWishlist, inStock };
}

