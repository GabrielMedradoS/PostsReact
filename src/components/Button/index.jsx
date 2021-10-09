import { Component } from "react"
import './Button.css'

export class Button extends Component {
    render() {
        const {text, onClick, disabled } = this.props
        return(
            <div className="button-container">
                <button 
                onClick={onClick} 
                className="button"
                disabled={disabled}> {/* evento - atributo */}
                  {text}
                </button> 
            </div>
        )
    }
}