var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput
} = ReactNative;

var Button = require('../common/button');
var realm = require('../class');
var profile = require('../profile');

module.exports = React.createClass({
  getInitialState: function() {
    var user = realm.objects('User')[0];
    return {
      edit: false,
      name: user.name,
      age: user.age,
      height: user.height,
      weight: user.weight
    }
  },
  render: function() {
    var user = realm.objects('User')[0];
    var currentSeries = user.series[0] ? user.series.name : 'Pick a series';
    realm.write(() => {
      user.name = this.state.name;
      user.age = parseInt(this.state.age);
      user.height = parseInt(this.state.height);
      user.weight = parseInt(this.state.weight);
    });

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text>Header / logo goes here</Text>
        </View>

        {this.renderProfile()}

        <View style={styles.seriesWrapper}>
          <Text style={styles.h2}>Current Series</Text>
          <View style={styles.workoutWrapper}>
            <Text style={styles.pic}></Text>
            <View style={styles.workoutDetails}>
              <Text style={styles.workoutInfo}>Name: {currentSeries}</Text>
              <Text style={styles.workoutInfo}>Week: </Text>
              <Text style={styles.workoutInfo}>Day: </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            text={'New Series'}
            onPress={this.onNewSeriesPress} />
          <Button
            text={this.state.edit? 'Save' : 'Edit Profile'}
            onPress={this.onEditProfilePress} />
        </View>
      </View>
    );
  },
  onNewSeriesPress: function() {
    { this.props.navigator.immediatelyResetRouteStack([{ name: 'newSeries' }]); }
  },
  onEditProfilePress: function() {
    this.setState({edit: !this.state.edit});
  },
  renderProfile: function() {
    if(this.state.edit) {
      return <View style={styles.profile}>
        <Text style={styles.h2}>Edit Profile</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Name: </Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={(text) => this.setState({name: text})}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Age: </Text>
          <TextInput
            style={styles.input}
            value={this.state.age}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({age: text})}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Height: </Text>
          <TextInput
            style={styles.input}
            value={this.state.height}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({height: text})}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Weight:  </Text>
          <TextInput
            style={styles.input}
            value={this.state.weight}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({weight: text})}/>
        </View>
      </View>
    } else {
      return <View style={styles.profile}>
        <Text style={styles.h2}>Profile</Text>
        <Text style={styles.userInfo}>Name: {this.state.name}</Text>
        <Text style={styles.userInfo}>Age: {this.state.age}</Text>
        <Text style={styles.userInfo}>Height: {this.state.height}</Text>
        <Text style={styles.userInfo}>Weight: {this.state.weight}</Text>
      </View>
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
  profile: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 25,
    // alignItems: 'center',
    borderWidth: 3,
    borderColor: 'green'
  },
  h2: {
    fontSize: 24,
    textDecorationLine: 'underline'
  },
  userInfo: {
    fontSize: 18
  },
  seriesWrapper: {
    flex: 4,
    // alignItems: 'center',
    paddingLeft: 25,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'yellow'
  },
  workoutWrapper: {
    flexDirection: 'row'
  },
  pic: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'green'
  },
  workoutDetails: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    paddingLeft: 5
  },
  workoutInfo: {
    fontSize: 18
  },
  buttonWrapper: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 40,
    borderWidth: 3,
    borderColor: 'red'
  },
  button: {
    borderWidth: 2,
    height: 50,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 5,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center'
  }
});