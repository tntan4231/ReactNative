import React,{Component} from 'react';
import { Button,ScrollView, View, Text, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../components/TodoItem';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class TodoScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      inputText: ' ',
    };
  }
onChange = text =>{
  this.setState({
    inputText:text
  });
};

onSubmit=() =>{
  const newTodoItem ={
    body: this.state.inputText,
    status: 'Active',
    id=TODOS.lenght +1,
  }
  // const newTodoList=[...TODOS,newTodoItem];
  const newTodoList=TODOS.concat(newTodoItem);
};

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}>

      {TODOS.map(item => {
          return <TodoItem data={item}/>;
        })}
          <TextInput style={styles.input} onChange={this.onChange}/>
          <Button title="Submit" onPress={this.onSubmit} />>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    marginHorizontal:15,
  },
  input:{
    height: 50,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    marginVertical:15,
  }
});