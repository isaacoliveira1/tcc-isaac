import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, SafeAreaView, TouchableOpacity,
     StyleSheet, Animated, Keyboard, Alert } from 'react-native';
import baby from '../../assets/babyLogo.png';
import { Button, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import { Button as PaperButton, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';
import Constants from "expo-constants";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import usuarioService from '../../services/UsuarioService';
import CustomDialog from '../../components/CustomDialog';
import { Picker } from '@react-native-picker/picker';

export default function Register(){
    const navigation = useNavigation();

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
    const [isLoading,setLoading] = useState(false);
    const [errorPhone, setErrorPhone] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    let telefoneField = null
    let dateBornField = null
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [titulo, setTitulo] = useState(null)
    const [mensagem, setMensagem] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorMiddlename, setErrorMiddlename] = useState(null)
    const [errorDateBorn, setErrorDateBorn] = useState(null)

    const initalState = {
      name: "",
      middlename: "",
      email: "",
      phone: "",
      date_born: "",
      password: "",
      parent: "",
      confirmPassword: "",
      role: "",
    };
    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
      setState({ ...state, [name]: value });

    };
  
    function navigationLogin(){
        navigation.navigate('screenLogin');
    }
    
    



    const showDialog = (titulo, mensagem, tipo) => {
      setVisibleDialog(true)
      setTitulo(titulo)
      setMensagem(mensagem)
      setTipo(tipo)
    }
  
    const hideDialog = (status) => {
      setVisibleDialog(status)
    }

  async function validateForm(){
    let error = false
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(state.email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (state.name == ''){
      setErrorName("Preencha seu nome corretamente")
      error = true
    }
    if (state.middlename == ''){
      setErrorMiddlename("Preencha seu sobrenome corretamente")
      error = true
    }
    if (state.phone == ''){
      setErrorPhone("Preencha seu telefone corretamente")
      error = true
    }
    if (state.date_born == ''){
      setErrorDateBorn("Preencha a data de nascimento corretamente")
      error = true
    }

    if (state.date_born > new Date()){
      setErrorDateBorn("Preencha a data de nascimento corretamente")
      error = true
    }
    if(state.password.length < 8 || state.confirmPassword.length < 8){
      setErrorPassword("Minimo 8 caracteres para a senha!")
          error = true
        if(state.password != state.confirmPassword){
          setErrorPassword("As senhas são diferentes")
          error = true
        }
      }
        
      return !error
      };
      const saveForm = () => {
        if (validateForm()){
          setLoading(true)
          
          let data = {
            name: state.name,
            middlename: state.middlename,
            email: state.email,
            phone: state.phone,
            parent: state.parent,
            password: state.password,
            confirmPassword: state.confirmPassword,
            role: "ROLE_USUARIO"
          }
          
          usuarioService.cadastrar(data)
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
    return(
        <KeyboardAvoidingView style={styles.background}>
        
        <Animated.ScrollView style={[styles.container,{
        opacity: opacity,
        transform: [
        {translateY: offset.y}
        ]
        }]}>
          <View style={styles.containerLogo}>
            <Image source={baby}/>
        </View>
          
            <Input style={styles.input} 
            leftIcon={{type:'font-awesome', name:'pencil'}}
            placeholder='(*) Nome' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "name")}
            value={state.name} 
            errorMessage={errorName}      
            />

            <Input style={styles.input}             
            leftIcon={{type:'font-awesome', name:'pencil'}}
            placeholder='(*) Sobrenome' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "middlename")}
            value={state.middlename} 
            errorMessage={errorMiddlename}      
            
            />
            
            <Input style={styles.input} 
            leftIcon={{type:'font-awesome', name:'envelope'}} 
            keyboardType="email-address" placeholder='(*) Email' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "email")}
            value={state.email}
            errorMessage={errorEmail}      
            />
            <View style={styles.containerMask}>
            <TextInputMask
            placeholder="(*) Telefone"
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={state.phone}
            onChangeText={value => {
              handleChangeText(value, "phone"),
              setErrorPhone(null)
              }
            }
            keyboardType="phone-pad"  
            returnKeyType="done"    
            style={styles.maskedInput}
            ref={(ref) => telefoneField = ref}

            />
            </View>
            <Text style={styles.errorMessage}>{errorPhone}</Text>

            <View style={styles.containerMask}>

            <TextInputMask
              placeholder="(*) Data Nascimento"
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
            ref={(ref) => dateBornField = ref}

            />
            </View>
            <Text style={styles.errorMessage}>{errorDateBorn}</Text>

            <Picker style={styles.containerMask}
              selectedValue={state.genre}
              onValueChange={(itemValue, itemIndex) => handleChangeText(itemValue, 'genre')}
            >

              <Picker.Item label="(*) Mãe" value="0" />
              <Picker.Item label="(*) Pai" value="1" />
              <Picker.Item label="(*) Avó/avô" value="2" />
              <Picker.Item label="(*) Irmão/Irmã" value="3" />
              <Picker.Item label="(*)  Outro"/>


            </Picker>
            <Input style={styles.input} secureTextEntry={true} 
            leftIcon={{type:'font-awesome', name:'lock'}}
            placeholder='(*) Senha' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "password")}
            value={state.password} 
            errorMessage={errorPassword}
            />
            <Input minLength={8} style={styles.input} 
            leftIcon={{type:'font-awesome', name:'lock'}} 
            secureTextEntry={true} placeholder='(*) Confirmar Senha' autoCorrect={false} 
            onChangeText={(value) => handleChangeText(value, "confirmPassword")}
            value={state.confirmPassword} 
            errorMessage={errorPassword}
            />
          { isLoading && 
                <Text>Carregando...</Text>
              }

              { !isLoading && 
                <Button
                  title="Salvar"
                  buttonStyle={styles.btnRegister}
                  onPress={() => saveForm()}
                />
              }

              { visibleDialog && 
                <CustomDialog titulo={titulo} mensagem={mensagem} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomDialog>
              }
        </Animated.ScrollView>
        
        </KeyboardAvoidingView>

    )
}


const styles = StyleSheet.create({
    background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: 'white'
    },

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
      containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
      backgroundColor: '#96ff9a',     
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
    }
  })