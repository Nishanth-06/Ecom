import React from 'react'
import Menu from './menu';


 const Base = ({
     title = "My Title",
     description = "My description",
     className = "bg-#333b44 text-white p-4",
     children
 })=>(
     <div>
        <Menu />
         <div className="container-fluid">
            <div className="jumbotron bg-#333b44 text-white text-center" >
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
         </div>
         <footer className=" bg-#333b44 mt-auto py-2" >
            {/* <div className="container-fluid bg-success text-white text-center py-3" >
                <h4>For any Queries, feel free to reach out!</h4>
                <button className="btn btn-warning btn-lg" >Contact Us</button>
            </div> */}
            <div className="container-fluid copyright" >
                <span className="text-muted" >Copyright 2021</span>
            </div>
         </footer>
     </div>
 )

export default Base;