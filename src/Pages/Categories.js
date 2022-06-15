import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res => res.json())
            .then((data) => {
                setCategories(data);
                console.log(data);
            })
    }, [])

    return (
        <div>
            <div className='contCat'>
                {categories.map((cat) => {
                    return (
                        <Link to={"/products/" + cat}><div className='cat'>{cat}</div></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories