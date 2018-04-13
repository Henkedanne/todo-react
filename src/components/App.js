import React, { Component, Fragment } from 'react';
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

    pushToList(item, id) {
        let newItem = {item: item, id: id};

        this.setState(prevState => ({
            list: prevState.list.concat(newItem)
        }));
    }

    removeFromList(id) {
        const list = this.state.list;
        const newList = list.filter(list => list.id !== id);

        this.setState({list: newList})
    }
    
    render() {
        let list = this.state.list;

        return (
            
            <Fragment>
                <Header />
                <Input pushToList={this.pushToList}/>
                <ItemList 
                    list={list}
                    removeFromList={this.removeFromList}
                    />
            </Fragment>
        );
    }
}

export default App;
