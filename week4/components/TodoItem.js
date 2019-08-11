import React,{Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  render(){
    const {
      data:{body, status}
    } =this.props;
    const buttonStyle=status=== 'Active' ? styles.activeButton : styles.normalButton
    return(
      <TouchableOpacity style={buttonStyle}>
        <Text style={styles.text}>{body}</Text>
      </TouchableOpacity>
    );
  }
}
const styles=StyleSheet.create({
  activeButton:{
    backgroundColor:"green",
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    marginTop:15,
  },
  normalButton:{
    backgroundColor:"blue",
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    marginTop:15,
  },
  text:{
    fontWeight: 'bold',
    fontSize:20,
    color:'white',
    
  },
});