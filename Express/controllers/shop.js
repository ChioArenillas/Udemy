const Product = require('../models/product')


exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/index', {
        prods: products, 
        pageTitle: 'Index', 
        path:'/', 
    })    
})
}
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
    res.render('shop/product-list', {
        prods: products, 
        pageTitle: 'All Products', 
        path:'/products', 
    })    
})
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart', 
        path:'/cart', 
    })    
}
exports.getCheckout = (req, res, next) => {
    res.render('shop/chekout', {
        pageTitle: 'Chekout', 
        path:'/chekout', 
    })    
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders', 
        path:'/orders', 
    })    
}



