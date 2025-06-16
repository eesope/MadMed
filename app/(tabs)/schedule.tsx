import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';

export default function Schedule() {
  return (
    <>
      <Stack.Screen options={{ title: 'Schedule' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Edit Schedule</ThemedText>

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
