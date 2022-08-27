import React, {useContext} from 'react';
import { ThemeContext } from "./ThemeContext";

const BoxChild2 = () => {
    const {primary} = useContext(ThemeContext);
  return (
      <>
        <h3>3rd Headline</h3>
        <div
            style={{background: primary.main, color: primary.text}}
        >
            Theme Context
        </div>
      </>
  );
};

export default BoxChild2;
