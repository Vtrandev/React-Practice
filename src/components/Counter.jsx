import React, {useState} from 'react';
import Modal from './Modal';

function Counter() {

    const [numCount, setNumCount] = useState(0)

    return (
        <>
        <div className="counter">
        <button onClick={() => setNumCount(numCount-1)}>-</button>
        {numCount}
        <button onClick={() => setNumCount(numCount+1)}>+</button>
        </div>
        </>
    )




    // // ['+', '-', '+']
    // const [arr, setArr] = useState([])

    // function addPlus() {
    //     setArr(prevArr => [ ...prevArr, "+"])
    // }

    // function addMinus() {
    //     setArr(prevArr => [ ...prevArr, "-"])
    // }

    // return (
    //     <div>
    //     <button onClick={addMinus}>-</button>
    //     <button onClick={addPlus}>+</button>
    //     {arr.toString()}
    //     </div>
    // );

    // --------------------------------------------------

    // const [cart, setCart] = useState({
    //     item: " Apple",
    //     quantity: 0,
    // });

    // function addApple() {
    //     // 1. Use a callback to get the previous value
    //     // 2. Spread out all the properties of the prev state
    //     // 3. Only change the property that you need to change
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }

    // function minusApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }

    // return (
    //     <div>
    //     <button onClick={minusApple}>-</button>
    //     {cart.quantity}{cart.item}
    //     <button onClick={addApple}>+</button>
    //     </div>
    // );
    // --------------------------------------------------

    // const [counter, setCounter] = useState(0)
    // function countAdd(){
    //     setCounter((prevCounter) => prevCounter + 1)
    //     setCounter((prevCounter) => prevCounter + 1)
    // }

    // function countMinus() {
    //     setCounter((prevCounter) => prevCounter - 1)
    //     setCounter((prevCounter) => prevCounter - 1)
    // }

    // return (
    //     <div>
    //     <button onClick={countMinus}>-</button>
    //     {counter}
    //     <button onClick={countAdd}>+</button>
    //     </div>
    // );
}

export default Counter;