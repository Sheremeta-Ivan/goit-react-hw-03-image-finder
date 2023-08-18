import React from 'react';
import propTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;
