import { useEffect, useState } from 'react';
import {Section} from './Style'

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

import { connect } from "react-redux";

import { deleteCity }  from '../../../../actions/adminActions'
import { useHistory } from 'react-router-dom'
function Pop({ toggle , data , deleteCity  }) {
    const history = useHistory()

    return (
        <Section>
          
            <div id="myModal" class="modal">


<div class="modal-content">

  

<div className='head' >
<p>Do You want Delete City ?</p>
</div>
<div className='btn' >
    <button onClick={() => deleteCity(data._id , history) }  >Delete</button>
    <button onClick={toggle} >Cancel</button>
</div>


</div>

</div>
        </Section>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { deleteCity  }
  )(Pop);


