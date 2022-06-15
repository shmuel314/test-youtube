import React, { useContext } from 'react'
import CartItem from './Context';

function AddToCart(props) {
    const { arrCart, setArrCart } = useContext(CartItem)//זה מערך בליאוט שצריך לעדכן אותו ואז הוא מעדכן את העגלה
    // const items = props.items;
    const currentItem = props.item;
    // let y ={};
    let checkExsist = "";
    let addItem = {}

    function Add() {
        // checkExsist = arrCart.find(obj => obj.id === currentItem.id)
        console.log(checkExsist);
        if (!checkExsist) {
            addItem = { id: currentItem.id, amount: 1,price:currentItem.price,title:currentItem.title,image:currentItem.image}
            console.log(addItem);
            setArrCart([...arrCart, addItem])
        }
    }

    function Plus() {
        // debugger
        checkExsist.amount += 1
        setArrCart([...arrCart])
    }

    function Minus() {
        if (checkExsist.amount > 0) {
            checkExsist.amount -= 1
            setArrCart([...arrCart])
        }
        if (checkExsist.amount === 0) {
            console.log(checkExsist.id);
            setArrCart(arrCart.filter(item => item.id !== checkExsist.id));
        }

    }

    checkExsist = arrCart.find(obj => obj.id === currentItem.id)
    if (!checkExsist)
        return (
            <div>
                <button onClick={Add}>Add To Cart</button>
            </div>
        )
    else {
        return (
            <div>

                <button onClick={Plus}>+</button>{checkExsist.amount}<button onClick={Minus}>-</button>
            </div>
        )
    }

}

export default AddToCart