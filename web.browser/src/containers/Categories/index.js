import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import IconButton from 'material-ui/IconButton';
import Week from './../../components/Week';


class Categories extends Component {

  render() {
    return ( 
      <Drawer>
        <AppBar 
          title='RED it' 
          iconElementLeft={<IconButton><SiteIcon/></IconButton>} 
        />
        <Week />
        
      </Drawer>
    )
  }
};

export default Categories;