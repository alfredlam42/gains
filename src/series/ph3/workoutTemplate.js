var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = ReactNative;

module.exports = React.createClass({
  render: function(){
    return(
      <View style = {styles.exerciseBox}>
        {this.renderExerciseList(this.props.workout.exercises, this.props.workout.sets, this.props.workout.reps, this.props.workout.weight)}
      </View>
    )
  },
  renderExerciseList: function(exercises, sets, reps, weight){
    return exercises.map(function(exercise, i){
      return(
        <View style = {styles.row}>
          <Text style = {styles.column}>
            {exercise}
          </Text>
          <Text style = {styles.column}>
            {sets[i]}
          </Text>
          <Text style = {styles.column}>
            {reps[i]}
          </Text>
          <Text style = {styles.column}>
            {weight[i]}
          </Text>
        </View>
      )
    })
  }

});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
  },
  exerciseBox: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'green',
  }
})