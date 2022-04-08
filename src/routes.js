import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lottie from 'lottie-react-native';


const AppStack = createStackNavigator();

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import RegisterNewSon from './pages/RegisterNewSon';
import RegistredSon from './pages/RegistredSon';
import Manual from './pages/Manual';
import Perfil from './pages/Perfil';
import FormVisit from './pages/FormVisit';
import Orientation from './pages/Orientation';
import RespiratoryDisease from './pages/RespiratoryDisease';
import Prevention from './pages/Prevention';
import Care from './pages/Care';
import VoceSabia from './pages/VoceSabia';
import DiarioFamilia from './pages/DiarioFamilia';



export default function Routes(){
    return(
 
        <NavigationContainer>
          
            <AppStack.Navigator screenOptions={{headerShown: true}}>
             <AppStack.Screen options = {{title: ""}} name="screenLogin" component ={Login}/>
             <AppStack.Screen options = {{title: "Cadastro"}} name="screenRegister" component ={Register}/>
             <AppStack.Screen options = {{title: ""}} name="screenHome" component ={Home}/>
             <AppStack.Screen options = {{title: ""}} name="screenRegisterNewSon" component ={RegisterNewSon}/>
             <AppStack.Screen options = {{title: ""}} name="screenRegistredSon" component ={RegistredSon}/>
             <AppStack.Screen options = {{title: ""}} name="screenTips" component ={Manual}/>
             <AppStack.Screen options = {{title: ""}} name="screenPerfil" component ={Perfil}/>
             <AppStack.Screen options = {{title: ""}} name="screenForm" component ={FormVisit}/>
             <AppStack.Screen options = {{title: ""}} name="screenOrientation" component ={Orientation}/>
             <AppStack.Screen options = {{title: ""}} name="screenDisease" component ={RespiratoryDisease}/>
             <AppStack.Screen options = {{title: ""}} name="screenPrevention" component ={Prevention}/>
             <AppStack.Screen options = {{title: ""}} name="screenCare" component ={Care}/>
             <AppStack.Screen options = {{title: ""}} name="screenVoceSabia" component ={VoceSabia}/>
             <AppStack.Screen options = {{title: ""}} name="screenDiarioFamilia" component ={DiarioFamilia}/>


     
            </AppStack.Navigator>

        </NavigationContainer>
    );
}