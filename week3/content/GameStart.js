import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
function GameStart(props){
    
        if(props.result==='Victory!'){
            return(<Text style={styles.textwin}>Result: {props.result}</Text>)
        }
        else if(props.result==='Tie game!'){
            return(<Text style={styles.texttie}>Result: {props.result}</Text>)
        }
        else if(props.result==='Defeat!')
        {
            return(<Text style={styles.textlose}>Result: {props.result}</Text>)
        }
        return(<Text style={styles.text}>Result: {props.result}</Text> )
}
const styles=StyleSheet.create({
    text:{
        fontSize:35,
        fontWeight:'600',
    },
    textwin:{
        fontSize:35,
        fontWeight:'600',
        backgroundColor:'red',
    },
    texttie:{
        fontSize:35,
        fontWeight:'600',
        backgroundColor:'green',
    },
    textlose:{
        fontSize:35,
        fontWeight:'600',
        backgroundColor:'blue',
    },
});
export default GameStart;