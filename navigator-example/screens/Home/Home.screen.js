import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Characters from '../Characters/Characters'

import fetchMarvel from '../../fetchMarvel';



function HomeScreen() {
  const [pageContent, setPageContent] = React.useState(null);

  React.useEffect(() => {
    const func = async () => {
      const data = await fetchMarvel('/characters')
      setPageContent(data)
    };
    func();
  }, []);

  if (!pageContent) return <Text>Loading</Text>

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {pageContent.data.data.results.map((item) =>
            <Characters post={item} />)}
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
});

export default HomeScreen;
