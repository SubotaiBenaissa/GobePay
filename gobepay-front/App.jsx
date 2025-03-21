import { ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Demo } from './components/Demo';
import { lightTheme, darkTheme } from './themes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <Text>Open up App.js</Text>
            <Demo />
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
