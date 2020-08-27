import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import fetchMarvel from '../../fetchMarvel';
import styles from './Details.styles';
import Icon from '../../assets/icon.png'

function DetailsScreen() {
  const { params } = useRoute();
  const { nameCharacter, description, extension, path, id } = params;
  const [pageContent, setPageContent] = React.useState(null);

  React.useEffect(() => {
    const func = async () => {
      const data = await fetchMarvel(`/characters/${id}/comics`)
      setPageContent(data)
    };
    func();
  }, []);

  if (!pageContent) return <Text>Loading</Text>
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{nameCharacter}</Text>
          <Image
            style={styles.img}
            source={{
              uri: path + '.' + extension,
            }} />
          <Text style={styles.title}>{description}</Text>
          <Text>Comics</Text>
          {pageContent.data.data.results.map(item => (

            <View >
              <Text>{item.title}</Text>
              <Text>{item.path}</Text>
              <Image
                style={styles.img}
                source={{
                  uri: item.thumbnail.path + '.' + item.thumbnail.extension,
                }} />

            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;
