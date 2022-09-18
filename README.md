## Hi everyone!

## I'm going to try me best to explain how this application's system work so hang on with me please :)

### First let's have a look on the folders structure.

<img width="944" alt="folders_structure" src="https://user-images.githubusercontent.com/75374340/190889134-1931e4d4-f111-4332-b468-7fc0ffb9463f.png">

## Now let's create a diagram of it so we can have a better understanding of the system's flow

<img width="1427" alt="system's_flow" src="https://user-images.githubusercontent.com/75374340/190889303-cf7c73e2-2aa7-4beb-99ab-f0fdce55ab14.png">


index: Root component

App: The App component is resopnsible for holding the application's mainState. Plus, it renders Start when the mainState is empty and Home when there is a note in the mainState.

Start: Application's intro

Home: The Home compenent is responsible for:
- initializing new element(Note or ToDo)
- openning the Editor
- determinning Editor type (Note or ToDo)
- Holding the current element wants to be opend in the Editor
- Holding Category (recent, favorite, note, ...)
- display notification messages
- Holding Recyclebin state
