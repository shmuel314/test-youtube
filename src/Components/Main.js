import React from 'react'
import { Route,Routes } from 'react-router'
import { useParams } from 'react-router'
import Categories from '../Pages/Categories'
import Item from '../Pages/Item'
import Products from '../Pages/Products'

function Main() {
    // const params = useParams()
    return (
        <div>
           <Routes>
               <Route path='/home' element={ <Categories/>}/>
               <Route path='/*' element={ <Categories/>}/>
               <Route path='/products/:cat' element={ <Products/>}/>
               <Route path='/item/:id' element={ <Item />}/>
           </Routes>
           
          

        </div>
    )
}

export default Main