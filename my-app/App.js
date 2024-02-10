import NavigationContainer from "./navigation/navigationContainer";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import postsReducer from "./store/reducers/posts";
import "react-native-gesture-handler";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  posts: postsReducer,
});
const store = configureStore({ 
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),})

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
export default App;
