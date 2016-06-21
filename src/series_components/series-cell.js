var ReactNative = require('react-native');
var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

var realm = require('../database/class');

// add category and experience level to cell information
module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.seriesWrapper}
        underlayColor={'#56A2F5'}
        onPress={this.onSeriesSelect}>
        <View>
          <Text style={styles.seriesName}>{this.props.series.name}</Text>
        </View>
      </TouchableHighlight>
    );
  },
  onSeriesSelect: function() {
    // find series by ID
    var findSeriesById = function(id) {
      var series;
      var allSeries = realm.objects('Series');
      for (var i = 0; i < allSeries.length; i++) {
        if (allSeries[i].id === id) {
          series = allSeries[i];
        }
      }
      return series;
    }
    var seriesId = this.props.series.id;
    var series = findSeriesById(seriesId);

    // find user
    var user = realm.objects('User')[0];


    // edit user property in realm to have that series
    let seriesList = user.series;
    realm.write(() => {
      seriesList.push(series);
      console.log(seriesList[0]);
      console.log(seriesList.length);
      console.log(user.series.length);
    });

    // delete series from user
    // realm.write(() => {
    //   for(var i = 0; i < user.series.length; i++) {
    //     realm.delete(user.series[i]);
    //   }
    // })

    // navigate to profile



    // console.log(typeof(this.props.series));
    // console.log(typeof(user.series));
    // console.log(user.series.length);
    // console.log(user.series.name);
    // console.log(this.props.series.id);
    // console.log(series);
    // console.log(series.name);
    // console.log(series.id);
    // console.log(series.maxes);
    // console.log(series.workouts);
    // console.log(series.currentDay);
    // console.log(series.completed);
  }
});

var styles = StyleSheet.create({
  seriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#B3C4CC',
    marginBottom: 2
  },
  seriesName: {
    fontSize: 24
  }
});