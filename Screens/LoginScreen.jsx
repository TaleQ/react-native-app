import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  useWindowDimensions,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { FormInput } from './components/FormInput';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { width, height } = useWindowDimensions();
  const onSubmit = (data) => console.log(data);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bg.png')}
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.formContainer}>
              <FormInput inputName='Email' control={control} />
              {errors.email && <Text>This field is required.</Text>}
              <FormInput inputName='Password' control={control} />
              {errors.password && <Text>This field is required.</Text>}
              <Button
                title='Submit'
                onPress={handleSubmit(onSubmit)}
                style={styles.submitBtn}
              />
              <Text style={styles.text}>Немає аккаунту? Зареєструватися</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  formContainer: {
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  submitBtn: {
    marginTop: 27,
    backgroundColor: '#FF6C00',
    height: 51,
    borderRadius: 100,
    fontSize: 16,
    lineHeight: 1.8,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  text: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
  },
});
