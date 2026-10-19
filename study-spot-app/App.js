
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
  TextInput, TouchableOpacity
} from 'react-native';

export default function App() {
  const [search, setSearch] = useState('');
  const [noise, setNoise] = useState('All');
  
  const studySpots = [

  {
    id: 1,
    name: 'Swearingen',
    location: 'USC Campus',
    noise: 'Medium',
    outlets: 'Yes'
},
{
  id:2,
  name: 'T-Coop Main Floor',
  location: 'Thomas Cooper Library',
  noise: 'High',
  outlets: 'Yes'
},
{
  id: 3,
  name: "T-Coop First Floor",
  location: 'Thomas Cooper Library',
  noise: 'None',
  outlets: 'Yes'
}
  ];

  const filterForspots = studySpots.filter((spot) =>{
    const matchesSearch =
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      spot.location.toLowerCase().includes(search.toLowerCase());

    const matchesnoise =
      noise === 'All' || spot.noise === noise;

    return matchesSearch && matchesnoise;

  });

 return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Gamecock Study Spot Finder</Text>
      <Text style={styles.subtitle}>
        Find your perfect place to study at USC!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Search study locations..."
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.label}>Noise Preference:</Text>

      <View style={styles.buttonRow}>
        {['All', 'None', 'Medium', 'High'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.button,
              noise === option && styles.selectedButton
            ]}
            onPress={() => setNoise(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.results}>
        {filterForspots.length} study spots found
      </Text>

      {filterForspots.map((spot) => (
        <View key={spot.id} style={styles.card}>
          <Text style={styles.spotName}>{spot.name}</Text>
          <Text>Location: {spot.location}</Text>
          <Text>Noise Level: {spot.noise}</Text>
          <Text>Outlets: {spot.outlets}</Text>
        </View>
      ))}

      {filterForspots.length === 0 && (
        <Text>No matching study spots found.</Text>
      )}

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          setSearch('');
          setNoise('All');
        }}
      >
        <Text style={styles.buttonText}>Reset Filters</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Study spot details are sample data for this prototype.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#73000A',
    marginTop: 40,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#777',
    padding: 12,
    borderRadius: 8,
    marginRight: 8
  },
  selectedButton: {
    backgroundColor: '#73000A'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  results: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#73000A'
  },
  spotName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  resetButton: {
    backgroundColor: '#73000A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  note: {
    color: '#666',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 40
  }
});

//I used AI for the styling! (Just trying to give credit where credit is due.)