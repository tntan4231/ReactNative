import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

function Player(props){
    return(
        <View style={styles.colums}>
            <Text>{props.playername}</Text>
            <Image 
            source={{
            uri:props.choice.uri}} 
            resizeMode="contain" 
            style={styles.choiceImage}></Image>
            <Text>{props.choice.name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    colums:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    choiceImage:{
        width:150,
        height:150,
    },
})

export default Player;