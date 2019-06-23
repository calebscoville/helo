import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return(
            <div>Nav
            <Link to='/'>Logout</Link>
            <Link to='/dashboard'>Home</Link>
            <Link to='/post'>New Post</Link>
            </div>
        )
    }
}

export default Nav 