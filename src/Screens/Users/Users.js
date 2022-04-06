import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  navigation,
  TextInput,
  List,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {getUser} from '../../actions';

const Users = ({navigation}) => {
  const {user} = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState('');

  console.log('user::::::', user);

  useEffect(() => {
    // getData();
    dispatch(getUser());
  }, []);

  useEffect(() => {
    setdata(user);
  }, [user]);

  const Item = ({name, id, email, username}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            passBody: name,
          });
        }}
        style={[
          styles.DataColor,
          {backgroundColor: search ? 'darkgray' : 'white'},
        ]}>
        <Text style={styles.body}>Name :- {name}</Text>
        <Text style={styles.bodyEven}>UserName :- {username}</Text>
        <Text style={styles.bodyEven}>Email :- {email}</Text>
      </TouchableOpacity>
    );
  };

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        return (
          item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
          item.username.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
          item.email.toLowerCase().indexOf(text.toLowerCase()) >= 0
        );
      });
      setdata(newData);
      setsearch(text);
    } else {
      setdata(user);
      setsearch(text);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Item
        onPress={() => {
          navigation.navigate('Details', {
            passBody: item,
          });
        }}
        name={item.name}
        id={item.id}
        username={item.username}
        email={item.email}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.title}
        value={search}
        placeholder="search here"
        onChangeText={text => searchFilter(text)}
      />

      <FlatList
        // ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#F5F5F5',
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 50,
    flexDirection: 'row',
  },
  DataColor: {
    fontSize: 28,
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  separatorStyle: {
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: 'steelblue',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: 45,
  },
  body: {
    fontSize: 20,
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  bodyEven: {
    fontSize: 20,
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  shadowContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
});

export default Users;
