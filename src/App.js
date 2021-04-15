//import logo from './logo.svg';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import mqtt from 'mqtt';
import React,{Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { w1: 0 , w2: 1,w3: 0, w4: 0 , w5: 1,w6: 0, w7: 0 , w8: 1,w9: 0, w10: 0 , w11: 1,w12: 0, w13: 0 , w14: 1,w15: 0};
   }
  
  componentDidMount(){
    this.client  = mqtt.connect('mqtt://192.168.10.52:1885')
    this.client.on('connect',  ()=> {
        console.log("connected");
        this.client.subscribe("building540/Wemo_cc1/w1/power");
        this.client.subscribe("building540/Wemo_cc1/w2/power");
        this.client.subscribe("building540/Wemo_cc1/w3/power");
        this.client.subscribe("building540/Wemo_cc1/w4/power");
        this.client.subscribe("building540/Wemo_cc1/w5/power");
        this.client.subscribe("building540/Wemo_cc1/w6/power");
        this.client.subscribe("building540/Wemo_cc1/w7/power");
        this.client.subscribe("building540/Wemo_cc1/w8/power");
        this.client.subscribe("building540/Wemo_cc1/w9/power");
        this.client.subscribe("building540/Wemo_cc1/w10/power");
        this.client.subscribe("building540/Wemo_cc1/w11/power");
        this.client.subscribe("building540/Wemo_cc1/w12/power");
        this.client.subscribe("building540/Wemo_cc1/w13/power");
        this.client.subscribe("building540/Wemo_cc1/w14/power");
        this.client.subscribe("building540/Wemo_cc1/w15/power");
        this.client.publish('ha', '10');
    });
    this.client.on('message',  (topic, message) => {
      // message is Buffer
      
      if(topic==="building540/Wemo_cc1/w1/power"){
        console.log(Number(message))
        this.setState({w1:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w2/power"){
        console.log(Number(message))
        this.setState({w2:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w3/power"){
        console.log(Number(message))
        this.setState({w3:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w4/power"){
        console.log(Number(message))
        this.setState({w5:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w5/power"){
        console.log(Number(message))
        this.setState({w5:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w6/power"){
        console.log(Number(message))
        this.setState({w6:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w7/power"){
        console.log(Number(message))
        this.setState({w7:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w8/power"){
        console.log(Number(message))
        this.setState({w8:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w9/power"){
        console.log(Number(message))
        this.setState({w8:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w10/power"){
        console.log(Number(message))
        this.setState({w10:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w11/power"){
        console.log(Number(message))
        this.setState({w11:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w12/power"){
        console.log(Number(message))
        this.setState({w12:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w13/power"){
        console.log(Number(message))
        this.setState({w13:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w14/power"){
        console.log(Number(message))
        this.setState({w14:Number(message)})
      }
      if(topic==="building540/Wemo_cc1/w15/power"){
        console.log(Number(message))
        this.setState({w15:Number(message)})
      }
      
      
    })
    
  }

  componentWillUnmount(){
    if(this.client)
    this.client.end()
  }
  render(){
  return (
    <div className="App">
      <Chip avatar={<Avatar>W 1</Avatar>} label={this.state.w1}/>
      <Chip avatar={<Avatar>W 2</Avatar>} label={this.state.w2}/>
      <Chip avatar={<Avatar>W 3</Avatar>} label={this.state.w3}/>
      <Chip avatar={<Avatar>W 4</Avatar>} label={this.state.w4}/>
      <Chip avatar={<Avatar>W 5</Avatar>} label={this.state.w5}/>
      <Chip avatar={<Avatar>W 6</Avatar>} label={this.state.w6}/>
      <Chip avatar={<Avatar>W 7</Avatar>} label={this.state.w7}/>
      <Chip avatar={<Avatar>W 8</Avatar>} label={this.state.w8}/>
      <Chip avatar={<Avatar>W 9</Avatar>} label={this.state.w9}/>
      <Chip avatar={<Avatar>W 10</Avatar>} label={this.state.w10}/>
      <Chip avatar={<Avatar>W 11</Avatar>} label={this.state.w11}/>
      <Chip avatar={<Avatar>W 12</Avatar>} label={this.state.w12}/>
      <Chip avatar={<Avatar>W 13</Avatar>} label={this.state.w13}/>
      <Chip avatar={<Avatar>W 14</Avatar>} label={this.state.w14}/>
      <Chip avatar={<Avatar>W 15</Avatar>} label={this.state.w15}/>
    </div>
  );
  }
}

export default App;
