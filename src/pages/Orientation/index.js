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
    "name": "O que são doenças respiratórias?",
    "desc": "São doenças que atingem o trato respiratório",
    "photo": "https://telemedicinamorsch.com.br/wp-content/uploads/2021/04/Doencas-respiratorias.jpeg",
    },
    {
    id: 2,
    "name": "Covid-19",
    "photo": "https://media.istockphoto.com/vectors/coronavirus-logo-concept-covid19-vector-id1213504768?k=20&m=1213504768&s=170667a&w=0&h=F7M6qHzjbUFUozWougBprpoOJdM6VVhorfno9DDeDD8=",
    },
    {
    id: 3,
    "name": "H1N1",
    "photo": "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/dd3159033f23263ce529066b65ce3d1a.jpg"
    },
    {
    id: 4,
    "name": "Bebê Chiador",
    "photo": 'https://www.drajanainamelo.com.br/uploads/img/blog_posts/152/263d3db39aa5cb72b9556b2a7e7560a5.jpg',
    },
    {
    id: 5,
    "name": "Asma",
    "photo": "https://logos.textgiraffe.com/logos/logo-name/Asma-designstyle-pastel-m.png"
    },
    {
    id: 6,
    "name": "Broncopneumonia",
    "photo" : "https://image.shutterstock.com/image-vector/pneumonia-respiratory-inflamed-icon-vector-260nw-1922643224.jpg"
    },
    {
    id: 7,
    "name": "Displasia broncopulmonar",
    "photo": "https://i.pinimg.com/736x/ac/68/d6/ac68d6b43a47b1305dc6437d79887790.jpg"
    },
  ];

 
export default function Orientation(){
    const navigation = useNavigation();
    
    const [orientations, setOrientations] = useState(DATA);
    function navigationScreen(id){
        if(id == 1){
            navigation.navigate('screenDisease')
        } 
    }
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
      size={64}
      source={{
        uri: orientation.photo}}
      rounded
      />
   
    <TouchableOpacity style={styles.box}  onPress={() => navigationScreen(orientation.id)}>

      <ListItem.Content>
      <ListItem.Title>{orientation.name}</ListItem.Title>
      <ListItem.Subtitle>{orientation.desc}</ListItem.Subtitle>

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
    box: {
      flex: 1,
      justifyContent: 'center',
      },
})