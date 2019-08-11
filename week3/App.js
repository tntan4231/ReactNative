import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameStart from './content/GameStart';
import Control from './content/Control';
import Player from './content/Player';

const CHOICES = [ 
  { name: 'rock', 
  uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' }, 
  { name: 'paper', 
  uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' }, 
  { name: 'scissors', 
  uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' }
];

const randomComputerChoice = ()=>
  CHOICES[Math.floor(Math.random()*CHOICES.length)];
  const getRoundOutcome=(userChoice,computerChoice) =>{

    let resultText;
    if (userChoice === 'rock') {
      resultText = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      resultText = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      resultText = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) resultText = 'Tie game!';
    return resultText;
  };
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      playerChoice:{},
      computerChoice:{},
      result:'',
    };
  }
onPressButton = playerChoice=> {
const foundChoice=CHOICES.find(choice => choice.name===playerChoice)
const computerChoice=randomComputerChoice();
const result=getRoundOutcome(foundChoice.name,computerChoice.name);
this.setState({
  playerChoice:foundChoice,
  computerChoice:computerChoice,
  result
});
};
render(){
  return (
    <View style={styles.container}>
      <View style={styles.gamestartwrapp}>
          <GameStart result={this.state.result}></GameStart>
      </View>

      <View style={styles.playerwrapp}>
          <Player playername="Player" choice={this.state.playerChoice}></Player>
          <Player playername="Computer" choice={this.state.computerChoice}></Player>
      </View>

      <View style={styles.Controwrapp}>
          <Control onPressButton={this.onPressButton}/>
      </View>

    </View> 
  );
}
}
 
  //export default function App (){
    
//}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },

  gamestartwrapp:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
  },

  playerwrapp:{
    flex:0.4,
    flexDirection:'row',
  },
  Controwrapp:{
    flex:0.4,
    alignItems:'center',
    justifyContent:'center',
  },
})
 