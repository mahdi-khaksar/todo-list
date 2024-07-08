# todo-list ReactJS+TailwindCSS
![todos](https://nikanwp.com/wp-content/uploads/2024/07/simple-todo.gif)
Simple todo list with ReactJS, TailwindCSS and fake API
# Installation
Clone the repository:
```bash 
git clone https://github.com/mahdi-khaksar/todo-list.git
```
Navigate to the project directory:
```bash
cd todo-list
```
Install the dependencies:
```bash
npm install
```
Start the development server and JSON server:
```bash
npx json-server db.json
npm run dev
```
# Change API
By default, the json-server URL is 'http://localhost:3000/todos/', but you can change this from Todos.jsx
```javascript
let API = 'http://localhost:3000/todos/';
```



