import React from 'react';
import "../container/App.css"
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid #1976d2', height: '800px'}} className="">
      {props.children}
    </div>
  );
};

export default Scroll;