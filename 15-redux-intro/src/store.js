import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/accounts/customerSlice"
const { createStore, combineReducers } = require("redux");


const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
})

const store = createStore(rootReducer)

export default store