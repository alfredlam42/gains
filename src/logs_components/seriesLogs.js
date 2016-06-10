var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;
var realm = require('../class');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text>Header / logo goes here</Text>
        </View>

        <View style={styles.header}>
            <Text style={styles.headerText}>Current</Text>
        </View>

        <TouchableHighlight style={styles.seriesWrapper} onPress={this.currentWorkoutPress} underlayColor="black">
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.seriesPic}></Text>
            <View style={styles.seriesDetail}>
              <Text>Name of Series Goes here</Text>
            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.header}>
            <Text style={styles.headerText}>Previous</Text>
        </View>

        <TouchableHighlight style={[styles.seriesWrapper,{marginBottom: 50}]} onPress={this.previousWorkoutPress} underlayColor="black">
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.seriesPic}></Text>
            <View style={styles.seriesDetail}>
              <Text>Name of Series Goes here</Text>
            </View>
          </View>
         </TouchableHighlight>
      </View>
    )
  },
  currentWorkoutPress: function() {
    // realm.write(() => {
    //   realm.create('Series', {id: 1, name: "test-series"});
    // })
    // console.log(realm.objects('Series')[0].name) //how to make dummy data
    { this.props.navigator.push({ name: 'workoutLogs' }); }
  },
  previousWorkoutPress: function() {
    { this.props.navigator.push({ name: 'previousWorkoutLogs' }); }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'stretch'
  },
  seriesWrapper: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1.5,
    borderWidth: 2,
    alignSelf: 'stretch'
  },
  headerText: {
    fontSize: 40,
    paddingLeft: 10
  },
  seriesPic: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'green',
    marginRight: 30
  },
  seriesDetail: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});