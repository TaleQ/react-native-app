import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

export const AvatarContainer = () => {
  const [isImage, setIsImage] = useState(false);

  const addAvatar = () => {
    console.log('addAvatar');
  };
  const deleteAvatar = () => {
    console.log('deleteAvatar');
  };

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        {isImage ? (
          <Icon name='close' color='#FF6C00' size={20} onPress={addAvatar} />
        ) : (
          <Icon name='plus' color='#FF6C00' size={20} onPress={deleteAvatar} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    top: -50,
    left: '40%',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    borderColor: 'red',
    zIndex: 100,
  },
  iconContainer: {
    borderRadius: 16,
    border: '1px solid #FF6C00',
  },
});
