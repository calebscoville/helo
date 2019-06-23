import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from './../redux/reducer'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStylesAuth';

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLoginInfoUpdate = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        axios
            .post('/auth/login', { username, password})
            .then((res) => {
                this.props.updateUser(res.data)
                this.props.history.push('/patrondash')
            })
        e.target.username.value = ''
        e.target.password.value = ''
    }
    render() {
        return (
            
            <>
                <FormContainer style={{ width: '115px', height: '150px', margin: 20, padding: '10px' }}>
                <form onSubmit={this.handleUserLogin}>
                    <ul>
                    <li><input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.username}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        
                        
                    <li><input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        <li><button>Log In</button></li>
                        </ul>
                </form>
                </FormContainer>
               
            </>
            
        )
    }
}

export default withRouter(connect(null, {updateUser} ) (LoginForm))
