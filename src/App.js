import React from 'react'
import './App.css';
import { robots } from './robots.js'
import { CardList } from './CardList.js'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js'
import 'tachyons'
class App extends React.Component {
 
    constructor() {
        super()
        this.state
            = {
            'robots': [],
                'searchfield': ''
            }
        
    }
    componentDidMount() {
        console.log('hey')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ 'robots':data}));
    }


    SearchChange=(event)=> {
        //console.log(event.target.value)
        this.setState({ robots: robots,searchfield: event.target.value })
        console.log(this.state.searchfield)
        
       // console.log(filteredrobots)
    }


    render() {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0)
            return <h1>Loading</h1>
        else
        return (
            <div className="App">
                <h1>RoboFriends</h1>
                <SearchBox SearchChange={this.SearchChange} />
                <Scroll>
                    <CardList robots={filteredrobots} />
                </Scroll>
            </div>
        );
    }

}

export default App;
