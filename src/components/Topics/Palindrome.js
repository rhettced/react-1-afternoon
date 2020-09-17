import React, {Component} from 'react';

class Palindrome extends Component{
constructor(){
    super();

    this.state = {
        userInput: '',
        palindrome: []
    };  
}

handleChange(val) {
    //console.log('hit');
    this.setState( {userInput: val} );
}

isPalindrome(userInput){
    let forward = userInput;
    let backward = userInput;

   // forward = forward.split('');
    backward = backward.split('');
    backward = backward.reverse();
    backward = backward.join('');

    console.log(forward, backward);
    if(forward === backward){
        this.setState({palindrome: 'true'});
    } else {
        this.setState({palindrome: 'false'});
    }
 
}

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={() => this.isPalindrome(this.state.userInput) }>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }

}

export default Palindrome;