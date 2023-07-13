import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import newimg from '../../assets/images/bg.png';

export const InitialPostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([
    { title: '1', id: '1', image: newimg, comments: '3', location: 'Location' },
    { title: '2', id: '2', image: newimg, comments: '3', location: 'Location' },
    { title: '3', id: '3', image: newimg, comments: '3', location: 'Location' },
  ]);
  const [avatarURL, setAvatarURL] = useState(null);
  const [userData, setUserData] = useState({
    login: 'Natali Romanova',
    email: 'email@example.com',
  });

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
    <>
      <View style={styles.container}>
        <View style={styles.userDataContainer}>
          <Image style={styles.userAvatar} source={{ uri: avatarURL }} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userData.login}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>
        </View>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    color: '#BDBDBD',
    justifyContent: 'space-between',
  },
  userDataContainer: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'gray',
  },
  userInfo: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 13,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.80)',
  },
  postImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  postTitle: {
    marginBottom: 8,
    marginTop: 8,
    color: '#212121',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
  postInfoContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  commentsDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsNum: {
    marginLeft: 6,
    color: '#BDBDBD',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  locationText: {
    marginLeft: 4,
    color: '#212121',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
