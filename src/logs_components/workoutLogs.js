var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} = ReactNative;
var realm = require('../class');

//dummy data workout exercises

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableHighlight onPress={this.handlePress} underlayColor="black">
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.list}>
          <Text style={{fontSize: 50}}>This is the current workout Logs</Text>
          <Text>{realm.objects('Workout').length}</Text>
        </ScrollView>
      </View>
    )
  },
  handlePress: function() {
    { this.props.navigator.pop(); }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {

  },
  list: {

  }
});