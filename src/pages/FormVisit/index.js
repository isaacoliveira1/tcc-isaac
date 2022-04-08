import React,  {useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Animated, View } from 'react-native';
import { Button } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function FormVisit() {
    const navigation = useNavigation();

    const [state, setState] = useState();
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
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

  
  function navigationTip(){
    navigation.navigate('screenTips')
  }
    return (

        <Animated.ScrollView style={[styles.container,{
            opacity: opacity,
            transform: [
            {translateY: offset.y}
            ]
            }]}>
            <Title style={{ justifyContent: 'center', paddingStart: 20}}>Apresentou febre nas últimas 24 horas?</Title>
            <Picker style={styles.containerMask}
            >
                <Picker.Item label="Não" value="0" />
                <Picker.Item label="Sim" value="1" />
            </Picker>
            <Title style={{ justifyContent: 'center', paddingStart: 20}}>Teve gripe nos últimos dias?</Title>
            <Picker style={styles.containerMask}
            >
                <Picker.Item label="Não" value="0" />
                <Picker.Item label="Sim" value="1" />
            </Picker>
            <Title style={{ justifyContent: 'center', paddingStart: 20}}>Teve tosse ou coriza nos últimos dias?
</Title>
            <Picker style={styles.containerMask}
            >
                <Picker.Item label="Não" value="0" />
                <Picker.Item label="Sim" value="1" />
            </Picker>
            <Title style={{ justifyContent: 'center', paddingStart: 20}}>Teve contato com alguém com sintomas de gripe?
</Title>
            <Picker style={styles.containerMask}
            >
                <Picker.Item label="Não" value="0" />
                <Picker.Item label="Sim" value="1" />
            </Picker>
            <Title style={{ justifyContent: 'center', paddingStart: 20}}>Teve contato com alguém com sintomas ou com COVID-19 nos últimos dias?

</Title>
            <Picker style={styles.containerMask}
            >
                <Picker.Item label="Não" value="0" />
                <Picker.Item label="Sim" value="1" />
            </Picker>

            <View style={styles.button}>
            <Button title="Salvar" onPress={() => navigationTip()} />
          </View>
        </Animated.ScrollView>
    );

}
const styles = StyleSheet.create({
    button: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingStart: 20,
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