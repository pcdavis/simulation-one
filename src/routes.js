import React from 'react';
import {  Route,  Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import ShelfList from './components/ShelfList/ShelfList'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import ClassList from './components/ClassList/ClassList'
// import Student from './components/Student/Student'


export default(

    <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/shelf/:letter' component={ShelfList} />
        <Route  path='/bin/:number' component={Bin} />
        
        
        
    </Switch>
    
    )