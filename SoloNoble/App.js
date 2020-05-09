/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Array2D from './com/Array2D';
import PuzzleGenView from './components/PuzzleGenView';
import LevelDataController from './com/controller/LevelDataController';
import Popup from './components/Popup';
import LevelsView from './components/LevelsView';

console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');

const Stack = createStackNavigator();

class App extends React.Component {
    
  constructor() {
    super();

    this.state = {
      popup: null,
    };

    this.showPopup = this.showPopup.bind(this);

    this.levelDataController = new LevelDataController();

  }

  showPopup(popupChildren) {
    this.setState({
      popup: popupChildren,
    });
  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PuzzleGen" component={PuzzleGenView} />
          <Stack.Screen name="Levels" component={LevelsView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.body}>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="PuzzleGen" component={PuzzleGenView} />
                </Stack.Navigator>
              </NavigationContainer>
            </View>
        </SafeAreaView>
      </>
    );
    return (
      <NavigationContainer>
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
              <View style={styles.body}>
                  <PuzzleGenView showPopup={this.showPopup}/>
                  { this.state.popup ?
                    <Popup>
                      {this.state.popup}
                    </Popup>
                  : null }
              </View>
          </SafeAreaView>
        </>
      </NavigationContainer>
    );
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.body}>
                <PuzzleGenView showPopup={this.showPopup}/>
                { this.state.popup ?
                  <Popup>
                    {this.state.popup}
                  </Popup>
                : null }
            </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    width: '100%',
    height: '100%',
    borderColor: 'yellow',
    borderWidth: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    borderColor: 'blue',
    borderWidth: 1,
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
});

export default App;
