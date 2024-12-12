import {AppShell, Burger, Group, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from "react";
import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";
import {HomeHeader} from "@/layouts/HomeLayout/HomeHeader";

interface HomeLayoutProps {
  /**
   * Should be HomeNavbar
   */
  navbar: React.ReactNode;
  onRubyTextDisplayModeChange: (displayMode: RubyTextDisplayMode) => void;
  children: React.ReactNode;
}

export function HomeLayout({
  navbar,
  onRubyTextDisplayModeChange,
  children
}: HomeLayoutProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <HomeHeader
        desktopOpened={desktopOpened}
        mobileOpened={mobileOpened}
        toggleMobile={toggleMobile}
        toggleDesktop={toggleDesktop}
        onRubyTextDisplayModeChange={onRubyTextDisplayModeChange}
      />

      {navbar}

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}