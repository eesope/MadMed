import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { StyleSheet, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      
      <ThemedView style={styles.container}>

      <ThemedText type="title" >Hi NAME!</ThemedText>

        <Button
          onPress={() => router.push('/addPet')} 
          title="Add a pet" color="#158480" 
          accessibilityLabel="Button for add a pet"/>
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

