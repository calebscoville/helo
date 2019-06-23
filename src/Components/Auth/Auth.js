import React, {Component}  from 'react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

class Auth extends Component {
    componentDidMount() {
        axios.get('/auth/user').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/details')
        })
        this.props.id && this.props.history.push('/details')
    }

    render() {
        return(
            <div>Auth
            <LoginForm />
            <RegisterForm />
            </div>
        )
    }
}

export default Auth