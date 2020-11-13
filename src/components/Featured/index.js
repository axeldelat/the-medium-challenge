import React, { Component } from 'react'

// CSS //
import './Featured.css'

class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFeaturedState: false,
    }
  }

  render() {
    const { props: {isFeatured}, state: {isFeaturedState} } = this

    return <div>
      { isFeatured ? <p>Featured</p> : <p>Not Featured</p> }
      { isFeaturedState ? <p>Featured Active</p> : <p>Featured Inactive</p>}
    </div>
    // --------> En esta condición, me va a mostrar Inactivo porque no estamos pasando
    // --------> ningún valor al App.js en la línea <ConditionalRendering />
  }
}

export default Featured