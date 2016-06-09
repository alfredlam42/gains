var React = require('react');
var ReactNative = require('react-native');
var Home = require('./home');
var Profile = require('./profile');
var Log = require('./logs');
var Workouts = require('./workouts');
var Series = require('./series');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = ReactNative;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home'
    }
  },
  render: function() {
    return (
      <TabBarIOS
        style={styles.container}
        tintColor="white"
        barTintColor="#000080"
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          title="Profile"
          icon={require('./common/icons/home.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Profile />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'workouts'}
          title="Series"
          icon={require('./common/icons/workouts.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'workouts',
            });
          }}>
          <Series />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'logs'}
          title="Logs"
          icon={require('./common/icons/logs.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'logs',
            });
          }}>
          <Log />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});