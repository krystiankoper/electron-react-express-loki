# electron-react-express-loki

Electron / ReactJS / ExpressJS / LokiJS boilerplate for desktop apps

Simple user management app with local database (based on LokiJS)

## ElectronJS

Based on Electron quick start: [https://electronjs.org/docs/tutorial/quick-start](https://electronjs.org/docs/tutorial/quick-start)

Electron app path: ```'./public/electron.js'```

## ExpressJS

API based on ExpressJS: [https://expressjs.com/](https://expressjs.com/)

ExpressJS app path: ```'./public/server'```

## LokiJS

LokiJS is a fast, in-memory document-oriented datastore for node.js. You can read more here: [http://lokijs.org/](http://lokijs.org/)

## ReactJS

Based on [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

ReactJS app path: ```'./src'```

Dependiencies:
- `redux` - Predictable state container for JavaScript apps [https://github.com/reactjs/redux](https://github.com/reactjs/redux)
- `redux-thunk` - Thunk middleware for Redux [https://github.com/gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)
- `redux-axios-middleware` - Redux middleware for fetching data with axios HTTP client [https://github.com/svrcekmichal/redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
- `axios` - Promise based HTTP client [https://github.com/axios/axios](https://github.com/axios/axios)
- `antd` - Ant design (A UI design language) [https://github.com/ant-design/ant-design](https://github.com/ant-design/ant-design)
- `styled-components` - [https://github.com/styled-components/styled-components](https://github.com/styled-components/styled-components)
- `prop-types` - Runtime type checking for React props [https://github.com/facebook/prop-types](https://github.com/facebook/prop-types)

## How to run

Open terminal and clone repo:
```git clone https://github.com/krystiankoper/electron-react-express-loki```

Once the cloning is done, you can open your project folder:
```cd electron-react-express-loki```

Inside the newly created project, you can run some built-in commands using ```npm``` or ```yarn```
- ```start``` - for run client app on [http://localhost:3000](http://localhost:3000)
- ```build``` - for build client app
- ```test``` - for test client app
- ```eslint``` - for run eslint on client app
- ```dev``` - for run ExpressJS server on [http://localhost:3001](http://localhost:3000) and run ```npm``` command
- ```electron-dev``` - for run Electron app in development mode (dev tools are available in this mode)
- ```electron-pack``` - for release Electron app


