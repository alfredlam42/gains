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
      // tab set to series for dev of series page
      selectedTab: 'profile'
      // selectedTab: 'series'
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
          <Profile changeState={this.selectSeries} navigator = {this.props.navigator}/>
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
          <Series changeState={this.selectProfileTab} />
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
  selectSeriesTab: function() {
    this.setState({
     selectedTab: 'series'
    });
  },
  selectProfileTab: function() {
    this.setState({
      selectedTab: 'profile'
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});