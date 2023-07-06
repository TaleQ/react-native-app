import { TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

export const FormInput = ({ inputName, control, keyboardType }) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={inputName}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          style={styles.input}
        />
      )}
      name={inputName}
    />
  );
};

const styles = StyleSheet.create({
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
});
