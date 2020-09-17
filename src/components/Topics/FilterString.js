import React, {Component} from 'react';

class FilterString extends Component{

constructor(){
    super();
    this.state ={
        names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
        userInput: '',
        filteredNames: []
    };
}

handleChange(val){
    //console.log(val);
    this.setState( {userInput: val} );
}

filterNames(userInput){
    let string = this.state.names;
    let filteredNames = [];
    for (let i = 0; i<string.length; i++){
        if (string[i].includes(userInput)){
            filteredNames.push(string[i]);
        }
    }
    this.setState({ filteredNames: filteredNames});
}

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames,null,10) }</span>
            </div>
        )
    }

}

export default FilterString;