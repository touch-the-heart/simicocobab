import React, { type PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';

interface Props {
  color?: string;
  fontSize: number;
}

export const Typography: React.FC<PropsWithChildren<Props>> = ({
  color = 'black',
  fontSize,
  children,
}) => {
  return <RNText style={{ color, fontSize }}>{children}</RNText>;
};
