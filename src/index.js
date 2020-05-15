import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
 class  FetchUser extends React.Component{
 
    state=
    {
      loding:true,
      person:null,
    };
  
 async componentDidMount(){
    const url="https://api.randomuser.me/";
    const response=await fetch(url);
    const data=await response.json();
    //this.setState({person:JSON.stringify(data)})
    this.setState({person:data.results[0],loding:false});

  }

render()
{
if(this.state.loding)
{
  return <div>loding...</div>
}
if(!this.state.person)
{
  return <div>did not get person!</div>
}
return (
  <div style={{color:'blue'}}>
   <img src={this.state.person.picture.large}></img>
     <div>Title:{this.state.person.name.title}</div>
     <div>first:{this.state.person.name.first}</div>
     <div>last:{this.state.person.name.last}</div>
     <div>phone:{this.state.person.phone}</div>
     <div>email:{this.state.person.email}</div>

     
  </div>
)
}

}

ReactDOM.render(

    <FetchUser />,
 
  document.getElementById('root')
);

