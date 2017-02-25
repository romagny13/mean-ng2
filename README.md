# MEAN (Angular 2) demo

- MEAN : MongoDb, Express, Angular 2, Node project
- Reactive forms
- http

## Usage
```
npm i
```
Create a free db on <a href="https://mlab.com/home">mLab</a> with a collection 'posts'. Add a user and change mongodb connection in 'routes/api'

build
```
npm run build
```

go http://localhost:3000

Or dev (hot reloading)
```
node server.js
ng serve
```
go http://localhost:4200

## How to

- Create Angular project 
```
ng new <project-name>
```

- Add Node dependencies

```
npm i express mongojs body-parser ejs -S
```

- <a href="https://github.com/mafintosh/mongojs">Mongojs</a>

- Create server, render index page and create api routes


- Add NPM Script
```
"scripts": {
    / * other scripts */
    "build": "ng build && node server.js"
},
```

```
npm run build
```

