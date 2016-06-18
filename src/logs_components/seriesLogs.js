var React = require("react");
var ReactNative = require("react-native");
var Header = require('../common/header');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;
var realm = require('../database/class');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>

        <Header />
        <View style={styles.body}>
          <View style={styles.header}>
              <Text style={styles.headerText}>Current</Text>
          </View>

          <TouchableHighlight style={styles.seriesWrapper} onPress={this.currentWorkoutPress} underlayColor="black">
            <View>
              {this.returnCurrentSeries()}
            </View>
          </TouchableHighlight>

          <View style={styles.header}>
              <Text style={styles.headerText}>Previous</Text>
          </View>

          <TouchableHighlight style={[styles.seriesWrapper,{marginBottom: 50}]} onPress={this.previousWorkoutPress} underlayColor="black">
            <View>
              {this.returnPreviousSeries()}
            </View>
           </TouchableHighlight>
         </View>
      </View>
    )
  },
  currentWorkoutPress: function() {
    { this.props.navigator.push({ name: 'workoutLogs' }); }
  },
  previousWorkoutPress: function() {
    { this.props.navigator.push({ name: 'previousWorkoutLogs' }); }
  },
  returnCurrentSeries: function() {
    var mostRecentSeriesInd = realm.objects('Series').length - 1
    var currentSeries = realm.objects('Series')[mostRecentSeriesInd]
    if (currentSeries && currentSeries.completed == false){
      return (
        <View style={styles.seriesDetail}>
          <Text style={styles.seriesNameText}>{currentSeries.name}</Text>
          <Text style={styles.seriesPic}>PIC</Text>
        </View>
      )
    }
    else{
      return <Text>You are currently not working on anything.</Text>
    }
  },
  returnPreviousSeries: function() {
    if (realm.objects('Series').length === 1) { return };

    var mostPreviousSeriesInd = realm.objects('Series').length - 2
    var previousSeries = realm.objects('Series')[mostPreviousSeriesInd]
    if (previousSeries && previousSeries.completed == true){
      return (
        <View style={styles.seriesDetail}>
            <Text style={styles.seriesNameText}>{previousSeries.name}</Text>
            <Text style={styles.seriesPic}>PIC</Text>
        </View>
      )
    }
    else{
      return <Text>You have not completed a series yet</Text>
    }
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29292B',
  },
  body: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'stretch'
  },
  seriesWrapper: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'stretch'
  },
  header: {
    // borderWidth: 2,
  },
  headerText: {
    fontSize: 40,
    color: '#E0DFE4'
  },
  seriesPic: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'green',
    marginRight: 10
  },
  seriesDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  seriesNameText: {
    fontSize: 20,
    color: '#E0DFE4',
    padding: 10
  }
});