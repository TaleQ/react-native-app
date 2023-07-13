import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { InitialPostsScreen } from '../../PostScreens/InitialPostsScreen';
import { CommentsScreen } from '../../PostScreens/nestedScreens/CommentsScreen';
import { MapScreen } from '../../PostScreens/nestedScreens/MapScreen';

export const PostsScreen = ({ navigation }) => {
  const NestedScreen = createStackNavigator();

  return (
    <NestedScreen.Navigator
      initialRouteName='InitialPostsScreen'
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderColor: '#E5E5E5',
        },
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name='InitialPostsScreen'
        component={InitialPostsScreen}
        options={{
          headerTitle: () => <Text style={styles.headerText}>Публікації</Text>,
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name='log-out'
                size={24}
                color='#BDBDBD'
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name='Comments'
        component={CommentsScreen}
        options={{
          headerTitle: () => <Text style={styles.headerText}>Коментарі</Text>,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerArrow}
              onPress={() => navigation.goBack()}
            >
              <Feather name='arrow-left' size={24} color='#212121' />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name='Map'
        component={MapScreen}
        options={{
          headerTitle: () => <Text style={styles.headerText}>Карта</Text>,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerArrow}
              onPress={() => navigation.goBack()}
            >
              <Feather name='arrow-left' size={24} color='#212121' />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 10,
    fontFamily: 'Roboto_500Medium',
    fontSize: 17,
  },
});
