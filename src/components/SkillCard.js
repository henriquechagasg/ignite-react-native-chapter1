import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const SkillCard = () => (
  <TouchableOpacity key={i} style={styles.buttonSkill}>
    <Text style={styles.textSkill}>skill</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
