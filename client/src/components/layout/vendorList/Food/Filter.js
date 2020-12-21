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


<div className="grid-1" onClick={this.ontoggle} > <h3>Food Type</h3> {(() => {
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
<div className="grid-1" onClick={this.ontoggle} > <h3>Type Of Caterer</h3> {(() => {
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
<div className="grid-1" onClick={this.ontoggle} > <h3>Plate Price</h3> {(() => {
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
<div className="grid-1" onClick={this.ontoggle}> <h3>Capacity  </h3> {(() => {
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
  <span class="checkmark">Vegetarian only</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Non-Vegetarian only</span>
</label>

                    </div>
                    <div className="flex-1" >
                    <label class="container">
  <input type="checkbox" />
  <span class="checkmark">Food Counters</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Full Service Catering</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Chaat & Fruit Stalls</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark"> Small Function Cateringg</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Dessert</span>
</label>
<label class="container">
  <input type="checkbox"/>
  <span class="checkmark">Paan</span>
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