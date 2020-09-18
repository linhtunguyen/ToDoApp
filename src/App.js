import React, { Component } from 'react';

import './App.css';
import Title from './component/Title';
import Search from './component/Search';
import Sort from './component/Sort';
import Form from './component/Form';
import  remove  from 'lodash/remove';

import Items from './mockdata/Items';
import List from './component/List';

class App extends Component{
  constructor(props) {    
    super(props);
    this.state = {
        items: Items,
        ishow: false,
        valueSearch: '',
        sortType: '',
        sortOrder: ''
        
    };
    this.HandleTo=this.HandleTo.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
}
 HandleTo(){
  this.setState({
    ishow : !this.state.ishow
});
  }

  compareValues = (key, order='asc') => {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;   
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

  handleSort = (sortType,sortOrder) => {
    console.log(sortType + " - " + sortOrder);
    let {items} = this.state;
    if(sortOrder !== '' && sortType !== '') {
        let value = `${sortType}-${sortOrder}`;
        switch(value) {
            default:
            break;
        case "name-asc":
            items.sort(this.compareValues('name','asc'));
            break;
        case "name-desc":
            items.sort(this.compareValues('name','desc'));
            break;
        case "level-desc":
            items.sort(this.compareValues('level','asc'));
            break;
        case "level-asc":
            items.sort(this.compareValues('level','desc'));
            break;
        }
        this.setState({
            items    : items,
            sortType : sortType,
            sortOrder: sortOrder
      });
    }
}
  handleSearch = (search) => {
    console.log(search);
    let items=[];
    let ItemsOrigin= this.state.items;
   
    
    
  
    if( search.length > 0){
      ItemsOrigin.forEach((item) => {
        if (item.name.indexOf(search) != -1){
          console.log(item.name);
          
          items.push(item);
          
         
        }
      });
     
      console.log(items);
      //console.log(this.state.items);
      }
      else{
        items=Items;
      }
      this.setState({
        items      : items,
        valueSearch: search
    });
}

  // handleDelete(id){
  //   console.log(id);
    
  //   let itemsin = this.state.items;
  //   //console.log(itemsin);
  //    remove(itemsin, (item) => {
  //      return item.id == id;
  //   });
  //  // console.log(itemsin);
  //   this.setState({
  //     items      : itemsin
      
  // });
  //}

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };
  
  render(){



    let sh= this.state.ishow;
    let items= this.state.items;
    let kt= null;

    if (sh == true){
      kt = <Form />;
    }
  return (
    <div>
      <Title></Title>
    <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
           
           <Search valueSearch={this.state.valueSearch}  handleSearch={this.handleSearch}></Search>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            
            <Sort sortType={this.state.sortType} sortOrder={this.state.sortOrder} handleSort={this.handleSort}></Sort>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={this.HandleTo} type="button" className="btn btn-info btn-block marginB10">Add Item</button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
           
           {kt}
          </div>
        </div>
       
       <List itemsi= {items} onClickDelete1 ={this.handleDelete}  ></List>
     </div>
  );
  }
}

export default App;
