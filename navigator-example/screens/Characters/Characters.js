import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './Characters.styles';
import { useNavigation } from '@react-navigation/native';


import * as applicationActions from '';
import * as applicationSelectors from 'resources/application/application.selectors';


export default function Characters(props) {
  
  const dispatch = useDispatch();
  const apps = useSelector(applicationSelectors.getApplications);

  const navigation = useNavigation();
  const [color, setColor] = React.useState("#bbbbbb")
  const [name, setName] = React.useState("hearto")

  let nameCharacter = props.post.name
  let description = props.post.description
  let id = props.post.id
  let path = props.post.thumbnail.path
  let extension = props.post.thumbnail.extension

  useEffect(() => {
    async function init() {
      try {
        await dispatch(applicationActions.getApps());
      } catch (error) {
        // TODO
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Image
          style={styles.img}
          source={{
            uri: props.post.thumbnail.path + '.' + props.post.thumbnail.extension,
          }} />
        <TouchableOpacity
          key={props.post.name}
          onPress={() => navigation.navigate('Details', { nameCharacter, path, description, id, extension })}>
          <Text style={styles.title}> {props.post.name}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.favorites}>

        <TouchableOpacity
          onPress={() => {
            {
              color === "#bbbbbb" ?
                <AntDesign name={setName('heart')} size={24} color={setColor('red')} /> :
                <AntDesign name={setName('hearto')} size={24} color={setColor('#bbbbbb')} />
            }
          }}>
          <AntDesign name={name} size={24} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
