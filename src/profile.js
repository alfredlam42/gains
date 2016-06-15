var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput
} = ReactNative;

var Button = require('./common/button');
var realm = require('./database/class');

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
    var currentSeries = user.series[0] ? user.series.name : null;

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>Header / logo goes here</Text>
        </View>
        {this.renderProfile()}

        <View style={styles.seriesWrapper}>
          <Text style={styles.h2}>Current Series</Text>
          {this.renderCurrentSeries(currentSeries)}
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            text={'New Series'}
            onPress={() => this.props.changeState()} />
          {this.state.edit? this.onEditProfilePress() : this.onEditSaveProfilePress()}
        </View>
      </View>
    );
  },
  onEditProfilePress: function() {
    if (isNaN(this.state.age) || isNaN(this.state.height)  || isNaN(this.state.weight) || this.state.age === '' || this.state.height === '' || this.state.weight === '' ) {

      return <Text>Check Fields</Text>
    } else {
      var user = realm.objects('User')[0];
      realm.write(() => {
        user.name = this.state.name;
        user.age = parseInt(this.state.age);
        user.height = parseInt(this.state.height);
        user.weight = parseInt(this.state.weight);
      });
    }
    return  <Button
            text={'Save'}
            onPress={() => this.setState({edit: !this.state.edit})} />
  },
  onEditSaveProfilePress: function() {
    return  <Button
            text={'Edit'}
            onPress={() => this.setState({edit: !this.state.edit})} />
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
            value={this.state.age.toString()}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({age: text})}/>

        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Height(inches): </Text>
          <TextInput
            style={styles.input}
            value={this.state.height.toString()}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({height: text})}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userInfo}>Weight:  </Text>
          <TextInput
            style={styles.input}
            value={this.state.weight.toString()}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({weight: text})}/>
        </View>
      </View>
    } else {
      return <View style={styles.profile}>
        <Text style={styles.h2}>Profile</Text>
        <Text style={styles.userInfo}>Name: {this.state.name}</Text>
        <Text style={styles.userInfo}>Age: {this.state.age}</Text>
        {this.convertInchesToHeight(this.state.height)}
        <Text style={styles.userInfo}>Weight: {this.state.weight}</Text>
      </View>
    }
  },
  renderCurrentSeries: function(series){
    if (series){
      return(
        <View style={styles.workoutWrapper}>
          <Text style={styles.pic}></Text>
          <View style={styles.workoutDetails}>
            <Text style={styles.workoutInfo}>Name: {currentSeries}</Text>
            <Text style={styles.workoutInfo}>Week: </Text>
            <Text style={styles.workoutInfo}>Day: </Text>
          </View>
        </View>
      )
    }
    else{
      return(
        <View style={styles.workoutWrapper}>
          <View style={styles.workoutDetails}>
            <Text style={styles.workoutInfo}>You are currently not working on anything</Text>
          </View>
        </View>
      )
    }
  },
  convertInchesToHeight: function(height) {
    var inches = height % 12;
    var feet = parseInt(height / 12);
    return <Text style={styles.userInfo}>Height: {feet}'{inches}"</Text>
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