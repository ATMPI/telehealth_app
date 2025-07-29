import { StyleSheet, View } from 'react-native'
import React from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; // Adjust the path as necessary
const ThemedView = ({style,safe = false, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
    const safeinsets = useSafeAreaInsets();
    const ifsafe = safe ? {flex:1,paddingTop:safeinsets.top, paddingBottom:safeinsets.bottom} : {};
    const localStyle = {...ifsafe, backgroundColor: theme.background};
    return (
        <View style={[localStyle, style]}
            {...props}
        />
    )
}

export default ThemedView



