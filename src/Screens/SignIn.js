import React from 'react';
import {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {color} from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CommonButton = ({screenName, buttonName}) => {
    return (
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate(screenName)}>
        <Text style={styles.fontStyle}>{buttonName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CommonButton screenName={'DemoAPI'} buttonName={'POSTS'} />
          <CommonButton screenName={'Comments'} buttonName={'COMMENTS'} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CommonButton screenName={'Albums'} buttonName={'ALBUMS'} />
          <CommonButton screenName={'Photos'} buttonName={'PHOTOS'} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CommonButton screenName={'Todos'} buttonName={'TODOS'} />
          <CommonButton screenName={'Users'} buttonName={'USERS'} />

          {/* <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Todos')}>
            <Text style={styles.fontStyle}>TODOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginN}
            onPress={() => navigation.navigate('Users')}>
            <Text style={styles.fontStylewhite}>USERS</Text>
          </TouchableOpacity> */}
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CommonButton screenName={'DesignNew'} buttonName={'DesignNew'} />
          <CommonButton screenName={'VPNApp'} buttonName={'VPN'} />
        </View> */}
      </ScrollView>
      {/* <Image style={styles.image} source={require('./assets/log2.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="red"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="red"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
  },

  image: {
    marginBottom: 40,
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
  },

  inputView: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    color: 'white',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: height / 6,
    width: width / 2.2,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
    borderColor: 'green',
    borderWidth: 3,
    marginHorizontal: 10,
  },
  loginN: {
    width: '80%',
    borderRadius: 25,
    height: height / 6,
    width: width / 2.2,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
    borderColor: 'red',
    borderWidth: 3,
    marginHorizontal: 10,
  },
  DataColor: {
    height: 50,
    width: 150,
    fontSize: 28,
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  fontStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  fontStylewhite: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SignIn;
