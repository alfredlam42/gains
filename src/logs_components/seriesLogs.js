var React = require("react");
var ReactNative = require("react-native");
var Header = require('../common/header');
var {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} = ReactNative;
var realm = require('../database/class');

module.exports = React.createClass({
  render: function(){
    var currentSeries = realm.objects('Series').filtered('active = true')[0];
    return (
      <View style={styles.container}>

        <Header />
        <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
          <View style={styles.header}>
              <Text style={styles.headerText}>Current</Text>
          </View>

          <TouchableHighlight style={styles.seriesWrapper} onPress={() => this.workoutPress(currentSeries)} underlayColor="black">
              {this.renderCurrentSeries()}
          </TouchableHighlight>

          <View style={styles.header}>
              <Text style={styles.headerText}>Previous</Text>
          </View>

          {this.renderPreviousSeries()}
        </ScrollView>
      </View>
    )
  },
  workoutPress: function(series) {
    this.props.navigator.push({name: 'workoutLogs', series: series});
  },
  renderPreviousSeries: function() {
    var previousSeriesList = realm.objects('Series').filtered('active = false');
    var that = this;

    return previousSeriesList.map(function(series, i){
      return <TouchableHighlight key={i} style={styles.seriesWrapper} onPress={() => that.workoutPress(series)} underlayColor="black">
          <View style={styles.seriesDetail}>
            <Image style={styles.seriesPic} source={{uri: series.picture}}/>
            <View style={styles.workoutDetails}>
              <Text style={styles.workoutInfoName}>{series.name}</Text>
              <Text style={styles.workoutInfo}>Days Completed: {series.currentDay}</Text>
            </View>
          </View>
        </TouchableHighlight>
    });
  },
  renderCurrentSeries: function() {
    var currentSeries = realm.objects('Series').filtered('active = true')[0];
    if (currentSeries && currentSeries.active === true){
      return (
        <View style={styles.seriesDetail}>
          <Image style={styles.seriesPic} source={{uri: currentSeries.picture}}/>
          <View style={styles.workoutDetails}>
            <Text style={styles.workoutInfoName}>{currentSeries.name}</Text>
            <Text style={styles.workoutInfo}>Days Completed: {currentSeries.currentDay}</Text>
          </View>
        </View>
      )
    }
    else{
      return <Text>You are currently not working on anything.</Text>
    }
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29292B',
  },
  body: {
    flex: 7,
  },
  bodyContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  seriesWrapper: {
    flex: 4,
    alignSelf: 'stretch',
    paddingLeft: 25,
    paddingTop: 30,
  },
  header: {
    borderBottomWidth: 5,
    alignSelf: 'stretch',
    borderColor: '#F0D23C'
  },
  headerText: {
    fontSize: 40,
    color: '#F0D23C',
    textAlign: 'center'
  },
  seriesPic: {
    borderWidth: 1,
    borderColor: '#E0DFE4',
    width: 100,
    height: 100,
  },
  seriesDetail: {
    flexDirection: 'row'
  },
  seriesNameText: {
    fontSize: 30,
    color: '#E0DFE4',
    textAlign: 'center'
  },
  workoutDetails: {
    width: 200,
    height: 100,
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },
  workoutInfoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0DFE4'
  },
  workoutInfo: {
    fontSize: 18,
    color: '#E0DFE4'
  },
});