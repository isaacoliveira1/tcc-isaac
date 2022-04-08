import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Avatar} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import alert from '../../assets/alert.jpg';
import { faBold } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '@react-navigation/native';

export default function Manual(){
  const navigation = useNavigation();
  function navigationOrientation(){
    navigation.navigate('screenOrientation')
  }
  function navigationPrevention(){
    navigation.navigate('screenPrevention')
  }
  function navigationCare(){
    navigation.navigate('screenCare')
  }
  function navigationVoceSabia(){
    navigation.navigate('screenVoceSabia')
  }
  function navigationDiarioFamilia(){
    navigation.navigate('screenDiarioFamilia')
  }

    return(    

      <View style={styles.container}>
          <View style={styles.box}> 

          <TouchableOpacity style={styles.padding} onPress={() => navigationOrientation()}>
          <Avatar
          size={120}

          source={require('../../assets/2.jpg')}
          rounded
          />
          <Title style={{fontWeight: 'bold'}}>Orientações</Title>
          </TouchableOpacity>

          <TouchableOpacity style={styles.padding} onPress={() => navigationPrevention()}>
          <Avatar
          size={120}
         source={
          require('../../assets/4.jpg')}
           rounded
          />
          <Title style={{fontWeight: 'bold'}}>Prevenção</Title>
          </TouchableOpacity>
          </View>
          <View style={styles.container}>
          <View style={styles.box}> 
          <TouchableOpacity style={styles.paddingCenter} onPress={() => navigationCare()}>
          <Avatar
          size={120}
         source={
          require('../../assets/5.png')}
          rounded
          />
          <Title style={{fontWeight: 'bold'}}>Cuidados</Title>
          
          </TouchableOpacity>
          </View>
          <View style={styles.box}> 
            <TouchableOpacity style={styles.paddingFooter} onPress={() => navigationVoceSabia()}>
            <Avatar
          size={72}

            source={

              require('../../assets/3.png')}
            rounded
            />
            <Title style={{fontWeight: 'bold'}}>Voce sabia?</Title>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.paddingFooter} onPress={() => navigationDiarioFamilia()}>
            <Avatar
          size={72}

            source={
              require('../../assets/1.jpg')}
            rounded
            />
            <Title style={{fontWeight: 'bold'}}>Diário da Família</Title>
            </TouchableOpacity>
            </View>
      </View>
      </View>
     
        
    ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    flexWrap: "wrap",
    backgroundColor: '#e49cff',

  },
  box: {
    flexDirection: 'row',

  },
  padding: {
    paddingHorizontal: 45,
    marginTop: 10,
    alignSelf: "center",
    alignItems: 'center',
  },
  paddingCenter:{
    paddingHorizontal: '35%',
    marginTop: 10,
    alignSelf: "center",
    alignItems: 'center',
  },
  paddingFooter:{
    marginTop: 150,

    paddingHorizontal: '10%',
    alignSelf: "center",
    alignItems: 'center',
    },

  btnRegisterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
})