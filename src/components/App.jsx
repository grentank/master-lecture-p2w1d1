import React from 'react';
import List from './List';
import MyForm from './MyForm';

export default function App({ posts }) {
  return (
    <div className="container">
      <MyForm />
      <List posts={posts} />
    </div>
  );
}
