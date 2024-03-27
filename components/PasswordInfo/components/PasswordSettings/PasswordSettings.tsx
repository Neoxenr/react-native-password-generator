import { useCallback, useState } from 'react';
import { Text, View, Switch, Button, StyleSheet } from 'react-native';

type SwitchItem = {
  label: string;
  value: boolean;
};

const SETTINGS_ITEMS: SwitchItem[] = [
  {
    label: 'Uppercase letters',
    value: false,
  },
  {
    label: 'Lowercase letters',
    value: false,
  },
  {
    label: 'Number',
    value: false,
  },
  {
    label: 'Symbols',
    value: false,
  },
];

export const PasswordSettings = () => {
  const [settings, setSettings] = useState<SwitchItem[]>(SETTINGS_ITEMS);

  const handleChangeValue = useCallback(
    (name: string) => {
      const newSettings = settings.map((item) =>
        item.label === name ? { ...item, value: !item.value } : item
      );

      setSettings(newSettings);
    },
    [settings]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Characters length</Text>
        <Text>10</Text>
      </View>
      <View style={styles.actions}>
        {settings.map(({ label, value }) => (
          <Switch
            key={label}
            value={value}
            onChange={() => handleChangeValue(label)}
          />
        ))}
      </View>
      <View>
        <Text>Strength</Text>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <Button title="Generate" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  header: {
    flexDirection: 'row',
    columnGap: 16,
  },
  actions: {
    alignItems: 'flex-start',
  },
});
