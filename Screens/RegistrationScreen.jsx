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
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { AvatarContainer } from './components/AvatarContainer';

export const RegistrationForm = () => {
  const formInitalState = {
    login: '',
    email: '',
    password: '',
  };
  const [formState, setFormState] = useState(formInitalState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { width, height } = useWindowDimensions();

  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFocus = (name) => {
    setFocusedInput(name);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    console.log(formState);
    setFormState(formInitalState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.container, width: width, height: height }}>
        <Image
          source={require('../assets/images/bg.png')}
          style={{ ...styles.bgImage, width: width, height: height }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={-180}
        >
          <View style={styles.formContainer}>
            <AvatarContainer />
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              name='login'
              placeholder='Login'
              onBlur={handleBlur}
              onChangeText={(value) => handleChange('login', value)}
              onFocus={() => handleFocus('login')}
              value={formState.login}
              style={[
                styles.input,
                focusedInput === 'login' && styles.focusedInput,
              ]}
            />
            <TextInput
              name='email'
              placeholder='Email'
              onBlur={handleBlur}
              onChangeText={(value) => handleChange('email', value)}
              onFocus={() => handleFocus('email')}
              keyboardType='email-address'
              value={formState.email}
              style={[
                styles.input,
                focusedInput === 'email' && styles.focusedInput,
              ]}
            />
            <View style={styles.passwordInputThumb}>
              <TextInput
                name='password'
                placeholder='Password'
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('password', value)}
                onFocus={() => handleFocus('password')}
                secureTextEntry={showPassword ? false : true}
                value={formState.password}
                style={[
                  styles.input,
                  focusedInput === 'password' && styles.focusedInput,
                ]}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={[styles.text, styles.showPasswordText]}>
                  {showPassword ? 'Приховати' : 'Показати'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.formBtn}>
              <Text style={styles.btnText}>Зареєструватися</Text>
            </TouchableOpacity>
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
  input: {
    marginBottom: 16,
    padding: 16,
    width: '100%',
    height: 50,
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  focusedInput: {
    borderColor: '#FF6C00',
  },
  passwordInputThumb: {
    position: 'relative',
  },
  showPasswordText: {
    position: 'absolute',
    bottom: 30,
    right: 16,
  },
  formBtn: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    height: 51,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Roboto_400Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
