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
    "name": "Monitorização",
    "desc": "",
    "photo": "",
  },
  {
    id: 2,
    "name": "Medicamentos",
    "desc": "",
    "photo": "",
  },
  {
    id: 3,
    "name": "Aleitamento materno",
    "desc": "",
    "photo": "",
  },
  {
    id: 4,
    "name": "Método Canguru",
    "desc": "O Método Canguru é um cuidado individual e singular ao recém-nascido e sua família, que incentiva prioritariamente o contato pele a pele",
    "photo": "",
  },
  ]
  
export default function Care(){
    const navigation = useNavigation();
    const [care, setCare] = useState(DATA);
    return (
        <ScrollView 
        style={styles.container}
        options = {{title:"Cuidado Cadastrados"}} >
        {care.map((care) =>{
           
            
        return(
           
          <ListItem
          key={care.id}
          bottomDivider>
    
          <ListItem.Chevron />
          
          <Avatar
          size={64}
          source={require('../../assets/5.png')}
          rounded
          />
       
        <TouchableOpacity  style={styles.box}>
    
          <ListItem.Content>
          <ListItem.Title>{care.name}</ListItem.Title>
          <ListItem.Subtitle>{care.desc}</ListItem.Subtitle>
    
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
      backgroundColor: '#b5eaff',
  
    },
    box: {
        flex:1,
      },
})