import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount () {
        this.props.onRequestRobots();
    }

    render () {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending) {
            return <h1>loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchchange={ onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={ filteredrobots } />
                    </ErrorBoundary>
                </Scroll>   
                </div>
            );
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);