import React from 'react'
// import ReactDOM from 'react-dom';

class Keypad extends React.Component {

    keyUpHandler = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.keyUpHandler} ></input>
            </div>
        )
    }
} //class end

export default Keypad;