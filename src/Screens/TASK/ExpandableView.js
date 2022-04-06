import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {getComment, getExpandedComment} from '../../actions';

const ExpandableView = ({data, index}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isExpandedData, setIsExpandedData] = useState();

  console.log('isExpandedData', isExpandedData);

  const dispatch = useDispatch();

  const onPress = index => {
    setIsVisible(!isVisible);
    const request = {
      data: {
        page: index,
      },
      onSuccess: res => {
        setIsExpandedData(res?.data);
        console.log('res', res);
      },
      onFail: error => {
        console.log('Error:---', error);
      },
    };
    dispatch(getExpandedComment(request));
  };

  return (
    <View>
      <TouchableOpacity onPress={() => onPress(index + 1)} style={style.item}>
        <Text style={style.TitleEven}>Title :- {data.title}</Text>
        <Image
          source={require('../../../assets/down-arrow.png')}
          style={{
            ...style.image,
            transform: [{rotate: isVisible ? '180deg' : '360deg'}],
          }}
        />
      </TouchableOpacity>

      {isVisible && (
        <Text style={style.bodyEven}>
          Comments :- {'\n'} {data.body}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyEven: {
    fontSize: 20,
    color: 'red',
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 5,
    marginBottom: 5,
  },
  TitleEven: {
    fontSize: 20,
    color: 'black',
    alignContent: 'flex-start',
    marginVertical: 5,
    marginBottom: 10,
  },
  image: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export default ExpandableView;
