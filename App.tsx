import { Groups } from '@screens/Groups';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}