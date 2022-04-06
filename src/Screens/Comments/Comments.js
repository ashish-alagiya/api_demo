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

import {GET_PAGE_LIST} from '../../actions/type';
import {getComment} from '../../actions';

const Comments = ({navigation}) => {
  const {comments} = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);

  console.log('Comments::::::', comments);

  useEffect(() => {
    dispatch(getComment());
  }, []);

  const Item = ({body, id, userId}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            passBody: body,
          });
        }}
        style={styles.shadowContainerStyle}>
        <Text style={styles.body}>
          Name :- {'\n'} {body}
        </Text>
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
        body={item.body}
        id={item.id}
        userId={item.userId}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.body}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  steelblue: {
    color: 'steelblue',
    textAlign: 'right',
    fontSize: 30,
    alignContent: 'center',
  },
  item: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
  bodyEven: {
    fontSize: 20,
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  shadowContainerStyle: {
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginLeft: 15,
    marginRight: 15,
  },
  separatorStyle: {
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 20,
  },
  TitleColor: {
    color: 'red',
  },
});

export default Comments;
