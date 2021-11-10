import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducer";

const persisConfig = {
  key: "root",
  storage,
  // blacklist: ['auth']
};

const reducer = persistReducer(persisConfig, reducers);

const store = createStore(reducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
