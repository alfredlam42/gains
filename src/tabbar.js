var React = require('react');
var ReactNative = require('react-native');

var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = ReactNative;

var Profile = require('./profile');
var Log = require('./logs');
var Series = require('./series');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'profile'
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
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          icon={require('./common/icons/home.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          <Profile changeState={this._changeState} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'series'}
          title="Series"
          icon={require('./common/icons/workouts.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'series',
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
  },
  _changeState: function() {
    this.setState({
     selectedTab: 'series'
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});