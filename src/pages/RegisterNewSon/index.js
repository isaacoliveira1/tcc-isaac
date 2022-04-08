import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View, KeyboardAvoidingView, Animated, Alert} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from "expo-constants";
import { TextInputMask } from 'react-native-masked-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyleSheet } from 'react-native';
import CustomDialog from '../../components/CustomDialog';
import usuarioService from '../../services/UsuarioService';
import { Picker } from '@react-native-picker/picker';


export default function RegisterNewSon({}){

    const initalState = {
        name: "",
        middlename: "",
        weight: "",
        date_born: "",
        genre: "",
        ageGestational: "",
        childbirth_type: "",
        internadoUTI: true,
        image_baby: "",
      };

      const [state, setState] = useState(initalState);
      const [visibleDialog, setVisibleDialog] = useState(false);
      const [titulo, setTitulo] = useState(null)
      const [mensagem, setMensagem] = useState(null)
      const [tipo, setTipo] = useState(null)
      const [errorName, setErrorName] = useState(null)
      const [errorWeight, setErrorWeight] = useState(null)
      const [errorDateBorn, setErrorDateBorn] = useState(null)
      const [errorChildBirth, setErrorChildBirth] = useState(null)
      const [isLoading,setLoading] = useState(false);
      const [errorMiddlename, setErrorMiddlename] = useState(null)
      const [color, setColor] = useState(null);
      const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
      const [opacity] = useState(new Animated.Value(0));
      const [isUTI, setUTI] = useState(false);
      const navigation = useNavigation();

      async function validateForm(){
        let error = false
        
        if (state.name == ''){
          setErrorName("Preencha seu nome corretamente")
          error = true
        }
        
        if (state.middlename == ''){
          setErrorMiddlename("Preencha seu sobrenome corretamente")
          error = true
        }
        if (state.weight == ''){
          setErrorWeight("Preencha o peso corretamente")
          error = true
        }
        if (state.childbirth_type == ''){
            setErrorChildBirth("Preencha o tipo de parto corretamente")
            error = true
          }
          if (state.date_born == ''){
            setErrorDateBorn("Preencha a data de nascimento corretamente")
            error = true
          }
            
        return !error
        };

        const saveNewUser = () => {
          navigation.navigate('screenForm');
            if (validateForm()){
              setLoading(true)
              
              let data = {
                name: state.name,
                middlename: state.middlename,
                date_born: state.date_born,
                weight: state.weight,
                childbirth_type: state.childbirth_type
              }
              
              usuarioService.cadastrarFilho(data)
              .then((response) => {
                setLoading(false)
                const titulo = (response.data.status) ? "Sucesso" : "Erro"
                showDialog(titulo, response.data.mensagem, "SUCESSO")
                //Alert.alert(titulo, response.data.mensagem)          
              })
              .catch((error) => {
                setLoading(false)
                showDialog("Erro","Houve um erro inesperado", "ERRO")
                //Alert.alert("Erro", "Houve um erro inesperado")
              })
            }
        }
    const handleChangeText = (value, name) => {
      if (value == 0 && name == 'genre'){
        setColor("lightcyan");
      setState({ ...state, [name]: value });

      } else if (value == 1 && name == 'genre'){
        setColor("#ffd9f2");
        setState({ ...state, [name]: value });
      }
      setState({ ...state, [name]: value });

    };
    
    const showDialog = (titulo, mensagem, tipo) => {
        setVisibleDialog(true)
        setTitulo(titulo)
        setMensagem(mensagem)
        setTipo(tipo)
      }
    
      const hideDialog = (status) => {
        setVisibleDialog(status)
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
        <KeyboardAvoidingView style={{
          backgroundColor: color, flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight + 20}}>
        
        <Animated.ScrollView style={[styles.container,{
        opacity: opacity,
        transform: [
        {translateY: offset.y}
        ]
        }]}>
            
            <Icon name="venus-mars" size={25} />

<Picker style={styles.containerMask}
    selectedValue={state.genre}
    onValueChange={(itemValue, itemIndex) => handleChangeText(itemValue, 'genre')}
  >

    <Picker.Item label="Masculino" value="0" />
    <Picker.Item label="Feminino" value="1" />
  </Picker>

            <Input style={styles.input} 
            leftIcon={{type:'font-awesome', name:'pencil'}}
            placeholder='Nome (*)' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "name")}
            value={state.name} 
            errorMessage={errorName}   />
    
          <Input style={styles.input} 
            leftIcon={{type:'font-awesome', name:'pencil'}}
            placeholder='Sobrenome (*)' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "middlename")}
            value={state.middlename} 
            errorMessage={errorMiddlename}   />
    
           {/* Input */}
            <Input
            style={styles.input}
              placeholder="Peso (*)"
              leftIcon={{type:'font-awesome', name:'address-card'}}
              keyboardType="number-pad"
              onChangeText={(value) => handleChangeText(value, "weight")}
              value={state.weight}
            errorMessage={errorWeight}      

            />
    
           {/* Input */}
           <View style={styles.containerMask}>

            <TextInputMask  
              placeholder="Data Nascimento (*)"
              type={'datetime'}
              options={{
                  format: 'dd/mm/YYYY'
              }}
              leftIcon={{type:'font-awesome', name:'calendar'}}
              onChangeText={(value) => {handleChangeText(value, "date_born")
              setErrorDateBorn(null)
            }}
                returnKeyType="done"
              value={state.date_born}
              style={styles.maskedInput}
            />
            </View>
            <Text style={styles.errorMessage}>{errorDateBorn}</Text>

    
           {/* Input */}
           <Input
            style={styles.input}
              placeholder="Tipo de Parto (*)"
              leftIcon={{type:'font-awesome', name:'book'}}

              onChangeText={(value) => 
                handleChangeText(value, "childbirth_type")}
              value={state.childbirth_type}
            errorMessage={errorChildBirth}      

            />
        
           {/* Input */}
            <Input
            style={styles.input}
              placeholder="Foto do bebê"
              leftIcon={{type:'font-awesome', name:'camera'}}

              onChangeText={(value) => handleChangeText(value, "image_baby")}
              value={state.image_baby}
            />
          <View style={styles.button}>
            <Button title="Salvar" onPress={() => saveNewUser()} />
          </View>
        </Animated.ScrollView>
        </KeyboardAvoidingView>
      );
    };
    const styles = StyleSheet.create({
        maskedInput: {
          flexGrow: 1,
          height: 40,
          fontSize: 18,
          borderBottomColor: "#999",
          backgroundColor: "white",
          padding: 10,
          borderRadius: 7,
          borderBottomWidth: 1,
          borderStyle: "solid",
          alignSelf: "flex-start"
        },
        scrollView: {
            backgroundColor: 'pink',
            marginHorizontal: 20,
          },
        container: {
          flex: 1,
        
          width: '90%',
        },
        input: {
          backgroundColor: "white",
          width: "90%",
          marginBottom: 15,
          color: "#222",
          fontSize: 17,
          borderRadius: 7,
          padding: 10
        },
        btnSubmit: {
          backgroundColor: '#35AAFF',
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
        },
        btnSubmitText: {
          color: 'black',
          fontSize: 18,
          alignItems: 'center',
          justifyContent: 'center',
        },
        btnRegister: {
          backgroundColor: '#58fc49',     
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          marginTop: 15
        },
        containerMask: {
          flexDirection: "row",
          marginBottom: 5,
          marginLeft: 10,
          marginRight: 10
        },
        btnRegisterText: {
          color: 'black',
          fontSize: 18,
        },
        errorMessage: {
          alignSelf: "flex-start",
          marginLeft: 15,
          color: "#f00",
          fontSize: 12
        },
        checkbox: {
          alignSelf: "center",
        },
      })