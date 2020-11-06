import React from 'react';
import { StyleSheet, Text, View, Animatednp } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content
        title='Weather App'
        subtitle='Select City'
        style={styles.headers}
      />
    </Appbar.Header>
  );
};



const styles = StyleSheet.create({
  headers: {
    alignItems: 'center',
  },
});

export default Header;

// https://www.youtube.com/watch?v=KGq6cNiX244