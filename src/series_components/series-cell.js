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
    // find series ID
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
    // edit user in DB to have that series
    // let seriesList = user.series;
    // if (user && series) {
    //   realm.write(() => {
    //     seriesList.push({ name: series.name,
    //                       maxes: series.maxes,
    //                       workouts: series.workouts,
    //                       currentDay: series.currentDay,
    //                       completed: series.completed
    //                     });
    //   });
    // }

    // delete series from user
    // realm.write(() => {
    //   realm.delete(user.series)
    // })

    // user.series.push(selectedSeries);
    // console.log(user.series[0].name);
    // navigate to profile



    // console.log(typeof(this.props.series));
    // console.log(typeof(user.series));
    // console.log(user.series);
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