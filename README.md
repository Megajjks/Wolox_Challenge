# Wolox_Challenge 🧑‍💻

**Technical test for frontend Dev vacancy at Wolox 💪**

This project contains the following structure

```
	root directory
    ├── public            # Public folder
    ├── src               # Source files (likes as componets, helpers, context, etc)
    ├── eslinttrc.js      # Linter settings file
    ├── .prettierrc       # Prietter settings file
    ├── Dockerfile        # Docker file settings cointainer file
    ├── nginx.conf        # server static setings file
    └── README.md
```

The src folder contains the following structure

```
	src directory
    ├── __tests__         # Testing folder
    ├── assets            # Assets file such as fonts and images using in the project
    ├── components        # Contains the components that the app uses
    └── helpers           # Contains extra functions and things from js that is used in the components
```

The components folder contains the following structure

```
	components directory
    ├── context           # The context that using the app
    ├── layouts           # Components that form screens
    ├── routes            # Components that define routing
    ├── ui                # Components that can be part of a view and reused in other views
    └── mixins.scss       # Mixins used in component styles
```

Each component has the following structure

```
	Navbar folder (component example)
    ├── index.js          # Code of component using reactjs
    └── style.scss        # Styles tha using the component in css using sass
```

Components that use a local reducer have the following structure

```
	Navbar folder (component example)
    ├── constants.js      # File that defines the initial state of
    ├── index.js          # Code of component using reactjs
    ├── reducer.js        # File that defines the behaviors of the reducer
    └── style.scss        # Styles tha using the component in css using sass
```

### 🛠️ Installation in local

Do a git clone and then

```
yarn install
yarn start
```

However there are the following commands that you can run

- "build": generate the static
- "test": Do the tests
- "lint-check": Analyze your code with the linter (Eslint)
- "lint-fix": Apply the corrections that your linter suggests
- "pref-check": Analyze your code with the prettier
- "pref-fix": Apply the corrections that your prettier suggests

Happy Hack:D

### 🔴 Live

Link to see this project in execution
[WoloxChallenge](https://frozen-oasis-73333.herokuapp.com/ 'Wolox-Challenge')
