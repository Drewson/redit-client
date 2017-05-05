import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import {getWeeks, getPosts } from './../../redux/actions'

class Week extends Component {

    buildCategoryListItem(lesson, i){
        return <ListItem primaryText={lesson.title} key={i} onClick={()=> this.props.dispatch(getPosts(lesson.id))}/>
    }

    createList(week, i){
        return (
            
        <List key={i}>
            <Subheader>{ week.title }</Subheader>
            {week.lessons.map( this.buildCategoryListItem.bind(this) )}
            <Divider />    
        </List>
        )
    }

    componentDidMount() {
        this.props.dispatch(getWeeks());
    }

    render(){
        return(
            <div>
            { this.props.weeks.map( (week, i) => this.createList(week, i) )}
            </div>
        )
        
    }
    
}

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  };
}


export default connect(mapStateToProps)(Week);
