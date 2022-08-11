import React, { useState, createContext } from 'react'
import { getProducts, getProductById } from './ProductService'

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const { children } = props;
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    const onGetProducts = async () => {
        try {
            const result = await getProducts();
            setProduct(result);
        } catch (error) {
            console.log('onGetProducts error: ', error);
        }
    }
    const onGetProductById = async (id) => {
        try {
            const result = await getProductById(id);
            setProduct(result);
        } catch (error) {
            console.log('onGetProductById error: ', error);
        }
    }
    return (
        <ProductContext.Provider
            value={{
                onGetProducts, onGetProductById, product, products
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
