import { Stack } from "expo-router"


const RootLayout = () => {
  return (
        <Stack screenOptions={{
            headerShown: true, 
            headerTitleAlign: 'center', 
            headerStyle: { backgroundColor: '#f8f9fa' }, // Example color
            headerTintColor: '#343a40', // Example color for the title
        }} >
            <Stack.Screen name="(auth)" options={{ headerShown: false }}  />
            <Stack.Screen name="dashboard" options={{ headerShown: false }}  />
            <Stack.Screen name="index" options={{ headerShown: false }}  />

        </Stack>
  ) 
}

export default RootLayout

