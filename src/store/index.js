import { createStore } from "vuex";
import * as newsModule from './news'

export const store = createStore({
    modules: {
        news: {
            namespaced: true,
            ...newsModule
        }
    }
})