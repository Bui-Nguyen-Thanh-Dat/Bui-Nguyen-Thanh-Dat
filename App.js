import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from 'react-native';

import HomeScreen from './screen/HomeScreen';

const Stack=createNativeStackNavigator();

const App = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' options={false}  component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;
