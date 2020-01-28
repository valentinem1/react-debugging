import React, { Component } from 'react';

export default class InstructorCard extends Component {
  render() {
    //   Destructuring Props
    const {image_url, name, hired, position} = this.props.instructor
    return (
        <div className="ui card">
            <div className="image">
                {/* the instructor image goes inside of the src */}
                <img src={image_url} alt={name}/>
            </div>
            <div className="content">
                <a href={image_url} className="header">{name}</a>
                <div className="meta">
                    <span className="date">Hired in {hired}</span>
                </div>
                <div className="description">
                    Position: {position}
                </div>
            </div>
        </div>
    );
  }
}
