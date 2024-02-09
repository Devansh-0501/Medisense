import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

class MedisenseHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spO2: 98,
      pulseRate: 75,
      temperature: 36.5,
      animation: new Animated.Value(0),
    };
  }

  simulateUpdateVitals = () => {
    // Simulate updating vital signs data with random values
    const newSpO2 = Math.floor(Math.random() * 100);
    const newPulseRate = Math.floor(Math.random() * 100);
    const newTemperature = (Math.random() * 2) + 36;

    // Animate the value changes
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    this.setState({
      spO2: newSpO2,
      pulseRate: newPulseRate,
      temperature: newTemperature,
    });
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation,
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Medisense</Text>
        <View style={styles.vitalSigns}>
          <Animated.View style={[styles.vital, animatedStyles]}>
            <Text style={styles.vitalLabel}>SpO2</Text>
            <Text style={styles.vitalValue}>{this.state.spO2}%</Text>
          </Animated.View>
          <Animated.View style={[styles.vital, animatedStyles]}>
            <Text style={styles.vitalLabel}>Pulse Rate</Text>
            <Text style={styles.vitalValue}>{this.state.pulseRate} BPM</Text>
          </Animated.View>
          <Animated.View style={[styles.vital, animatedStyles]}>
            <Text style={styles.vitalLabel}>Temperature</Text>
            <Text style={styles.vitalValue}>{this.state.temperature}°C</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={this.simulateUpdateVitals} style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update Vital Signs</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008B',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  vitalSigns: {
    flexDirection: 'row',
  },
  vital: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#2F8FD8',
  },
  vitalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  vitalValue: {
    fontSize: 24,
    color: '#BBDFF9',
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 10,
  },
  updateButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default MedisenseHome;
