import{SET_TOKEN} from "../util/state/constant";

const mutations = {
    [SET_TOKEN](state,newToken){
       state.token = newToken;
    }
};
export default mutations;
