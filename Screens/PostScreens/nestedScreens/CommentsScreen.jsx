import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import newimg from '../../../assets/images/bg.png';
import { AntDesign } from '@expo/vector-icons';

export const CommentsScreen = () => {
  const comments = [{ content: 'Hello' }, { content: 'Very nice' }];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={newimg} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <SafeAreaView style={{ height: 300, marginTop: 32 }}>
            <FlatList
              data={comments}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', gap: 16, marginTop: 16 }}>
                  <Image source={newimg} style={styles.loadPhoto} />
                  <View style={styles.commentBox}>
                    <Text
                      style={styles.commentText}
                      // onPress={() => setIsShowKeyboard(true)}
                    >
                      {item.content}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#BDBDBD',
                        marginLeft: 'auto',
                        marginRight: 60,
                        paddingBottom: 20,
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>

          <TouchableOpacity
            style={styles.button}
            // style={{ ...styles.button, bottom: isShowKeyboard ? 50 : 10 }}
          >
            <TextInput
              // onFocus={() => setIsShowKeyboard(true)}
              // onBlur={() => setIsShowKeyboard(false)}
              // value={comment}
              // onChangeText={setComment}
              placeholder='Коментувати...'
              required
              style={{ width: '100%' }}
            />
            <TouchableOpacity style={styles.buttonIconBox}>
              <AntDesign name='arrowup' size={24} color='#FFFFFF' />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  card: {
    height: 250,
  },
  loadPhoto: {
    width: 28,
    height: 28,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginTop: 32,
  },
  button: {
    position: 'absolute',
    width: '100%',
    padding: 16,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    bottom: 50,
  },
  buttonIconBox: {
    position: 'absolute',
    bottom: '50%',
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    width: 34,
    height: 34,
    borderRadius: 50,
  },
  commentBox: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    paddingTop: 16,
    marginBottom: 10,
  },
  commentText: {
    width: '100%',
    color: '#212121',
    fontSize: 13,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
