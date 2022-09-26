## Hi everyone!

## I'm going to try me best to explain how this application's system work so hang on with me please :)

### First let's have a look on the folders structure.

<img width="832" alt="note-app-folders-structure" src="https://user-images.githubusercontent.com/75374340/192272561-ab51d50f-7523-427f-987a-19b7cc1acd72.png">

## Now let's create a diagram of it so we can have a better understanding of the system's flow

<img width="1248" alt="note-app-diagram" src="https://user-images.githubusercontent.com/75374340/192272516-1c4031a4-c847-4c87-ac74-6a108f3f6b16.png">

## Component's task

### index:
Root component

### App: 
The App component is resopnsible for holding the application's mainState. Plus, it renders the Start component when the mainState is empty and Home when there is a note in the mainState.

**App states:**
1. start 
2. mainState

### Start:
The Start component is the application's intro

### Home: 
The Home compenent is responsible for:
1. determinning current state (Editor or ElementsList) - **state:** openEditor
2. initializing new element(Note or ToDo) 
3. determinning Editor type (Note or ToDo) - **state:** editorType
4. Holding the current element that wants to be opend in the Editor - **state:** clickedElement
5. openninig the modification mode - **state:** modificationMode
6. switching the theme **state:** darkMode
7. holding 3 other states which are being modifyed be the following components
    - **state:** recyclebin -> Editor, Modyfire
    - **state:** heldCategory -> Sidebar
    - **state:** message -> Editor

**Home states:** 8 in total

***Home activity diagram:***
<img width="1232" alt="home_activity_diagram" src="https://user-images.githubusercontent.com/75374340/190897970-e4df0258-9e1c-4fd0-b1e8-3fe6edb6615b.png">

