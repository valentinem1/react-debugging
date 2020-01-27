import React from 'react';
import './App.css';
import InstructorContainer from './InstructorContainer'
import Header from './Header'

const mod4instructors = [
  {
    name: "Eric Kim",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U91CXSUN4-455dd3bdbbbf-512"
  },
  {
    name: "Sylwia Vargas",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-UH9S72R6C-df7459bf1595-512"
  },
  {
    name: "Rei Reynoso",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-UHBJ9SLFR-fdd5c76c5e0a-512"
  }
]

class App extends React.Component {
  render(){
    return <div>
      <Header/>
      <InstructorContainer mod4instructors = {mod4instructors}/> 
    </div>
  }
}

export default App;
