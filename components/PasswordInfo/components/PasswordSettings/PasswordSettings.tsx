import { FC, useCallback, useMemo, useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { SETTINGS_ITEMS } from './const/settings-items';
import { SettingsItem } from './types/settings-item';
import { generatePassword } from './utils/generate-password';
import Slider from '@react-native-community/slider';
import Checkbox from 'expo-checkbox';

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

  const strengthLength = useMemo(
    () => settings.filter(({ isSelected }) => isSelected).length,
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
        <Text style={styles.info}>Characters Length</Text>
        <Text style={styles.length}>{passwordLength}</Text>
      </View>
      <Slider
        style={styles.slider}
        step={SLIDER_STEP}
        value={passwordLength}
        minimumValue={MIN_PASSWORD_LENGTH}
        maximumValue={MAX_PASSWORD_LENGTH}
        minimumTrackTintColor="#7ac835"
        maximumTrackTintColor="#000000"
        thumbTintColor="#fff"
        onValueChange={setPasswordLength}
      />
      <View style={styles.actions}>
        {settings.map(({ label, isSelected }) => (
          <TouchableOpacity
            key={label}
            style={styles.checkbox}
            onPress={() => handleSettingsChanging(label)}
          >
            <Checkbox
              value={isSelected}
              onValueChange={() => handleSettingsChanging(label)}
              color={isSelected ? '#7AC835' : undefined}
            />
            <Text style={styles.checkboxName}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.strength}>
        <Text style={styles.strengthInfo}>Strength</Text>
        <View style={styles.strengthLevels}>
          {[...Array(strengthLength).keys()].map((_, i) => (
            <View
              key={i}
              style={[styles.strengthLevel, styles.filledStrengthLevel]}
            ></View>
          ))}
          {[...Array(settings.length - strengthLength).keys()].map((_, i) => (
            <View
              key={i}
              style={[styles.strengthLevel, styles.emptyStrengthLevel]}
            ></View>
          ))}
        </View>
      </View>
      <Pressable
        disabled={isDisabled}
        style={[
          styles.confirmButton,
          isDisabled ? styles.disabledConfirmButton : null,
        ]}
        onPress={handlePasswordGenerating}
      >
        <Text style={styles.confirmButtonText}>Generate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    padding: 16,
    width: '100%',
    backgroundColor: '#242323',
  },
  header: {
    columnGap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    color: 'white',
  },
  length: {
    fontSize: 20,
    color: '#7AC835',
  },
  actions: {
    alignItems: 'flex-start',
    rowGap: 20,
  },
  checkbox: {
    flexDirection: 'row',
    columnGap: 20,
  },
  checkboxName: {
    color: 'white',
  },
  slider: {
    width: '100%',
  },
  strength: {
    padding: 12,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  strengthInfo: {
    color: 'gray',
    textTransform: 'uppercase',
    opacity: 0.7,
  },
  strengthLevels: {
    columnGap: 4,
    flexDirection: 'row',
  },
  strengthLevel: {
    width: 8,
    height: 16,
    borderColor: '#fff',
    borderWidth: 1,
  },
  filledStrengthLevel: {
    backgroundColor: 'yellow',
  },
  emptyStrengthLevel: {
    backgroundColor: '#000',
  },
  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4096ff',
  },
  disabledConfirmButton: {
    backgroundColor: 'gray',
  },
  confirmButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase',
  },
});
