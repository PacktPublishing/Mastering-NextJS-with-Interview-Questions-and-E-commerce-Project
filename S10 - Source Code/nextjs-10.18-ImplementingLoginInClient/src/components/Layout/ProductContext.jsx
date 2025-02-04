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

    const increaseQuantity = (productId)=>{
        setCartItems((prevProducts)=>prevProducts.map((product)=>(
            product.id === productId ? {
                ...product, quantity: product.quantity + 1
            } : product
        )))
    }
    const decreaseQuantity = (productId)=>{
        setCartItems((prevProducts)=>prevProducts.map((product)=>(
            product.id === productId ? {
                ...product, quantity: product.quantity - 1
            } : product
        )))
    }

    const totalAmount = cartItems.reduce((total, item)=>{
        return total + item.quantity * item.sellPrice;
    }, 0);

    return <ProductContext.Provider 
        value={{
            cartItems, 
            addProductToCart, 
            removeProductFromCart, 
            setCartItems,
            increaseQuantity,
            decreaseQuantity,
            totalAmount,
        }}
    >
        {children}
    </ProductContext.Provider>
};

export const useProductContext = ()=>{
    return useContext(ProductContext);
};