import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import { getWeeks } from './../../redux/actions'

class Week extends Component {

    buildCategoryListItem(lesson, i) {
        return <Link to={`/lessons/${lesson.id}/posts`} style={{textDecoration:'none'}} key={i} ><ListItem primaryText={lesson.title} /></Link>
    }

    createList(week, i){
        return (
            
        <List key={i}>
            <Subheader>{ week.title }</Subheader>
            {week.lessons.map( this.buildCategoryListItem )}
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
