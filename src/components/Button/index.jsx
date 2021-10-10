import P from 'prop-types';
import React from 'react';
import './Button.css'


      export const Button = ({text, onClick, disabled = false }) => (
            <div className="button-container">
                <button
                className="button"
                onClick={onClick}
                disabled={disabled}> {/* evento - atributo */}
                  {text}
                </button>
            </div>
        );

        Button.defaultProps = {
          disabled:false,
        };

        Button.propTypes = {
          text: P.string.isRequired,
          onClick: P.func.isRequired,
          disabled: P.bool,
        };
