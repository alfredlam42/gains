var React = require("react");
var ReactNative = require("react-native");
var Header = require('../common/header');
var {
  View,
  Text,
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
            <View>
              {this.returnCurrentSeries()}
            </View>
          </TouchableHighlight>

          <View style={styles.header}>
              <Text style={styles.headerText}>Previous</Text>
          </View>

          {this.renderPreviousSeries()}
        </ScrollView>
      </View>
    )
  },
  workoutPress: function(series, key) {
    { this.props.navigator.push({ name: 'workoutLogs',
      series: series,
      key: key
    }); }
  },
  renderPreviousSeries: function() {
    var previousSeriesList = realm.objects('Series').filtered('completed = true');
    var that = this;

    return previousSeriesList.map(function(series, i){
      return <TouchableHighlight key={i} style={styles.seriesWrapper} onPress={() => that.workoutPress(series, i)} underlayColor="black">
          <View style={styles.seriesDetail}>
            <Text style={styles.seriesPic}>PIC</Text>
            <Text style={styles.seriesNameText}>{series.name}</Text>
          </View>
        </TouchableHighlight>
    });
  },
  returnCurrentSeries: function() {
    var currentSeries = realm.objects('Series').filtered('active = true')[0]
    if (currentSeries && currentSeries.active === true){
      return (
        <View style={styles.seriesDetail}>
          <Text style={styles.seriesPic}>PIC</Text>
          <Text style={styles.seriesNameText}>{currentSeries.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
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
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'green',
    marginRight: 10
  },
  seriesDetail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  seriesNameText: {
    fontSize: 30,
    color: '#E0DFE4',
    textAlign: 'center'
  },
});