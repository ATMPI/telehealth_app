// components/CustomTabBarButton.js

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState?.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: focused ? '#007bff' : 'transparent', // Customize your active color
        paddingVertical: 8,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;