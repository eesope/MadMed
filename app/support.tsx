import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';

export default function HomeScreen() {
    return (
        <>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">email@gmail.com</ThemedText>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    }
});
