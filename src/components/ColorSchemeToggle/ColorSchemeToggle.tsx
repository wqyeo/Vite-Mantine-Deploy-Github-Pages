import React, {useState} from "react";
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(colorScheme === 'light');

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  const onSwitchChange = () => {
    if (checked) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
    setChecked(!checked)
  }

  return <Switch
    size="md"
    color="dark.4"
    onLabel={sunIcon}
    offLabel={moonIcon}
    checked={checked}
    onChange={onSwitchChange}
  />;
}