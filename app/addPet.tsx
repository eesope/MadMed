import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function AddPet() {

    const [petName, setPetName] = useState('');
    const [meds, setMeds] = useState(
        [{medName: '', schedule: {days:[], time:''}}]
    );

    const [days, setDays] = useState(['']);
    const [time, setTime] = useState(['']);

    const addMed = () => {
        setMeds([...meds, {medName: '', schedule: {days:[], time:''}}])
    }

    const savePet = () => {
        console.log({petName, meds});
    };


  return (
    <>
      <Stack.Screen options={{ title: 'Add a pet' }} />      
      <ThemedView style={styles.container}>

        {/* Pet's profile photo */}

        <Text>Pet Name</Text>
        <TextInput
            placeholder='Enter pet name'
            value={petName}
            onChangeText={setPetName}
            style={{borderBottomWidth: 1, marginBottom: 20}}
        />

        {/* Medication list */}

        {meds.map((med, idx) => (
            <View key={idx}>
                <Text>Medication Name</Text>
                <TextInput
                    placeholder='Enter medication name'
                    value={med.medName}
                    onChangeText={(text) => {
                        const newMeds = [...meds];
                        newMeds[idx].medName = text;
                        setMeds(newMeds);
                    }}
                    style={{borderBottomWidth: 1, marginBottom: 10}}
                />

            {/* Giving schedule */}
                    {/* Sun | Mon | Tue | Wed | The | Fri | Sat */}
                    {/* set time as slot */}

                
            </View>
        ))}

            <Button title='Add Medication' onPress={addMed} />
            <Button title='Save' onPress={savePet} />

      </ThemedView>

    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

