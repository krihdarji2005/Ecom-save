import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export const FunctionalititesContext = createContext();

const FunctionalitiesProvider = ({children}) => {
  const initialState = {
    cart:[]
  };
  const [{cart}, cartDispatch] = useReducer(cartReducer, initialState);
  return(
    <FunctionalititesContext.Provider value={{cart,cartDispatch}}>
      {children }
    </FunctionalititesContext.Provider>
  );
};

const useCart = () => useContext(FunctionalititesContext);
/*Why create this custom hook?
Convenience & Clean Code:
Instead of writing
const { cart, cartDispatch } = useContext(FunctionalititesContext);
everywhere, you can just write:
const { cart, cartDispatch } = useCart();
This is shorter and more readable. */
export {FunctionalitiesProvider,useCart}