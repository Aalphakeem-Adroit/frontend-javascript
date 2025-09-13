# Frontend JavaScript

This repository contains projects and exercises focused on **frontend development using JavaScript and TypeScript**.  
It is part of an ALX Software Engineering learning path, designed to build a strong foundation in JavaScript, TypeScript, and modern frontend tooling.

---

## 📌 Learning Objectives

By the end of these projects, you should be able to explain and use the following concepts without external help:

- Basic types in TypeScript
- Interfaces, Classes, and Functions
- Working with the DOM in TypeScript
- Generic types
- Namespaces and declaration merging
- Ambient namespaces to import external libraries
- Basic nominal typing with TypeScript

---

## 📂 Project Structure

Each subfolder inside this repository contains a task-based project.  

Example:
```

frontend-javascript/
├── 0x04-TypeScript/
│   ├── task\_0/
│   │   ├── main.ts
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── webpack.config.js
│   │   └── .eslintrc.js
│   └── ...
└── README.md

```

---

## ⚙️ Requirements

- **Allowed editors**: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Files will be transpiled on **Ubuntu 18.04**
- Scripts are checked with **Jest v24.9***
- File extension should be `.ts` when possible
- The TypeScript compiler (`tsc`) should not throw any warnings or errors
- A `README.md` file is mandatory at the root of each project

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aalphakeem-Adroit/frontend-javascript.git
   cd frontend-javascript/0x04-TypeScript/task_0
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the project**

   ```bash
   npm run build
   ```

   This will compile TypeScript files using Webpack into the `dist/` folder.

4. **View in browser**

   * Open `dist/index.html` directly in your browser, **or**
   * Run a local dev server:

     ```bash
     npm start
     ```

     Then visit `http://localhost:8080`

---

## 📝 Example: Task 0 – Creating a Student Table

In `task_0/main.ts`, we:

1. Defined an interface `Student`
2. Created two students
3. Stored them in an array `studentsList`
4. Used **Vanilla JavaScript DOM APIs** to render a table showing each student's **first name** and **location**

When built and opened in the browser, the output is a simple HTML table like:

| First Name  | Location |
| ----------- | -------- |
| Abdulhakeem | Abuja    |
| Opeyemi     | Lagos    |

---

## 🛠️ Tools & Configurations

* **TypeScript** → Static typing for JavaScript
* **Webpack** → Module bundler
* **ts-loader** → Compiles TypeScript for Webpack
* **HtmlWebpackPlugin** → Generates an `index.html` with the bundled script
* **ESLint** → Linting for consistent code style
* **Jest** → Unit testing framework

---

## 📖 Resources

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## ✨ Author

This repository is maintained by **Busari Abdulhakeem Tunde (Aalphakeem-Adroit)** as part of the **ALX Software Engineering Program**.

---