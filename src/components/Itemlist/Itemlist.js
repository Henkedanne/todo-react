import React from 'react';
import Item from './Itemlist';

const ItemList = (props) => {
   
    const list = props.list;

    let todoItems = list.map(item => { 
        return (
        <div className="list-item__container">    
            <li key={item.id}>{item.value}</li>
            <button onClick={() => props.removeFromList(item.id)}>remove</button>
        </div>
        );
    });

    return (
        <div>
            <ul>{todoItems}</ul>
           
        </div>

    );
}

export default ItemList;
