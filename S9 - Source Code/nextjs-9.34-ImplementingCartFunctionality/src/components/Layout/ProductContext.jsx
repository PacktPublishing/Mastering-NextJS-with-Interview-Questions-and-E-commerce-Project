"use client";

const { createContext, useContext, useState } = require("react");

const ProductContext = createContext();

export const ProductProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addProductToCart = (newProduct)=>{
        setCartItems((prevProducts)=>[...prevProducts, newProduct]);
        console.log(cartItems);
    }
    const removeProductFromCart = (productId)=>{
        setCartItems((prevProducts)=>prevProducts.filter( (product) => product.id!==productId));
        console.log(cartItems);
    }

    return <ProductContext.Provider value={{cartItems, addProductToCart, removeProductFromCart, setCartItems}}>
        {children}
    </ProductContext.Provider>
};

export const useProductContext = ()=>{
    return useContext(ProductContext);
};