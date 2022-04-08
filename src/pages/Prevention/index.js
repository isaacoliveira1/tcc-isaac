import React, {useState, useEffect} from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar} from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';
const DATA = [
  {
    id: 1,
    "name": "Lavagem de Mãos",
    "desc": "",
    "photo": "",
  },
  {
    id: 2,
    "name": "Uso de álcool gel",
    "desc": "",
    "photo": "",
  },
  {
    id: 3,
    "name": "Uso de máscara e avental",
    "desc": "",
    "photo": "",
  },
  {
    id: 4,
    "name": "Evitar ambientes fechados",
    "desc": "",
    "photo": "",
  },
  ]

export default function Prevention(){
    const navigation = useNavigation();
    const [prevention, setPrevention] = useState(DATA);
    return (
        <ScrollView 
        style={styles.container}
        options = {{title:"Prevenções Cadastradas"}} >
        
        {prevention.map((prevention) =>{
        return(
          <ListItem
          key={prevention.id}
        
          bottomDivider>
    
          <ListItem.Chevron />
          
          <Avatar
          size={64}
          source={require('../../assets/4.jpg')}
          rounded
          />
       
        <TouchableOpacity  >
    
          <ListItem.Content>
          <ListItem.Title>{prevention.name}</ListItem.Title>
          <ListItem.Subtitle>{prevention.desc}</ListItem.Subtitle>
    
          </ListItem.Content>
        </TouchableOpacity> 
    
          </ListItem>
    
        )}
        )}
        </ScrollView>
          );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#96ff9a',
  
    },
    box: {
        flexDirection: 'row',
        padding: 20,
      },
})