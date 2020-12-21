import React, { Component } from 'react'
import { Section} from '../Filter';

 class Filter extends Component {
   
    state= {
        active:false
    }

    ontoggle = () => {
  this.setState({active:!this.state.active})
    }

    render() {
        return (
            <Section>


<div className="grid" >

<div className="data" >

<div className="grid-1" onClick={   this.ontoggle} ><h3>No of Guest</h3> 

{(() => {
        if (this.state.active) {
          return (
            <i class="fas fa-caret-up"></i>
          )
        } else {
          return (
            <i class="fas fa-caret-down"></i>
          )
        } 
      })()}






</div>
<div className="grid-1" onClick={this.ontoggle} > <h3>Price per Plate</h3> {(() => {
        if (this.state.active) {
          return (
            <i class="fas fa-caret-up"></i>
          )
        } else {
          return (
            <i class="fas fa-caret-down"></i>
          )
        } 
      })()}</div>
<div className="grid-1" onClick={this.ontoggle} > <h3>Venue Type</h3> {(() => {
        if (this.state.active) {
          return (
            <i class="fas fa-caret-up"></i>
          )
        } else {
          return (
            <i class="fas fa-caret-down"></i>
          )
        } 
      })()}</div>
<div className="grid-1" onClick={this.ontoggle} > <h3>Space Preference </h3> {(() => {
        if (this.state.active) {
          return (
            <i class="fas fa-caret-up"></i>
          )
        } else {
          return (
            <i class="fas fa-caret-down"></i>
          )
        } 
      })()}</div>
<div className="grid-1" onClick={this.ontoggle}> <h3>Rating </h3> {(() => {
        if (this.state.active) {
          return (
            <i class="fas fa-caret-up"></i>
          )
        } else {
          return (
            <i class="fas fa-caret-down"></i>
          )
        } 
      })()}</div>

</div>
</div>

{(() => {
        if (this.state.active) {
          return (
            <div>
            <div className="flex" >
            <div  className="flex0">
                <div className="flex-1" >
                <label class="container">
  <input type="checkbox" />
  <span class="checkmark">{ "<"}100</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">100-250</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">250-500</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">500-1000</span>
</label>
                </div>
                <div className="flex-1" >
                <label class="container">
  <input type="checkbox" />
  <span class="checkmark">{ "<"}1000</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">1000-1500</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">1500-2000</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">2000</span>
</label>

                    </div>
                    <div className="flex-1" >
                    <label class="container">
  <input type="checkbox" />
  <span class="checkmark">Hotel</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Palace</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Marriage Garden</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Banquet Hall</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Lawns and Farmhouse</span>
</label>
                    </div>
                    <div className="flex-1" >
                    <label class="container">
  <input type="checkbox" />
  <span class="checkmark">Indoor</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Outdoor</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Indoor with outdoor</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Poolside</span>
</label>
                    </div>
                    <div className="flex-1" >
                    <label class="container">
  <input type="checkbox" />
  <span class="checkmark">All Ratings</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Rated {'<' }4</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Rated 4+</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Rated 4.5+</span>
</label>
                    </div>
           
                    
            </div> 
            
            </div>
             
                 
            <div className="btn" >
                <div className="button" >
                <button onClick={() =>   window.location.reload()} >Reset</button>
                <button className="view" >View Result</button>
                </div>
            </div>
            </div>
              
          )
        } else {
          return (
            null
          )
        }
      })()}


 
           </Section>
        )
    }
}


export default Filter;