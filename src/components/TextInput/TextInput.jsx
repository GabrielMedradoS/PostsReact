import "./TextInput.css"

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input 
        onChange={ handleChange } 
        type="search"
        value={searchValue} 
        className="textInput"
        placeholder="Type your search"/>
    );
}