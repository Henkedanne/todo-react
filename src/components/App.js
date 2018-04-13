import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header.js';
import Input from './Input/Input.js';
import ItemList from './Itemlist/Itemlist';


class App extends Component {
    constructor(props) {
        super(props)
        
        this.pushToList = this.pushToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        const localList = localStorage.getItem('list');

        if(!localStorage.list) {
            this.setState({list: []})
        } else {
            this.setState({list: JSON.parse(localList)})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('list', JSON.stringify(this.state.list));
    }

    pushToList(inputState) {
        let newItem = {
            value: inputState.value,
            id: inputState.id,
            isComplete: inputState.isComplete
        };

        this.setState(prevState => ({
            list: prevState.list.concat(newItem)
        }));
    }

    removeFromList(id) {
        const list = this.state.list;
        const newList = list.filter(list => list.id !== id);

        this.setState({list: newList})

        localStorage.removeItem(list);
    }
    
    render() {
        let list = this.state.list;

        return (
            <div className="main-container">
                <Header />
                <Input pushToList={this.pushToList} />
                <ItemList 
                    list={list}
                    removeFromList={this.removeFromList} />
            </div>
        );
    }
}

export default App;
