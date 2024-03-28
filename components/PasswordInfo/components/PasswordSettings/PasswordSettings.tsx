import { FC, useCallback, useMemo, useState } from 'react';
import { Text, View, Switch, Button, StyleSheet } from 'react-native';
import { SETTINGS_ITEMS } from './const/settings-items';
import { SettingsItem } from './types/settings-item';
import { generatePassword } from './utils/generate-password';

type PasswordSettingsProps = {
  onChangePassword: (_newPassword: string) => void;
};

export const PasswordSettings: FC<PasswordSettingsProps> = ({
  onChangePassword,
}) => {
  const [settings, setSettings] = useState<SettingsItem[]>(SETTINGS_ITEMS);

  const isDisabled = useMemo(() => !settings.some(({isSelected}) => isSelected), [settings])

  const handleChangeSettings = useCallback(
    (name: string) => {
      const newSettings = settings.map((item) =>
        item.label === name ? { ...item, isSelected: !item.isSelected } : item
      );

      setSettings(newSettings);
    },
    [settings]
  );

  const handlePasswordGenerating = useCallback(() => {
    const characters = settings
      .filter(({ isSelected }) => isSelected)
      .reduce(
        (resultCharacters, item) => resultCharacters.concat(item.characters),
        [] as string[]
      );

    const newPassword = generatePassword(characters, 10);

    onChangePassword(newPassword);
  }, [settings, onChangePassword]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Characters length</Text>
        <Text>10</Text>
      </View>
      <View style={styles.actions}>
        {settings.map(({ label, isSelected }) => (
          <Switch
            key={label}
            value={isSelected}
            onChange={() => handleChangeSettings(label)}
          />
        ))}
      </View>
      <View>
        <Text>Strength</Text>
      </View>
      <Button title="generate" disabled={isDisabled} onPress={handlePasswordGenerating} />
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
