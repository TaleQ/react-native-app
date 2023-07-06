import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CustomBtn = ({ btnText, onPress }) => {
  <TouchableOpacity onPress={onPress} styles={styles.customBtn}>
    <Text>{btnText}</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  customBtn: {
    marginTop: 27,
    backgroundColor: '#FF6C00',
    height: 51,
    borderRadius: 100,
    fontSize: 16,
    lineHeight: 1.8,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
