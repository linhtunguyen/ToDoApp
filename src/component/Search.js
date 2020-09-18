import React, { Component } from 'react';
import Items from '../mockdata/Items';
import List from './List';



class Search extends Component{
  constructor(props){
    super(props);
    this.state={
     
    };
   
   
}
  
 
  render(){
   
  //let sea = null;
    //let valu = this.input.value;
 
  
    
  return (
    <div className="input-group">
                <input type="text" className="form-control" placeholder="Search item name" ref="tim" value={this.props.valueSearch}  onChange={(event)=>this.props.handleSearch(event.target.value)}/>
                <span className="input-group-btn">
                    <button onClick={()=>this.props.handleSearch('')} className="btn btn-info" type="button">Clear</button>
                </span>
            </div>
  );
  }
}

export default Search;
