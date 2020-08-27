import { StyleSheet } from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 18,
    backgroundColor: '#2f2f2f',
    borderRadius: 4,
    marginBottom: 15,
    height: 92,
    width: 360,
  },
  title: {
    fontSize: 14,
    marginTop: 12,
    marginLeft: 20,
    marginRight: 50,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 16,
    color: '#FFFFFF'
  },

  favorites: {
    marginTop: 14,
    marginRight: 17,
  },
  img: {
    width: 70,
    height: 80,
    marginLeft: 6,
    marginBottom: 6,
    marginTop: 6,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
  }
});