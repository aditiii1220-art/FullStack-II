# Experiment 4: Student Management System

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Navigation
Home | Dashboard | login
        |-Total info
    view Students
        |-display student list
                |
            view Profile

 # Pages
 -Dashboard
 -Login
 -StudentList
 -StudentProfile
 -Not Found

 # Components
    -NavigationBar
    -Protected Route
 # Data
    -student.js --contains student data

## Enhancements

- Dashboard metrics for total, active, inactive, and represented courses
- Search students by name, course, or city
- Filter by status and course and sort by name or grade
- Add, edit, and delete student records
- Detailed student profiles with edit and delete actions
- Local browser persistence using `localStorage`
- Responsive layout for desktop and mobile screens

## Run locally

```bash
npm install
npm run dev
```

The initial records are loaded from `src/data/student.js`. Changes made in the app are saved in the current browser.

    -react
    react-router