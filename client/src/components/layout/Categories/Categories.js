import React, { Component } from 'react'
import { Section} from './Style';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';
import TopBar from '../Topbar/topbar';
import { getCatgory } from "../../../actions/UserActions";
import   { connect} from 'react-redux';



 class Categories extends Component {

    componentDidMount() {
        this.props.getCatgory();
    }
    render() {
        const { category }  = this.props.user

        if( category === null) {
            return (
              null
            )
          }
        return (
            <React.Fragment>
                <TopBar/>
                 <Navbar/>
            <Section>
              <div className="flex" >

          <div className="head" >
              <div></div>
              <h2>Categories</h2>
              <button>View All</button>
          </div>

          <div className="para" >
<p>Bulid your dream wedding team from the verfied list of best wedding photographers , wedidng venues , bridal mkaeup artists , wedding decor and more , We Allways choose aour vendors who from the best !!</p>

          </div>

          <div className="category" >

       
          {category.map((number) => 
 <div className="img" >
 <img src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1606975569/wedding%20Moodz/image-1_nqd0ju.jpg' ></img>
          <h2>{number.category}</h2>  
</div>
        
          )}
  </div>










              </div>
             
            </Section>

<Footer/>
</React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
 
     user:state.user
  });
  
  export default connect(
    mapStateToProps,
    { getCatgory }
  )(Categories );
  
