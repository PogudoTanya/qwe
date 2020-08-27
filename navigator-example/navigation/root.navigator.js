import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeNavigator from './home.navigator';
import FavouritesNavigator from './favourites.navigator';

import SettingsScreen from '~/screens/Settings';

const Tab = createBottomTabNavigator();


function RootNavigator() {
  // const [color, getColor] = React.useState("#bbbbbb")
  // const [name, getName] = React.useState("hearto")
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen style={styles.container}
        name="My Marvel"
        component={HomeNavigator }
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color}  />,
        }}
      > 
      {/* <HomeNavigator color={color} name={name} getName={getName} getColor={getColor}/>  </Tab.Screen> */}
       </Tab.Screen>
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="hearto" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
    color: 'red'
  },
});

export default RootNavigator;
