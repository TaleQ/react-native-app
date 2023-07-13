import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export const AvatarContainer = () => {
  const [isImage, setIsImage] = useState(false);

  const addAvatar = () => {
    console.log('addAvatar');
    setIsImage(true);
  };
  const deleteAvatar = () => {
    console.log('deleteAvatar');
    setIsImage(false);
  };

  return (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={isImage ? deleteAvatar : addAvatar}
    >
      <View style={styles.iconContainer}>
        {isImage ? (
          <Icon name='close' color='#FF6C00' size={20} />
        ) : (
          <Icon name='plus' color='#FF6C00' size={20} />
        )}
      </View>
    </TouchableOpacity>
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
    position: 'absolute',
    bottom: 20,
    right: -10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FF6C00',
  },
});
