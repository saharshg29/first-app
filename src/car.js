import React, { Component } from "react";

export class Car extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "Mercedes",
            lastname: "Benz",
            clickSingle: 0,
            clickDouble: 0
        }
    }

    changeNamae() {
        this.setState({
            firstname: "Range",
            lastname: "Rover",
            clickSingle: this.state.clickSingle + 1
        })
    }

    changeName() {
        this.setState({
            firstname: "Rolls",
            lastname: "Royce",
            clickDouble: this.state.clickDouble + 1
        })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <>
                <div>
                    <h2>Car Page {this.props.name} {this.props.dataValue} </h2>
                    {/* <h4>{this.props.children}</h4> */}
                </div>
                <p>
                    {this.state.firstname} -
                    {this.state.lastname}
                </p>
                <p>first    {this.state.clickSingle} </p>
                <p>second   {this.state.clickDouble}
                </p>
                <button onClick={() => this.changeNamae()} onDoubleClick={() => this.changeName()}>Single Click</button>
                <button onClick={() => this.changeName()}>Double Click</button>
            </>
        )
    }
}