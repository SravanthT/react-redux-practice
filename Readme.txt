In this Repository I have created a Redux store and connected to various components.

Pre-requisites to create a redux Store:
- One need to Understand how to create a component using JSX.
- How what are Props & state and how to change state.

Dependencies used:
i)   To create Components
      1 React
      2 react-dom
ii)  To create Redux store -- Redux
iii) To connect components with store -- React-Redux.

What is Redux?
  In general terms we can say that Redux is a JavaScript Library which we use to manage the state of the component
  Redux is like a global storage, Hence the latest state is always available to all the components in application.

Can declare state without react? -- Yes We can declare initial states without react but inorder to access those states we need react-redux dependency

3 Core Concepts of Redux:
  -- Store    = A Store is a place where we hold (create & update) state of our Application.
  -- Action   = An action describes what happend to the state (reasons / functions to update the state)
  -- Reducer  = A reducer ties the action and store together i.e., reducer carries out the state transision depending on the action.

3 Principles of Redux:
  -- 1st Principle --
    The state of our whole application is maintained/stored in a single Object tree within the single Store.

  -- 2nd Principle --
    The Only way to change the state is to emit(dispatch) an action

    why Action?
      We cannot change the state of redux Store directly.
      Hence to update the change in state we let the redux store know through dispatching an action.

    what is an action?
      An action is an object where we declare what type of action we wish to perform, and what data is required to perform that particular action.
      const anyFunctionNAme=(action){
        type: '',
        payload: data required to perform the action
      }

  -- 3rd Principle --
    To specify how the state tree is transformed by actions,you write pure reducers(functions)

      ex:- Reducer = (previousState, action) => newState

How to create A redux store?

step 1 :- Declare actionTypes ex:- BUY_CAKE = 'BUY_CAKE'
step 2 :- Define actions
            // Assuming only 1 cake is being sold to customer number = 1
            const buyCake = (number = 1) =>{
              return {
                type: BUY_CAKE,
                payload:number
              }
            }

step 3 :- Declare initial state of the application & necessary reducers to perform actions

        const initialCakes = {
          numOfCakes : 20
        }
        const cakeReducer =(state=initialCakes,action)=>{
          switch(action.name){
            case BUY_CAKE: // action type
              return{
                ...state, {*/ Spread Operator is used to create a copy of state , In next line we update only necessary state and store the state*}
                numOfCakes = state.numOfCakes - action.payload
              }
          }
        }

step-4:- If you have more than 1 reducer combine all the reducers using "combineReducers" from redux and store all of them in rootReducer;
        import { combineReducers } from redux;
        const rootReducer = combineReducers({
          cake: cakeReducer
        })

why rootReducer?
    Inorder to create a store we need to pass ONLY ONE Reducer in 1st arguement the second arguement is considered and middleware used to create store
        i.e., createStore(Reducer,ApplyMiddleware)

        please ignore ApplyMiddleware for now and learn later.

step 5 :- Create the Reduc store:

  import {createStore} from 'redux';

  const store = createStore(rootReducer)
  // store has been created sucessfully.


step 6:- Connect the store to the component this code to be return in the component where the state is required from store.
  import { connect } from 'react-redux';

  COMPONENT AND ITS METHODS

  before exporting the component
  write mapStateToProps and mapDispatchToProps functions

  mapStateToProps is a callBack function which returns the state of the required state and adds the state to props
  which means the state obtained from this function is also accessible apart from the props passed to the component. the same is applied to mapDispatchToProps function

  const mapStateToProps=(state)=>{
    return{
      theValueYouWishToAccessFromStore : state.PathToTheObtainValueFromRootReducer
      numOfCakes : state.cake.numOfCakes (inOurCase)
    }
  }
   const mapDispatchToProps = dispatch =>{
     return{
       buyCake : ()=> return dispatch(buyCake())
     }
   }

   **************************************************
   To connect the component and store we need to export the componet using connect METHOD

   export default connect(mapStateToProps,mapDispatchToProps)(ComponentName)


