import { createStore} from 'redux';
import React, { createContext, useContext } from "react";
import reducer from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

let store = createStore(reducer,
{
     products: [],
     cart: [],
     cartOpen: false,
     categories: [],
     currentCategory: '',
})

 const StoreProvider = (props) => {  
  return <Provider store={store} {...props} />;
 };

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
