# Data Caching (Redis + NodeJS)

> Caching is storing server responses
> or some global object which will be used accross
> application so that we don't have to always
> get data from database. As its a expensive job
> After recieving request, first checks if data is 
> available in cache. This way, every response is either 
> cached, or retrieved from the cache, and as 
> a result, the load to our server and database is reduced. 

## Features
- Decreased network costs
- Improved responsiveness
- Availability of content during network interruptions
- Increased performance on the same hardware

## Tech

This project uses a number of open source projects to work properly:

- [ExpressJS](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.js
- [redis](https://www.npmjs.com/package/redis) - A high performance Node.js Redis client.

## Installation
Clone this project.
Install the dependencies and start the server.

```sh
cd node-data-cache
npm install
node index.js
```

Happy Coding!
