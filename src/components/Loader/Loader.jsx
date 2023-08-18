import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';
const Loader = () => {
  return (
    <LodeWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0054c9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LodeWrapper>
  );
};

export default Loader;
