import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './Favourites.styles';

const someItems = ['Startup Summer', 'Memes'];

function HomeScreen() {


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Favourites Screen</Text>
        <Text style={styles.subtitle}>We all love</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
