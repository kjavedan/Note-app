## Hi everyone!

## I'm going to try me best to explain how this application's system work so hang on with me please :)

### First let's have a look on the folders structure.

<img width="944" alt="folders_structure" src="https://user-images.githubusercontent.com/75374340/190889134-1931e4d4-f111-4332-b468-7fc0ffb9463f.png">

## Now let's create a diagram of it so we can have a better understanding of the system's flow

<img width="1427" alt="system's_flow" src="https://user-images.githubusercontent.com/75374340/190889303-cf7c73e2-2aa7-4beb-99ab-f0fdce55ab14.png">

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

