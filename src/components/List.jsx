import React from 'react';

export default function List({ posts }) {
  return (
    <ul className="list-group">
      {posts.map((el) => <li key={el.message} className="list-group-item">{el.message}</li>)}
    </ul>
  );
}
