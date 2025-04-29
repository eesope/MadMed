import { Image, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (

    <ScrollView>
      <ThemedText type="title">MadMed ⏰</ThemedText>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
