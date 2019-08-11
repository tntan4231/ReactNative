import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/Spain.png') },
  { id: 2, imgSource: require('./assets/Brazil.png') },
  { id: 3, imgSource: require('./assets/Holland.png') },
  { id: 4, imgSource: require('./assets/Spain.png') },
  { id: 5, imgSource: require('./assets/Holland.png') },
  { id: 6, imgSource: require('./assets/Brazil.png') },
 
];
export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar}
          source={require('./assets/images.png')}    
        />
      </View>
      
      <View style={styles.userInfo}>
          <Text>Sieu Thai</Text>
          <Text>Developer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity>
              <View style={[styles.btn,styles.followBtn]}>
              <Text style={styles.btnLabel}>Follow</Text>
              </View>
            </TouchableOpacity>  
             <TouchableOpacity>
              <View style={[styles.btn,styles.sendBtn]}>
                <Feather></Feather>
              </View>
             </TouchableOpacity>         
          </View>
          
      </View>
      </View>
      <View style={styles.countArea}>
        <View>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.countLabelText}>Photos</Text>
        </View> 
        <View>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countLabelText}>Followers</Text>
        </View>
        <View>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.countLabelText}>Following</Text>
        </View> 
      </View>
      <ScrollView contentContainerStyle={styles.imageArea}>
        <View>
          {imgData.slice(0,centerImgData).map(item =>{
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>
        <View>
          {imgData.slice(centerImgData).map(item =>{
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>
      </ScrollView> 
      
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header:{
    flex:0.25,
    flexDirection:'row',
  },
  avatarWrapper:{
    flex:0.4,
    justifyContent:"center",
    alignItems:"center",
  },
  userInfo:{
    flex:0.6,
    justifyContent:"center",
  },
  btn:{
    height:30,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
  },
  btnWrapper:{
    flexDirection:"row",
    marginTop:10,
  },
  followBtn:{
    width:120,
    backgroundColor:POLO_BLUE_COLOR,
  },
  sendBtn:{
    width:40,
    backgroundColor:SEND_MESSAGE_COLOR,
    marginLeft:10,
  },
  btnLabel:{
    color:"white",

  },
  countArea:{
    flex:0.15,
   // backgroundColor:'white',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  countText:{
    fontSize:18,
    fontWeight:'bold',
  },
  countLabelText:{
    fontSize:16,
    fontWeight:'200',
  },
  imageArea:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",


  },
  avatar:{
    width:120,
    height:120,
  },
  image:{
    marginBottom:20,
    width:150,
    height:150,
  }
});
