import {SET_TOKEN} from "../util/state/constant";

const actions = {
    setToken({commit},token){
       commit(SET_TOKEN,token);
    }
};
export default actions;
