import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'

const Routes = () => {
  return (
    <div className='p-4'>
        <Switch>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
        </Switch>
    </div>
  )
}

export default Routes