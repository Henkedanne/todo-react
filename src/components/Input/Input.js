import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            value: '',
            id: 0,
            isComplete: false
        }
    }

    componentDidMount() {
        this.inputRef.focus();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    handleSubmit(event) {
        if (this.state.value) {
        this.setState({ id: this.state.id + 1 })
        // Function som kommer från App. skickas som prop.
        this.props.pushToList(this.state);
        event.preventDefault();
        this.inputRef.value = this.state.value;
        this.inputRef.select();
        } 
        event.preventDefault();
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
