import React from 'react';
import Cards from './Card';
import "../container/App.css"
const CardList = ({ posts }) => {
  return (
    <div className="grid center">
      {
        posts.map((user, i) => {
          return (
            <Cards
              key={i}
              id={posts[i].id}
              title={posts[i].title}
              body={posts[i].body}
              />
           
          );
        })
      }
    </div>
  );
}

export default CardList;