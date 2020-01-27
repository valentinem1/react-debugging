import React, { Component } from 'react';

export default class InstructorCard extends Component {
  render() {
    return (
        <div class="ui card">
            <div class="image">
                <img src={this.props.instructor.image_url}/>
            </div>
            <div class="content">
                <a class="header">{this.props.instructor.name}</a>
                <div class="meta">
                    <span class="date">Hired in {this.props.instructor.hired}</span>
                </div>
                <div class="description">
                    Position: {this.props.instructor.position}
                </div>
            </div>
        </div>
    );
  }
}
