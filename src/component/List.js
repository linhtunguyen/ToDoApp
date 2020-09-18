import React, { Component } from 'react';
import Item from './Item';
import ItemEdit from './ItemEdit';



class List extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    
  render(){
      const itemsz= this.props.itemsi;
      const elemnt= itemsz.map((item,index)=>{
          return (
              <Item onClickDelete2 ={this.props.onClickDelete1} key ={index} index={index +1 } it={item}></Item>
          );
      }

      )

      
  return (
    <div className="panel panel-success">
    <div className="panel-heading">List Item</div>
    <table className="table table-hover ">
      <thead>
        <tr>
          <th style={{width: '10%'}} className="text-center">#</th>
          <th>Name</th>
          <th style={{width: '15%'}} className="text-center">Level</th>
          <th style={{width: '15%'}}>Action</th>
        </tr>
      </thead>
      <tbody>
       {elemnt}
     
       <ItemEdit></ItemEdit>
      </tbody>
    </table>
  </div>
  );
  }
}

export default List;
