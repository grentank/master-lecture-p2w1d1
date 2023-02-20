import express from 'express';
import morgan from 'morgan';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';

const app = express();
const PORT = 3000;
const posts = [
  { message: 'Post #1' },
  { message: 'Post #2' },
  { message: 'Post #3' },
];

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const initState = { posts, title: 'PHASE2' };
  const layout = createElement(Layout, { initState });
  const html = renderToString(layout);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/newmessage', (req, res) => {
//   console.log(req.query);
  console.log('req.body:', req.body);
  posts.push(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
