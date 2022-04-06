import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  navigation,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {getPhotos} from '../../actions';

const Photos = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    console.log('getData');
    setLoading(true);

    return axios({
      method: 'GET',
      baseURL:
        'https://jsonplaceholder.typicode.com/photos?_limit=5&_page=' + offset,
    })
      .then(res => {
        console.log(res);
        setOffset(offset + 1);

        setDataSource([...dataSource, ...res.data]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const loadMoreData = () => {
    getData();
  };

  const Item = ({title, id, userId}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            passBody: title,
          });
        }}
        style={styles.shadowContainerStyle}>
        {/* <Text style={styles.title}>{userId}</Text> */}
        <Text style={styles.body}>
          Title :- {'\n'} {title}
        </Text>
        {/* <Text style={styles.steelblue}>{id}</Text> */}
      </TouchableOpacity>
    );
  };
  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator color="green" style={{marginLeft: 8}} />
      </View>
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
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        onEndReached={loadMoreData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: 'white',
    backgroundColor: '#F5F5F5',
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
    color: 'white',
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
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  shadowContainerStyle: {
    fontSize: 20,
    color: 'red',
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
    backgroundColor: 'black',
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
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default Photos;
