import { configureStore } from "@reduxjs/toolkit";
import Slice from './slice';

const store = configureStore({
    reducer:{board: Slice}
});


export default store