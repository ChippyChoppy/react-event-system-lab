import React from 'react'

class EyesOnMe extends React.Component {

    focusHandler = () => {
        console.log("Good!")
    }

    blurHandler = () =>{
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
        <div>
            <button onFocus={this.focusHandler} onBlur= {this.blurHandler} placeholder="Button"/>
        </div>
        )
    }
} //class end

export default EyesOnMe