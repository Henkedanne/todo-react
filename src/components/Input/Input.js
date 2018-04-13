import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            itemValue: '',
            id: 0
        }
        
    };
    componentDidMount() {
        this.inputRef.focus();
    }

    handleChange(event) {
        this.setState({
            itemValue: event.target.value
        });
    }
    
    handleSubmit(event) {
        this.setState({ id: this.state.id + 1 })
        // Function som kommer från App. skickas som prop.
        this.props.pushToList(this.state.itemValue, this.state.id);
        event.preventDefault();
        this.inputRef.value = '';
        this.inputRef.focus();
    }

    render() {
       
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref={(ref) => this.inputRef = ref} type="text" onChange={this.handleChange.bind(this)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default Input;
