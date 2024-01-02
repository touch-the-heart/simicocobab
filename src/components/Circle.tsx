import React, { type PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface Props {
  width: number;
  height: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
}

export const Circle: React.FC<PropsWithChildren<Props>> = ({
  width,
  height,
  backgroundColor = 'black',
  borderRadius = 100,
  style,
  children,
}) => {
  return (
    <View
      style={[
        { width, height, backgroundColor, borderRadius },
        styles.center,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
