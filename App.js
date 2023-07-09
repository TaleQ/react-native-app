import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

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
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </>
  );
}
