import React from 'react';
import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

interface ScreenContentProps {
  title: string;
  path: string;
  children?: React.ReactNode;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ title, path, children }) => {
  return (
    <View className="items-center p-[10vh] flex-1 justify-center bg-white">
      <Text className="text-xl font-bold">{title}</Text>
      {children}
    </View>
  );
};
