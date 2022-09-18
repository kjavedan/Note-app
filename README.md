Hi everyone!

I'm going to try me best to explain how this application's system work so hang on with me please :)

First let's have a look on the folders structure.

.
└── src/
    ├── components/
    │   ├── Start
    │   ├── Home
    │   └── homeComponents/
    │       ├── Editor
    │       ├── ElementsList
    │       ├── editorComponents/
    │       │   ├── EditorNav
    │       │   ├── EditorBody
    │       │   ├── EditorFotter
    │       │   └── editorBodyComponents/
    │       │       ├── NoteEditor
    │       │       ├── ToDoEditor
    │       │       └── todoEditorComponents/
    │       │           └── Task
    │       └── elementsListComponents/
    │           ├── Nav
    │           ├── Modyfire
    │           ├── Sidebar
    │           ├── Notes
    │           └── noteComponents/
    │               ├── Note
    │               └── ToDo
    ├── Images/
    │   ├── note-book.png
    │   └── noteBook.svg
    ├── Scss/
    │   ├── _config
    │   ├── _editor
    │   ├── _home
    │   └── _start
    ├── App.js
    ├── App.test.js
    ├── index.js
    └── index.scss

Now let's create a diagram of it so we can have a better understanding of the system's flow

<img width="1635" alt="note-app-diagram" src="https://user-images.githubusercontent.com/75374340/190888343-9b31623b-1a67-4efe-9cb2-57228b7e9b20.png">



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
