import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AvatarContainer } from './components/AvatarContainer';
import { FormInput } from './components/FormInput';
import { CustomBtn } from './components/CustomBtn';

export const RegistrationForm = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });
  const { width, height } = useWindowDimensions();
  const onSubmit = (data) => console.log(data);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.container, width: width, height: height }}>
        <Image
          source={require('../assets/images/bg.png')}
          style={{ ...styles.bgImage, width: width, height: height }}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View style={styles.formContainer}>
            <AvatarContainer />
            <Text style={styles.title}>Реєстрація</Text>
            <FormInput
              inputName='Login'
              control={control}
              onFocus={() => setIsShownKeyboard(true)}
            />
            {errors.login && <Text>This field is required.</Text>}
            <FormInput
              inputName='Email'
              control={control}
              onFocus={() => setIsShownKeyboard(true)}
            />
            {errors.email && <Text>This field is required.</Text>}
            <FormInput
              inputName='Password'
              control={control}
              onFocus={() => setIsShownKeyboard(true)}
            />
            {errors.password && <Text>This field is required.</Text>}
            <CustomBtn
              btnText='Зареєструватися'
              onPress={handleSubmit(onSubmit)}
            />
            <TouchableOpacity>
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    // flex: 1,
    // resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Roboto_500Medium',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
    marginBottom: 22,
  },
  formContainer: {
    marginBottom: 0,
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  text: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
  },
});
