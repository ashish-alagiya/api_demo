import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { GET_PAGE_LIST } from "../../actions/type";
import { getConfig } from "../../actions";
import ExpandableView from "../TASK/ExpandableView";

const DemoAPI = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const { listData } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  console.log("listData::::::", listData);
  const onPressShowAdditionalInfo = () => {
    <Text style={styles.bodyEven}>Body :- {Item.body}</Text>;
  };

  useEffect(() => {
    // getData();

    dispatch(getConfig());
    fadeIn();
  }, []);

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const Item = ({ body, id, userId, title }) => {
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity onPress={onPress} style={styles.item}>
          <Text style={styles.bodyEven}>Title :- {title}</Text>
        </TouchableOpacity>
        {isVisible && <Text style={styles.bodyEven}>{body}</Text>}
      </Animated.View>
    );
  };

  const renderItem = ({ item, index }) => {
    return <ExpandableView data={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.body}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#F5F5F5",
  },

  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 50,
    flexDirection: "row",
  },
  DataColor: {
    fontSize: 28,
    color: "black",
    alignContent: "center",
    textAlign: "center",
    fontFamily: "bold",
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  separatorStyle: {
    borderColor: "lightgray",
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: "steelblue",
    alignContent: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: 45,
  },
  body: {
    fontSize: 20,
    color: "black",
    alignContent: "center",
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "bold",
  },
  bodyEven: {
    fontSize: 20,
    color: "black",
    alignContent: "center",
    textAlign: "center",
    marginVertical: 5,
    marginBottom: 10,
    fontWeight: "bold",
  },
  shadowContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
});
export default DemoAPI;
