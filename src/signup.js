var React = require("react");
var ReactNative = require("react-native");
var Button = require('./common/button');
var Header = require('./common/header');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = ReactNative;
var realm = require('./database/class');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      age: null,
      height: null,
      weight: null,
      errorMessage: ''
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Header />
          <View style={styles.form}>
            <Text style={styles.label}>name</Text>
            <TextInput
              value={this.state.name}
              onChangeText={(text) => this.setState({name: text})}
              style={styles.input}/>

            <Text style={styles.label}>age</Text>
            <TextInput
              value={this.state.age}
              onChangeText={(text) => this.setState({age: text})}
              style={styles.input}/>

            <Text style={styles.label}>height(inches)</Text>
            <TextInput
              value={this.state.height}
              onChangeText={(text) => this.setState({height: text})}
              style={styles.input}/>

            <Text style={styles.label}>weight</Text>
            <TextInput
              value={this.state.weight}
              onChangeText={(text) => this.setState({weight: text})}
              style={styles.input}/>

            <Text style={[styles.label, styles.errorMessage]}>{this.state.errorMessage}</Text>
            <Button text={'get ready to GAINS'} onPress={this.onSignupPress} />
          </View>

      </View>
    )
  },
  onSignupPress: function() {
    if (this.state.name === '') {
      this.setState({
        errorMessage: "You have to put your name"
      })
      return;
    };

    realm.write(() => {
      realm.create('User', {
        id: 1,
        name: this.state.name,
        password: '12345',
        age: parseInt(this.state.age),
        height: parseInt(this.state.height),
        weight: parseInt(this.state.weight)
      });
    }); //creating a user on sign up then directing them to the tabbar

    { this.props.navigator.immediatelyResetRouteStack([{ name: 'tabbar' }]); }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29292B'
  },
  form: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18,
    color: '#E0DFE4'
  },
  errorMessage: {
    color: 'red'
  }
})