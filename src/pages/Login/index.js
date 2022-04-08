import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, SafeAreaView, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';
import api from '../../servers/api';
import usuarioService from '../../services/UsuarioService';

import { TextInput } from 'react-native-gesture-handler';
import baby from '../../assets/babyLogo.png';
import { Input } from 'react-native-elements';


export default function Login(){
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)
  function navigationRegister(){
    navigation.navigate('screenRegister');
}
function navigationHome(){
  navigation.navigate('screenHome');

}
const entrar = () => {

  let data = {
    username: email,
    password: password
  }
  
  usuarioService.login(data)
  .then((response) => {
    setLoading(false)
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  })
  .catch((error) => {
    setLoading(false)
    Alert.alert("Usuário não existe")
  })
}
  
  useEffect(()=> {
      Animated.parallel([
      Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true
    }),
    Animated.timing(opacity, {
      toValue: 1, 
      duration: 200,
      useNativeDriver: true
    })
  ])
    .start()
}, []);

  return (
    
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
         <Image source={baby}/>
      </View>


    <Animated.View style={[styles.container,{
      opacity: opacity,
      transform: [
      {translateY: offset.y}
      ]
    }]}>

      <Input style={styles.input} 
      leftIcon={{type:'font-awesome', name:'envelope'}}
      placeholder='Email' autoCorrect={false} 
      onChangeText={value => setEmail(value)}
      keyboardType="email-address" />
      
      <Input style={styles.input} 
      leftIcon={{type:'font-awesome', name:'lock'}}
      secureTextEntry={true}  
      placeholder='Senha' autoCorrect={false} 
      onChangeText={value => setPassword(value)} />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.btnSubmitText} onPress={() => navigationHome()}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegister} onPress={() => navigationRegister()}>
        <Text style={styles.btnRegisterText}>Cadastrar</Text>
      </TouchableOpacity>

    </Animated.View>
      
    </KeyboardAvoidingView>
      
      )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
 
  btnSubmit: {
    backgroundColor: '#b5eaff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnSubmitText: {
    color: 'black',
    fontSize: 18,
  },
  btnRegister: {
    backgroundColor: '#96ff9a',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 15
  },
  btnRegisterText: {
    color: 'black',
    fontSize: 18,
  }
})