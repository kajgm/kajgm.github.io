import React from 'react';

const List = ({ content }) => {
  return (
    <ul>
      {content.map((description, index) => {
        index++;
        return <li key={index}>{description}</li>;
      })}
    </ul>
  );
};

export default List;
