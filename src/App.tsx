import React from 'react';
import './App.css';


export interface MyState {
    name: string;
    class: string;
    isAvailable: string;
    counter: number;
}

export class Component extends React.Component <any, MyState>  {
    constructor(props: any) {
        super(props);

        this.state = {
            name: 'Quinn Santoso',
            class: 'XI IPS 3',
            isAvailable: 'true',
            counter: 1,
        };
    }

    handleClick = () => {
        console.log("button clicked...");
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        if (this.state.counter % 3) {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Nama : {this.state.name}</h1> 
                <p>Kelas : {this.state.class}</p>
                <p>Pagi : {this.state.isAvailable}</p>
       
                <h1>{this.state.counter}</h1>

                <button type="button" onClick={this.handleClick}>
                click me
                </button>
            </div>
        )
    } else {
            return (
                  <div>
                       <h1>Nama : {this.state.name}</h1>
                       <p>Kelas : {this.state.class}</p>
                       <p>Pagi : {this.state.isAvailable}</p>
 
                       <h1>{this.state.counter}</h1>
               
                       <button type="button" onClick={this.handleClick}>
                       click me
                       </button>
                       <img src="https://i.pinimg.com/564x/8b/09/f5/8b09f5ca872dacbd3c1f5faea7f330d0.jpg"></img>
                  </div>
            )
        }
    }
}
export default Component;