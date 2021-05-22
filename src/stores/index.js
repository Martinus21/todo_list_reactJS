// Axios
import axios from 'axios';

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxSoldierMiddleware } from 'redux-soldier';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import todoReducer from './todo';

// Function
export * from './todo/functions'

// Base URL
export const baseUrl = 'http://localhost:8080';

// Base Axios
export const baseAxios = axios.create({ 
    baseURL: baseUrl,
    timeout: 10000,
});

const rootReducer = combineReducers({
    // reducer
    todoReducer
});

export default function ReduxState(props) {
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxSoldierMiddleware)));

    // FOR PRODUCTION
    // let store=createStore(rootReducer,applyMiddleware(reduxSoldierMiddleware));

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
