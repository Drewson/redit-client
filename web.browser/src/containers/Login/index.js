import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



class Login extends Component {
  render() {
    return ( 
      <div style={{ backgroundColor: 'white', height: '40%', width: '50%', boxShadow: '0px 5px 5px lightgrey', marginLeft: '150px', marginTop: '150px' }}>
        <Toolbar>
          <ToolbarTitle text='Login' style={{color: 'black'}} />
        </Toolbar>
        <form style={{height: '250px', width:'100%', backgroundColor:'white'}} >
          <div style={{backgroundColor:'#FAFFBD', margin:'30px 10px', height:'60%'}}>
            <TextField
              floatingLabelText="Email"
              style={{width: '100%'}}
            />
            <TextField
              floatingLabelText="Password"
              style={{width: '100%'}}
            />
          </div>
          <RaisedButton label="Login" labelColor='white' backgroundColor="red" style={{margin:'12px'}} />
          <FlatButton label="Sign Up" />
        </form>
      </div>
     )
  }
};

export default Login;