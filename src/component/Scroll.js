import React from 'react';
import "../container/App.css"
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}} className="">
      {props.children}
    </div>
  );
};

export default Scroll;