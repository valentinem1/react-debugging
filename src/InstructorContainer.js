import React, { Component } from 'react';
import InstructorCard from './InstructorCard'

export default class InstructorContainer extends Component {
  render() {
    return (
        <div className="ui container">
            {mod4instructors.map((instructor) => <InstructorCard instructor = {instructor}/>)}
        </div>
    );
  }
}
