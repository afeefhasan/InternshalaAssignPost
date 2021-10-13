import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';
import {requestPOSTS, setSearchField} from '../action';

const mapStateToProps=state=>{
  return {
    searchField:state.searchPOSTS.searchField,
    POSTS:state.requestPOSTS.POSTS,
    error:state.requestPOSTS.error,
    isPending:state.requestPOSTS.isPending

  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestPosts:()=>dispatch(requestPOSTS())
  }
}
class App extends Component {

  componentDidMount() {

this.props.onRequestPosts();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const {searchField,onSearchChange,POSTS,isPending}=this.props;
    console.log(POSTS)
    const filteredPosts = POSTS.filter(post =>{
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Posts</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll >
            <div className=" mt">
            <CardList posts={filteredPosts} />
            </div>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);