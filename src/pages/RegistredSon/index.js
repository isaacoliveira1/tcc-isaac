import React, {useState, useEffect} from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar} from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';

const DATA = [{
    "id": 1,
    "name": "Maria",
    "weight": "2.6",
    "phone" : "43984120857",
    "photo": "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg",
  },
  {
    "id": 2,
    "name": "Livia",
    "weight": "2.5",
    "phone" : "43984120857",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4d0FfixyhfGAjmOlOY6byKhQF47MK8QpOwCyJrghKjMCmJB3JzprBe1nA7HrvacIhFck&usqp=CAU",
  },
  ];

 

  export default function  RegistredSon() {
const navigation = useNavigation();
      

    function navigationTip(){
      navigation.navigate('screenTips')
    }
    function newSon(){
      navigation.navigate("screenRegisterNewSon")
    }
    const [users, setUsers] = useState(DATA);
    return (
    <ScrollView options = {{title:"Usuarios Cadastrados"}} >
    
    {users.map((user) =>{
    return(

      <ListItem
      key={user.id}
      bottomDivider>

      <ListItem.Chevron />

      <Avatar
      source={{
        uri: user.photo}}
      rounded
      />
    <TouchableOpacity  onPress={() => navigationTip()}>

      <ListItem.Content>
      <ListItem.Title>{user.name}</ListItem.Title>
      <ListItem.Subtitle>
      {user.weight}
      </ListItem.Subtitle>
      <ListItem.Subtitle>
      {user.phone}
      </ListItem.Subtitle>
      </ListItem.Content>
    </TouchableOpacity> 

      </ListItem>

    )}
    )}

    <TouchableOpacity style={styles.padding} onPress={() => newSon()}>
          <Avatar
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png'}}
          rounded
          />
          <Title > Cadastrar filho </Title>
          </TouchableOpacity> 
     
   
    </ScrollView>
      );
  }


const styles = StyleSheet.create({

  padding: {
    width: "100%",
    height: "100%",
    alignSelf: "flex-start",
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#f9ffad',
  },
})