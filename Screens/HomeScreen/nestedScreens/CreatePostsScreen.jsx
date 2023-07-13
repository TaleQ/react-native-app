import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [location, setLocation] = useState('');

  const addPhoto = () => {};
  const deletePhoto = () => {};
  const deletePost = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <View style={styles.photoContainer}>
            <View style={styles.photo}>
              {photo && (
                <Image
                  source={{ uri: photo }}
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                />
              )}
            </View>

            {!photo && (
              <TouchableOpacity
                style={{
                  ...styles.iconContainer,
                  backgroundColor: photo
                    ? 'rgba(255, 255, 255, 0.30)'
                    : '#FFFFFF',
                }}
              >
                <MaterialIcons
                  name='camera-alt'
                  size={24}
                  color={photo ? '#FFFFFF' : '#BDBDBD'}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={!photo ? addPhoto : deletePhoto}>
            <Text style={{ color: '#BDBDBD', marginBottom: 20 }}>
              {photo ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>
          </TouchableOpacity>
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                placeholder='Назва...'
                required
                value={photoName}
                onChangeText={(value) => setPhotoName(value)}
                style={{ width: '100%', color: '#BDBDBD' }}
              />
            </View>
            <View style={styles.input}>
              <Feather
                name='map-pin'
                size={24}
                color='#BDBDBD'
                style={{ paddingRight: 4 }}
              />
              <TextInput
                value={location}
                placeholder='Місцевість...'
                required
                onChangeText={(value) => setPhotoName(value)}
                style={{ width: '100%' }}
              />
            </View>
            <TouchableOpacity
              style={{
                ...styles.publishBtn,
                backgroundColor:
                  photo && photoName && location ? '#FF6C00' : '#F6F6F6',
                color: photo && photoName && location ? '#FFF' : '#BDBDBD',
              }}
              disabled={photo && photoName && location ? false : true}
            >
              <Text style={styles.btnText}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.deleteIcon} onPress={deletePost}>
            <Feather name='trash-2' size={24} color='#BDBDBD' />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    color: '#BDBDBD',
    justifyContent: 'space-between',
  },
  photoContainer: {
    height: 240,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
  photo: {
    position: 'absolute',
    top: 3,
    left: 3,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'transparent',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    color: '#BDBDBD',
    flexDirection: 'row',
  },
  publishBtn: {
    marginTop: 23,
    marginBottom: 40,
    padding: 16,
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {
    color: '#BDBDBD',
  },
  deleteIcon: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    marginBottom: 34,
  },
});
