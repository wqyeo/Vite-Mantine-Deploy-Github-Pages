import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import {AppShell, Burger, Group, SegmentedControl, Space, Text} from '@mantine/core';
import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";


interface HomeHeaderProps {
  desktopOpened: boolean;
  mobileOpened: boolean;
  toggleMobile: () => void;
  toggleDesktop: () => void;
  onRubyTextDisplayModeChange: (displayMode: RubyTextDisplayMode) => void;
}

export function HomeHeader(
  {desktopOpened, mobileOpened, toggleMobile, toggleDesktop, onRubyTextDisplayModeChange}: HomeHeaderProps
) {
  return (
    <AppShell.Header>
      <Group justify="space-between" gap="xs" h="100%" px="md">
        <Group>
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Space w="xl" />
          <Text>Japanese Word</Text>
        </Group>

        <Group>
          <SegmentedControl
            data={[RubyTextDisplayMode.POPOVER_TEXT, RubyTextDisplayMode.RUBY_TEXT]}
            onChange={(e) => onRubyTextDisplayModeChange(e as RubyTextDisplayMode)}
          />
          <Space w="xl" />
          <ColorSchemeToggle/>
        </Group>
      </Group>
    </AppShell.Header>
  )
}