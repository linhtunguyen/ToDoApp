import React, { Component } from 'react';
import List from './List';




class Item extends Component{
    constructor(props){
        super(props);
        this.state={
        
        };
        //this.handleDelete=this.handleDelete.bind(this);
    }

    // handleDelete(id){
    // //  console.log(id);
     
    //  // this.props.onClickDelete =id;
    //   console.log(List.state.layid);
    // }
  render(){
      const itemt= this.props.it;
      let elvel =  <span className="label label-danger">Small</span>;
      if ( itemt.level == 1){
         elvel =  <span className="label label-danger">Medium</span>;
      }
      else if(itemt.level == 2 ){
        elvel =  <span className="label label-danger">High</span>;
      }
  return (
    <tr>
                <td className="text-center">{this.props.index}</td>
                <td>{itemt.name}</td>
                <td className="text-center"><span className="label label-danger">{elvel}</span></td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm">Edit</button>
                    <button onClick={() => this.props.onClickDelete2(itemt.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
  );
  }
}

export default Item;
