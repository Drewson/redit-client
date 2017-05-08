import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Gandalf from 'gandalf-validator';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { userLogin } from '../../redux/actions';

class Form extends Gandalf {
  constructor(){
    const fields = [
      {
        name: "email",
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
        debounce: 300,
      },
      {
        name: "password",
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          type: 'password'
        },
        debounce: 300
      }
    ]

    super(fields)
  }

  handleSubmit(){
    const data = this.getCleanFormData();

    if(!data) return;
    this.props.dispatch(userLogin(JSON.stringify(data)));
  }

  render() {
    const fields = this.state.fields;

    return ( 
      <div style={{ backgroundColor: 'white', height: '40%', width: '50%', boxShadow: '0px 5px 5px lightgrey', marginLeft: '150px', marginTop: '150px' }}>
        <Toolbar>
          <ToolbarTitle text='Login' style={{color: 'black'}} />
        </Toolbar>
        <form style={{height: '250px', width:'100%', backgroundColor:'white'}} >
          <div style={{backgroundColor:'#FAFFBD', margin:'30px 10px', height:'60%'}}>
            { fields.email.element } <br />
            { fields.password.element } <br />
          </div>
          <Link to="/api/weeks">
            <RaisedButton label="Login" labelColor='white' backgroundColor="red" style={{margin:'12px'}} onTouchTap={() => this.handleSubmit()} />
          </Link>
          <FlatButton label="Sign Up" />
        </form>
      </div>
     )
  }
};

function mapStateToProps(state){
  return {
    weeks: state.weeks
  }
}

export default connect(mapStateToProps)(Form);