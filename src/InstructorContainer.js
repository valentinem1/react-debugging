import React, { Component } from 'react';
import InstructorCard from './InstructorCard'

export default class InstructorContainer extends Component {
  render() {
    //   console.log(this.props.mod4instructors)
    return (
      <div>
          {this.props.mod4instructors.map((instructor) => <InstructorCard instructor = {instructor}/>)}
      </div>
    );
  }
}
