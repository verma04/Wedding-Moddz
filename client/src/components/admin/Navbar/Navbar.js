import React, { Component } from 'react';
import { Nav } from './Style'


export default class Navbar extends Component {
    render() {
        return (
            <Nav>
              <div className="flex" >
              

                 <div className="flex-1" >
                <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606310657/asset_4x_akngst.png"} ></img> 
           
              </div>

              <div className="flex-2" >
                  <div className="right" >
              <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607148101/icons8-life-cycle-100_txrr9k.png"} ></img> 
             <span>Pankaj</span>
             </div>
              </div>
           
              </div>
            </Nav>
        )
    }
}
