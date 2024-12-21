import { Stack } from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="createAcc" options={{ title: 'Create Account', headerShown: false }} />
      <Stack.Screen name="otp" options={{ title: 'OTP', headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
    </Stack>
  );
}
