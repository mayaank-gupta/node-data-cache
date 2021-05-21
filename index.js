const express = require('express');
const fetch = require("node-fetch");
const redis = require('redis');

const app = express();

const client = redis.createClient(6379);

client.on('error', (err) => {
  console.log("Error " + err)
});

app.get('/getData', (req, res) => {

  const redisDataKey = 'title:string';

  return client.get(redisDataKey, (err, userData) => {

    if (userData) {

      return res.json({ source: 'Redis-Cache', data: JSON.parse(userData) })

    } else {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          let titleString = [];
          if (data && data.length) {
            titleString = data.map(el => el.title);
          }

          client.setex(redisDataKey, 3600, JSON.stringify(titleString));

          return res.json({ source: 'Fetched from API', data: titleString });

        })
        .catch(error => {
          console.log(error)
          return res.json(error.toString())
        })
    }
  });
});

// start express server at 3000 port
app.listen(3000, () => {
  console.log('Server Started =>', 3000)
});