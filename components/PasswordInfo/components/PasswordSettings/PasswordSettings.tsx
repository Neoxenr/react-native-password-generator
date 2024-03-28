import { FC, useCallback, useMemo, useState } from 'react';
import { Text, View, Switch, Button, StyleSheet } from 'react-native';
import { SETTINGS_ITEMS } from './const/settings-items';
import { SettingsItem } from './types/settings-item';
import { generatePassword } from './utils/generate-password';
import Slider from '@react-native-community/slider';

type PasswordSettingsProps = {
  onChangePassword: (_newPassword: string) => void;
};

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;

const SLIDER_STEP = 1;

export const PasswordSettings: FC<PasswordSettingsProps> = ({
  onChangePassword,
}) => {
  const [passwordLength, setPasswordLength] =
    useState<number>(MIN_PASSWORD_LENGTH);
  const [settings, setSettings] = useState<SettingsItem[]>(SETTINGS_ITEMS);

  const isDisabled = useMemo(
    () => !settings.some(({ isSelected }) => isSelected),
    [settings]
  );

  const handleSettingsChanging = useCallback(
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

    const newPassword = generatePassword(characters, passwordLength);

    onChangePassword(newPassword);
  }, [settings, passwordLength, onChangePassword]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Characters length</Text>
        <Text>{passwordLength}</Text>
      </View>
      <Slider
        step={SLIDER_STEP}
        value={passwordLength}
        minimumValue={MIN_PASSWORD_LENGTH}
        maximumValue={MAX_PASSWORD_LENGTH}
        onValueChange={setPasswordLength}
      />
      <View style={styles.actions}>
        {settings.map(({ label, isSelected }) => (
          <Switch
            key={label}
            value={isSelected}
            onChange={() => handleSettingsChanging(label)}
          />
        ))}
      </View>
      <View>
        <Text>Strength</Text>
      </View>
      <Button
        title="generate"
        disabled={isDisabled}
        onPress={handlePasswordGenerating}
      />
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
