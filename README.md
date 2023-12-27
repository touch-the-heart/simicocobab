# @shimeuisuk/simicocobab

react-native-common-components

## Installation

```sh
npm install @shimeuisuk/simicocobab
```

## Usage

```ts
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
