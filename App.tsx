/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

/*import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

   
  function mutiplyDemo(a:number,b:number):any {
    return a*b 
   }
   console.log(mutiplyDemo(5,4))
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;8*/

/*import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;*/

/*import React from 'react';
import { Text, View , StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (NameOfEmpl) => {
  return (
    <View style={styles.center}>
      <Text>Hello {NameOfEmpl.name}!</Text>
    </View>
  );
}

const NameOfEmplo = () => {
  return (
    <View style={[styles.center, {top: 250}]}>
      <Greeting name='kila' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}


export default NameOfEmplo;*/

/*import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'



class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
    
      count: this.state.count + 1
    })
  }

  onMinusPress = () => {
    this.setState({
      
      count: this.state.count - 1
    })
  }

  Button = (name:String)=>{
    return (
      <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>
         <Text>{name}</Text>
        </TouchableOpacity>
    )
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity

        
         style={styles.button}
         onPress={this.onPress}>
         <Text>Click 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onMinusPress}
         
        >
          <Text>Click Minus</Text>
        
        </TouchableOpacity>
 
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;*/

/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './src/PresentationalComponent';

export default class App extends React.Component {
   state = {
      myState: 'This is my state',
      myname:'This is my name'
   }

   render() {
      return (
         <View>
            <PresentationalComponent myState = {this.state.myState}/>
            <PresentationalComponent myState = {this.state.myname}/>
         </View>
      );
   }
}*/

{
  /* </FlatList>const HelloWorldApp = () => {

  const Greeting = "Ankit Chothani";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        
      }}>
          <Text style={styles.subheaderStyle}>{Greeting}</Text>
      <Text style={
        styles.textstyle
      }>Hello, New!</Text>
    
    </View>
  )
}
const styles = StyleSheet.create(
  {
    textstyle:{
      fontSize:50,
      color: 'green'
    },
    subheaderStyle:{
      fontSize:30,
      color:'blue',
      fontWeight: 'bold',
    }
  });

export default ListFeind; */
}
// import React fro

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './src/reducer';
import SignIn from './src/Screens/SignIn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DemoAPI from './src/Screens/POST/DemoAPI';

import Comments from './src/Screens/Comments/Comments';
import Albums from './src/Screens/Albums/Albums';
import Photos from './src/Screens/Photos/Photos';
import Todos from './src/Screens/ToDos/Todos';
import Users from './src/Screens/Users/Users';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'SignIn'}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Comments" component={Comments} />
          <Stack.Screen name="DemoAPI" component={DemoAPI} />
          <Stack.Screen name="Albums" component={Albums} />
          <Stack.Screen name="Photos" component={Photos} />
          <Stack.Screen name="Todos" component={Todos} />
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
