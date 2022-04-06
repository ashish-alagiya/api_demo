import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  navigation,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {getAlbums} from '../../actions';

const Albums = ({navigation}) => {
  const {albums} = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);

  console.log('albums::::::', albums);

  useEffect(() => {
    // getData();
    dispatch(getAlbums());
  }, []);

  const Item = ({title, id, userId}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            passBody: title,
          });
        }}
        style={styles.container}>
        {/* <Text style={styles.title}>{userId}</Text> */}
        <Text style={styles.body}>
          Title : {'\n'} {title}
        </Text>
        {/* <Text style={styles.steelblue}>{id}</Text> */}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Item
        onPress={() => {
          navigation.navigate('Details', {
            passBody: item,
          });
        }}
        title={item.title}
        id={item.id}
        userId={item.userId}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        data={albums}
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
    backgroundColor: 'lightgray',
  },
  steelblue: {
    color: 'steelblue',
    textAlign: 'right',
    fontSize: 30,
    alignContent: 'center',
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: 'steelblue',
    alignContent: 'center',
    textAlign: 'left',
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
  separatorStyle: {
    borderColor: 'orange',
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 20,
  },
});

export default Albums;
