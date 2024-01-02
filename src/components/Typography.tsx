import React, { type PropsWithChildren } from 'react';
import type { TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';

interface Props {
  color?: string;
  fontSize: number;
  style?: TextStyle;
}

export const Typography: React.FC<PropsWithChildren<Props>> = ({
  color = 'black',
  fontSize,
  children,
  style,
}) => {
  return <RNText style={[{ color, fontSize }, style]}>{children}</RNText>;
};
