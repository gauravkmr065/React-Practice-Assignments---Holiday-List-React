
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    ]
  }

  render() {
    const arr = this.cityList.filter(ele=> ele.country==='India');
    let i=1;
    return (
      <div id="main">
        <ol key={`location${i++}`}>
         {arr.map(ele =><li key={`location${i++}`}>{ele.name}</li>)}
        </ol>
      </div>
    )
  }
}


export default App;
