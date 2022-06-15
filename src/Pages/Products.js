import { useEffect, useState } from "react"
import React from 'react'
import { useParams} from "react-router-dom"
import './Products.css'
import LinkItem from "../Components/LinkItem"

function Products(props) {
    const { cat } = useParams()
    const [items, setItems] = useState([])
    // const[arrFromFatch,serArrFromFatch]=useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/" + cat)
            .then(res => res.json())
            .then((data) => {
                setItems(data);
                console.log(data);
            })
    }, [])

    if (!items) return <h3>Loading...</h3>

    return (
        <div>
            <div className="contProd">
                {items.map(item => {
                    // {item.amount=0}
                    return (
                        <div className="product">
                            {/* <Fatch.Provider value={{items}}> */}
                            <LinkItem item={item} items={items} where={"/item/" + item.id} ></LinkItem>
                            {/* </Fatch.Provider> */}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Products

