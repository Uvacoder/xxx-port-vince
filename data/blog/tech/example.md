---
title: 'Example'
date: '2021-12-23'
images: ['/static/blog/docker.png']
tags: ['#express', '#js', '#docker', '#git']
draft: false
author: 'Vince'
summary: 'Lorem ipsum sin dolor amet'
---

Lorem ispum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam. Lorem ipsum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam. Lorem ipsum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam. 

Lorem ispum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam. Lorem ipsum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam. Lorem ipsum sin dolor amet consectetur adipisicing elit. Quisquam, quidem, quisquam.

Lorem ispum sin dolor amet consectetur adipisicing elit.

```
npm install express
```

Lorem ispum index.js :

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port)
```

Lorem ispum sin dolor amet consectetur adipisicing elit:

```dockerfile
FROM node:14-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]
```

Lorem ispum sin dolor amet:

```dockerfile
FROM node:14-slim | pilih versi nodejs yang akan dipakai.
WORKDIR /app | workdir berfungsi untuk menentukan working direkroi kita.
COPY package.json /app | ini akan mencopy package.json kedalam workdir app.
RUN npm install | setelah itu akan menjalankan npm install untuk menginstall package.
COPY . /app | ini berfungsi untuk mencopy semua file kedalam workdir.
CMD ["npm","start"] | lalu akan menjalankan cmd ini.
```

Lorem ispum sin dolor amet consectetur adipisicing elit.

```bash
docker run -d -p 9000:3000 nama-project
```

Lorem:

![result](https://user-images.githubusercontent.com/25787603/147196586-e742c7e5-dcba-4516-b9b7-937378410b9c.png)

Lorem: [ispum ?](https://aws.amazon.com/id/docker/)
