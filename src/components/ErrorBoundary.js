import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch (error) {
        this.setState({ hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <h2>Ooops.. Error occurred!</h2>
        }
        return this.props.children 
    }
}

export default ErrorBoundary