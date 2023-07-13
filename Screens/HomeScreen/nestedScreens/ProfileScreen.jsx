import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AvatarContainer } from '../../Authorization/components/AvatarContainer';
import { Feather } from '@expo/vector-icons';
import newimg from '../../../assets/images/bg.png';

export const ProfileScreen = () => {
  const { width, height } = useWindowDimensions();
  const userName = 'Natali Romanova';
  const [posts, setPosts] = useState([
    { title: '1', id: '1', image: newimg, comments: '3', location: 'Location' },
    { title: '2', id: '2', image: newimg, comments: '3', location: 'Location' },
    { title: '3', id: '3', image: newimg, comments: '3', location: 'Location' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.postImage} source={item.image} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.postInfoContainer}>
        <TouchableOpacity
          style={styles.commentsDataContainer}
          onPress={() => navigation.navigate('Comments')}
        >
          <Feather name='message-circle' size={24} color='#BDBDBD' />
          <Text style={styles.commentsNum}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationDataContainer}
          onPress={() => navigation.navigate('Map')}
        >
          <Feather name='map-pin' size={24} color='#BDBDBD' />
          <Text style={styles.locationText}>{item.location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ ...styles.container, width: width, height: height }}>
      <Image
        source={require('../../../assets/images/bg.png')}
        style={{ ...styles.bgImage, width: width, height: height }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-180}
      >
        <View style={styles.profileContainer}>
          <AvatarContainer />
          <Text style={styles.title}>{userName}</Text>
          {/* <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          /> */}
        </View>
      </KeyboardAvoidingView>
    </View>
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
  profileContainer: {
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
