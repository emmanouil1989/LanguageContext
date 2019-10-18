import React from 'react'
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component{
    render() {

        return(
            //Consumer is better that this.context because we can consume multiple values.
            //TODO refactor button to helper method
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>


                        <LanguageContext.Consumer>
                            {({language})=> (
                                language === 'english' ? 'Submit' : 'Voorleggen'
                            )}}
                        </LanguageContext.Consumer>
                    </button>


                )}
            </ColorContext.Consumer>
        )
    }
}

export default Button;
