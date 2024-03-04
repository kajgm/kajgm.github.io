import React from 'react';

export function List(content: any) {
  return (
    <ul>
      {content.map((description: string, index: number) => {
        index++;
        return <li key={index}>{description}</li>;
      })}
    </ul>
  );
}
