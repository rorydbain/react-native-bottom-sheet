import React from 'react';
import { View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import ReText from './ReText';
import { styles } from './styles';

interface BottomSheetDebugViewProps {
  values: Record<string, SharedValue<number | boolean> | number>;
}

const BottomSheetDebugView = ({ values }: BottomSheetDebugViewProps) => {
  return (
    <View pointerEvents="none" style={styles.container}>
      {Object.keys(values).map(key => (
        <ReText
          key={`item-${key}`}
          value={values[key] ?? 0}
          style={styles.text}
          text={key}
        />
      ))}
    </View>
  );
};

export default BottomSheetDebugView;
