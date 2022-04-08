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
    "name": "Fotos",
    "desc": "",
    "photo": "",
  },
  {
    id: 2,
    "name": "Como o joão esta?",
    "desc": "",
    "photo": "",
  },
  {
    id: 3,
    "name": "Quem já visitou o João?",
    "desc": "Pai\nMae\nAvó",
    "photo": "",
  },
  {
    id: 4,
    "name": "Medicamentos",
    "desc": "",
    "photo": "",
  },
  ]
  
export default function DiarioFamilia(){
    const navigation = useNavigation();
    const [diarioFamilia, setDiarioFamilia] = useState(DATA);
    return (
        <ScrollView 
        style={styles.container}
        options = {{title:"Diario da Familia"}} >
        {diarioFamilia.map((diarioFamilia) =>{
           
            
        return(
           
          <ListItem
          key={diarioFamilia.id}
          bottomDivider>
    
          <ListItem.Chevron />
          
          <Avatar
          size={64}
          source={require('../../assets/1.jpg')}
          rounded
          />
       
        <TouchableOpacity  style={styles.box}>
    
          <ListItem.Content>
          <ListItem.Title>{diarioFamilia.name}</ListItem.Title>
          <ListItem.Subtitle>{diarioFamilia.desc}</ListItem.Subtitle>
          
    
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