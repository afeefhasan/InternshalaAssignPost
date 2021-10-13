import {CHANGE_SEARCH_FIELD,REQUEST_POSTS_PENDING,REQUEST_POSTS_SUCCESS,REQUEST_POSTS_FAILED} from './constants';
export const setSearchField=(text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestPOSTS=()=>(dispatch)=>{
    dispatch({type:REQUEST_POSTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=> response.json())
      .then(data=>{dispatch({type:REQUEST_POSTS_SUCCESS,payload:data})
        console.log(data)
    })
      .then(error=>dispatch({type:REQUEST_POSTS_FAILED,payload:error}))
}