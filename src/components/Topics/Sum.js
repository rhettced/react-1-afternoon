import React, {Component} from 'react';

export default class Sum extends Component{
    constructor(){
        super();
        this.state ={
            num1: 0,
            num2: 0,
            sum: null
        };

    }

    handleChange1(val){
        console.log(val);
        this.setState( {num1: parseInt(val,10)} );
    }
    handleChange2(val){
        this.setState( {num2: parseInt(val,10)} );
    }

    sumFunction(num1,num2){
        let number1 = num1;
        let number2 = num2;

        let sum2 = number1 + number2;

        this.setState( {sum: sum2});
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Not sure what goes here</h4>
                <input className='inputLine' type='number' onChange={ (e) => this.handleChange1(e.target.value)}/>
                <input className='inputLine' type='number'onChange={ (e) => this.handleChange2(e.target.value)}/>
                
                <button className='confirmationButton' onClick={ () => this.sumFunction(this.state.num1, this.state.num2) }>Add</button>
        <span className='resultBox'>Sum: {this.state.sum} </span>
            </div>
        )
    }

}