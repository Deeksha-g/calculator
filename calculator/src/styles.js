import {StyleSheet } from 'react-native';
import {Colors } from 'react-native/Libraries/NewAppScreen';
 
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.lighter,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     },  container: {
        backgroundColor: 'grey',
        flex:1
        
     },
    // container: {
    //   flex: 1,
    //   flexDirection: 'column',
    //   backgroundColor: 'black',
    // },
    // preview: {
    //   flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    // },
    // capture: {
    //   flex: 0,
    //   backgroundColor: '#fff',
    //   borderRadius: 5,
    //   padding: 15,
    //   paddingHorizontal: 20,
    //   alignSelf: 'center',
    //   margin: 20,
    // },
    
  });

  export default styles;