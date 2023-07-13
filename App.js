import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from './Screens/Authorization/RegistrationScreen';
import { LoginScreen } from './Screens/Authorization/LoginScreen';
import { HomeScreen } from './Screens/HomeScreen/HomeScreen';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName='Login'>
          <MainStack.Screen
            name='Registration'
            component={RegistrationScreen}
          />
          <MainStack.Screen name='Login' component={LoginScreen} />
          <MainStack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
