import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RegistredSon from '../RegistredSon'
import Manual from '../Manual'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';
import { color } from 'react-native-elements/dist/helpers';
import baby from '../../assets/babyLogo.png';


export default function Home() {
const navigation = useNavigation();

  function navigationSon(){
    navigation.navigate('screenRegistredSon')
  }
  
  function navigationPerfil(){
    navigation.navigate('screenPerfil')
  }

    return (
      <View style={styles.container}>
          <View style={styles.box}> 
              <TouchableOpacity  style={styles.padding} onPress={() => navigationSon()}>
                <Avatar
                source={{
                  uri: 'https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg'}}
                rounded
                />
                <Title style={{fontWeight: 'bold'}}> Filho(a)</Title>
            </TouchableOpacity>

          <TouchableOpacity style={styles.padding} onPress={() => navigationPerfil()}>
          <Avatar
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png'}}
          rounded
          />
          <Title style={{fontWeight: 'bold'}}> Minha conta </Title>
          </TouchableOpacity> 
          </View>
      
       
          <View style={styles.containerLogo}>
         <Image source={baby}/>
      </View>
      
      </View>
      
      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    flexWrap: "wrap",
    backgroundColor: 'white',
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#eab5ff',
  },
  padding: {
    paddingStart: '15%',
    paddingEnd: '15%',
    alignSelf: "flex-start",
    alignItems: 'center',
    marginHorizontal: "1%",
    marginTop: 16,
    marginBottom: 6,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingEnd: '10%',

  },
})