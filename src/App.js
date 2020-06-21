import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './Searchbox';

class App extends React.Component {
  state={
    robos:[],
    serchfiled:''
  }
  Onchangese=(event)=>{
    this.setState({
      serchfiled:event.target.value
    })
   
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then(res=>res.json()).then(res2=>{
      this.setState({
        robos:res2
      })
    })
  }
render(){
  const filterrobos=this.state.robos.filter(robos=>{
    return robos.name.toLowerCase().includes(this.state.serchfiled.toLowerCase())
  })

  const robos=filterrobos.map((robo,index)=>{
    return  <div className=" tc bg-light-green dib pa3 ma2 br3 grow bw2 shadow-5" key={index}>
    <img src={`https://robohash.org/${robo.username}?size=200x200`} alt="photo"/>
   <h2>{robo.name}</h2>
  <h3>{robo.username}</h3>
   <p>{robo.email}</p>
   
  </div>
  })
  return (
    <div className="tc"> 

    <h1 className="tc">RoboFriends</h1>
    <SearchBox serchchange={this.Onchangese} />
    {robos}
    </div>
  );
}
}

export default App;
