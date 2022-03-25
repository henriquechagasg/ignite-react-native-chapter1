import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {SkillData} from '../pages/Home';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({skill, ...rest}: SkillCardProps) => (
  <TouchableOpacity style={styles.buttonSkill} {...rest}>
    <Text style={styles.textSkill}>{skill}</Text>
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
