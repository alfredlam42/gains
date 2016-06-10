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
       <TouchableHighlight style={styles.current} onPress={this.currentWorkoutPress} underlayColor="black">
          <View>
            <Text>Your current workout plan</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.previous} onPress={this.previousWorkoutPress} underlayColor="black">
           <View>
             <Text>Your previous workout plans</Text>
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
  current: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'stretch',
    marginTop: 20
  },
  previous: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
});