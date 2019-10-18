import React from 'react';


const Context =  React.createContext('english');

//This is not recommended and it is for educational purposes only.
// We are trying to use context as redux
// context and redux share information into the children but context doesn't have a central point of communication
// and context doesn't split the state into business logical section. redux provides a mechanism to change data in store.
//So this class here is the 'central' point were we manage our state and we return a Provider to share the info with children
export class LanguageStore extends React.Component{
    state = {language:'english'};

    onLanguageChange = (language) =>{
        this.setState({language:language})
    }

    render() {
        return(
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export default Context;
