const fetch = require('node-fetch');

const URL = 'http://localhost:7890/users';

export const postUser = (username) => {
  return fetch (`${URL}`, {
    method: 'POST',
    body: JSON.stringify({ name: username, money: 100 }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json());
};

export const getUser = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};

