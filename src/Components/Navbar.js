import React from 'react'

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand ">Hello {props.userName}</span>
        </div>
    </nav>
  )
}

export default Navbar