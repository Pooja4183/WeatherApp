import React, { component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { render } from 'react-dom';
import { TextInput, Card, List, Badge } from 'react-native-paper';

export default class Winput extends React.Component {
  state = {
    text: '',
    cities: '',
    temperature: '',
  };

  fetchCities(text) {
    this.setState({ text });
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=1ba5c573ea69473f8d1105511200411&days=3&q=${text}`
    )
      .then((data) => data.json())
      .then((city) => {
        // console.log('City', city.location?.name, city.location?.country);
        this.setState({
          cities: city.location,
          temperature: city.current,
        });
        console.log('test', this.state);
      });
  }

  render() {
    return (
      <view>
        <TextInput
          label='City'
          value={this.state.text}
          onChangeText={(text) => this.fetchCities(text)}
        />
        <Badge>
          Temperature in Centigrade {this.state.temperature?.temp_c}
        </Badge>
        <br></br>
        <Badge>Temperature in Fehranite {this.state.temperature?.temp_f}</Badge>
      </view>
    );
  }
}
