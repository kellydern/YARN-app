import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const PrimaryButton = ( { label, onPress }) => {
  return (
    <View style={styles.PrimaryButtonContainer}>
    <TouchableOpacity
    onPress={() => onPress()}
    style={styles.PrimaryButton}
    >
    <Text style={styles.primaryButtonText}>{label}</Text>

    </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
