var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.gains}>GAINS</Text>
        </View>
      </View>
    );
  },
  onBackButtonPress: function() {
    {this.props.navigator.pop()}
  },
});

var styles = StyleSheet.create({
  container: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#F0D23C'
  },
  logo: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gains: {
    flex: 1,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#29292B',
  }
});
