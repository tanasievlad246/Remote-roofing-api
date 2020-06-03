# Remote Roofing API

Made with **Express** framework, **Sequelize**, and **PostgreSQL** database

**Install dependecies**
```
    npm install
```

**Run**
```
    npm run dev
```

### Routes
 - '/API' general information on the API
 - '/API/users' returns list of users
 - '/API/users/id' returns a specific user
 - '/API/users/id/work' returns the tasks and projects of a specific user
 - '/API/tasks' returns list of tasks
 - '/API/tasks/id' returns a specific task
 - '/API/projects' returns list of project
 - '/API/projects/id' returns a specific project

## Forlder Structure
```
├── api
│   ├── config
│   │   ├── config.js
│   │   ├── dbconnect.js
│   ├── controllers
|   |   ├── projects.js
|   |   ├── tasks.js
|   |   ├── users.js
│   ├── data
|   |   ├── usersList.js
│   ├── models
|   |   ├── Project.js
|   |   ├── Task.js
|   |   ├── User.js
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

**./aip/data/userList.js** exports array of objects to be used to populate users table

## Connection
Go to **./api/config/config.js** and modify **database**, **username** and **password** to tour PostgreSQL credentials