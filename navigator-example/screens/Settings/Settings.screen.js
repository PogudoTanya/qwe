import React, { useState } from 'react';
import { Text, View, Switch, Button } from 'react-native';

import styles from './Settings.styles';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>SETTINGS</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
