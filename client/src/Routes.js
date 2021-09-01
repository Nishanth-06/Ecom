import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import PrivateRoute from './auth/helper/PrivateRoutes'
import AdminRoute from './auth/helper/AdminRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import Profile from './user/Profile'
import AddCategory from './admin/AddCategory'
import ManageCategories from './admin/ManageCategories'
import AddProduct from './admin/AddProduct'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import UpdateCategory from './admin/UpdateCategory'
import Cart from './core/Cart'



 const Routes=()=>{
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route  exact path="/signin" component={Signin} />
        <Route  exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashBoard}/>
        <AdminRoute exact path="/admin/dashboard" component={AdminDashBoard}/>
        <AdminRoute exact path="/admin/create/category" component={AddCategory}/>
        <AdminRoute exact path="/admin/categories" component={ManageCategories}/>
        <AdminRoute exact path="/admin/create/product" component={AddProduct}/>
        <AdminRoute exact path="/admin/products" component={ManageProducts}/>
        <AdminRoute exact path="/admin/product/update/:productId" component={UpdateProduct}/>
        <AdminRoute exact path="/admin/category/update/:categoryId" component={UpdateCategory}/>
      </Switch>
    </Router>
  );
}

export default Routes;