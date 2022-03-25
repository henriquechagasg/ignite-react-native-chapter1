import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      //   onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
});
