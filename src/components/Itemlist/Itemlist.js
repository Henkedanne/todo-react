import React from 'react';

const ItemList = (props) => {
   
    const list = props.list;

    let todoItems = list.map(item => { 
        return (
        <div className="list-item__container">    
            <li key={item.id}>{item.item}</li>
            <button onClick={() => props.removeFromList(item.id)}>remove</button>
        </div>
        );
    });

    return (
        <ul>{todoItems}</ul>
    );
}

export default ItemList;
