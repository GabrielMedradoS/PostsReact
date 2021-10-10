import P from 'prop-types';
import React  from 'react';
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

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}
