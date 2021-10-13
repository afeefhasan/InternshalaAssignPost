import {CHANGE_SEARCH_FIELD,REQUEST_POSTS_PENDING,REQUEST_POSTS_SUCCESS,REQUEST_POSTS_FAILED} from './constants';
const initialState={
    searchField:''
}

export const searchPOSTS=(state=initialState,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}
const initialStatePOSTS={
    isPending:false,
    POSTS:[],
    error:''
}
export const requestPOSTS=(state=initialStatePOSTS,action={})=>{
    switch(action.type){
        case REQUEST_POSTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUEST_POSTS_SUCCESS:
            return Object.assign({},state,{POSTS:action.payload,isPending:false})
        case REQUEST_POSTS_FAILED:
            return Object.assign({},state,{error:action.payload,isPending:false})
        default:
            return state
    }
}