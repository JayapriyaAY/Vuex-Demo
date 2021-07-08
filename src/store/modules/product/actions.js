import Products from '../../../assets/products.json'
export const getProducts = ({ commit }) => {
    const products = Products
    commit('SET_PRODUCTS', products)
}

export const getProduct = ({ commit }, productId) => {
    commit('SET_PRODUCT', productId)
    for (var i = 0; i < Products.length - 1; i++) {
        if (productId == Products[i].id) {
            const product = Products[i]
            commit('SET_PRODUCT', product)
            console.log('product', product)
        }
    }
}