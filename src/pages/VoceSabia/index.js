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
    "name": "Direitos dos acompanhantes",
    "desc": "",
    "photo": "",
  },
  {
    id: 2,
    "name": "Tabaco",
    "desc": "",
    "photo": "",
  },
  {
    id: 3,
    "name": "Visita dos avós",
    "desc": "",
    "photo": "",
  },
  {
    id: 4,
    "name": "Lavagem das mãos",
    "desc": "",
    "photo": "",
  },
  {
    id: 5,
    "name": "Amor/carinho",
    "desc": "",
    "photo": "",
  },
  {
    id: 6,
    "name": "Cuidado",
    "desc": "",
    "photo": "",
  },
  {
    id: 7,
    "name": "Aleitamento materno",
    "desc": "",
    "photo": "",
  },
  ]
  
  
export default function VoceSabia(){
    const navigation = useNavigation();
    const [voceSabia, setVoceSabia] = useState(DATA);
    return (
        <ScrollView 
        style={styles.container}
        options = {{title:"Voce Sabia?"}} >
        {voceSabia.map((voceSabia) =>{
           
            
        return(
           
          <ListItem
          key={voceSabia.id}
          bottomDivider>
    
          <ListItem.Chevron />
          
          <Avatar
          size={64}
          source={require('../../assets/3.png')}
          rounded
          />
       
        <TouchableOpacity  style={styles.box}>
    
          <ListItem.Content>
          <ListItem.Title>{voceSabia.name}</ListItem.Title>
          <ListItem.Subtitle>{voceSabia.desc}</ListItem.Subtitle>
    
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
      backgroundColor: '#e49cff',
  
    },
    box: {
        flex:1,
      },
})