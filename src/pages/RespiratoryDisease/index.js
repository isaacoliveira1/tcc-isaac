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
    "id": 1,
    "name": "Pneumonia",
    "photo": "https://www.mova.pt/wp-content/uploads/2021/02/lungs-2803208_1280-400x400.png"
    },
    {
    "id": 2,
    "name": "Infecção pelo vírus sincicial respiratório",
    "photo": "https://blog.bunzlsaude.com.br/wp-content/uploads/2017/04/VSR1.adapt_.1190.1.sqrcrop.jpg",
    },
    {
    "id": 3,
    "name": "Síndrome do desconforto respiratória",
    "photo": "https://www.mova.pt/wp-content/uploads/2021/02/lungs-2803208_1280-400x400.png"
    },
    {
    "id": 4,
    "name": "Taquipneia transitória do recém-nascido",
    "photo": "https://telemedicinamorsch.com.br/wp-content/uploads/2021/04/Doencas-respiratorias.jpeg",

    },
    {
    "id": 5,
    "name": "Hipertensão pulmonar persistente",
    "photo": "https://diariodamanha.com/wp-content/uploads/2019/05/Saude-3.jpg",
    },
];

    export default function RespiratoryDisease(){
        const navigation = useNavigation();
    
        const [orientations, setOrientations] = useState(DATA);
        return (
            <ScrollView 
             style={styles.container}

            options = {{title:"Orientações Cadastradas"}} >
            
            {orientations.map((orientation) =>{
            return(
                
              <ListItem
              key={orientation.id}
              bottomDivider>
        
              <ListItem.Chevron />
        
              <Avatar
              source={{
                uri: orientation.photo}}
              rounded
              />
            <TouchableOpacity >
        
              <ListItem.Content>
              <ListItem.Title style={styles.btnRegisterText}>{orientation.name}</ListItem.Title>
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
      backgroundColor: '#f9ffad',
  
    },
    
   
})