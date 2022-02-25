import React from 'react';
import './App.css';


export interface MyState {
    name: string;
    class: string;
    isAvailable: boolean;
    Counter: number;
}

export class Component extends React.Component <any, MyState>  {
    constructor(props: any) {
        super(props);

        this.state = {
            nama: 'Quinn Santoso',
            kelas: 'XI IPS 3',
            isAvailable: true,
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
        if (this.state.numButton % 3) {
        return (
            <div>
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
 
                       <h1>{this.state.numButton}</h1>
               
                       <button type="button" onClick={this.handleClick}>
                       click me
                       </button>
                       <img src="https://i.pinimg.com/736x/95/53/ca/9553ca5c8f1795c5f3909a9c257c9711.jpg"></img>
                  </div>
            )
        }
    }
}
export default Component;