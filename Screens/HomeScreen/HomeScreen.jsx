import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { PostsScreen } from './nestedScreens/PostsScreen';
import { CreatePostsScreen } from './nestedScreens/CreatePostsScreen';
import { ProfileScreen } from './nestedScreens/ProfileScreen';
import { Feather } from '@expo/vector-icons';

export const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderColor: '#E5E5E5',
        },
        tabBarStyle: {
          height: 83,
          paddingTop: 10,
          paddingBottom: 34,
          paddingHorizontal: 80,
          display: 'flex',
          borderTopWidth: 1,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='PostsScreen'
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name='grid' size={24} color='#212121' />
          ),
        }}
      />
      <Tabs.Screen
        name='CreatePostsScreen'
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerText}>Створити публікацію</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerArrow}
              onPress={() => navigation.goBack()}
            >
              <Feather name='arrow-left' size={24} color='#212121' />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: '#FF6C00',
                borderRadius: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name='plus' size={24} color='#ffffff' />
            </View>
          ),
        })}
      />
      <Tabs.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name='user' size={24} color='#212121' />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 10,
    fontFamily: 'Roboto_500Medium',
    fontSize: 17,
  },
  headerArrow: {
    marginLeft: 16,
    marginBottom: 10,
  },
});
