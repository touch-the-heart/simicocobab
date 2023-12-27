//App.tsx
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Typography } from '@shimeuisuk/simicocobab';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography fontSize={20} color="black">
        Result: hello world
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
