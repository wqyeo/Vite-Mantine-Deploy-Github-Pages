import {AppShell, ScrollArea, Skeleton, TextInput, UnstyledButton} from '@mantine/core';
import { useState, useRef } from 'react';

interface HomeNavbarProps {
  sections: string[];
  activeSection: string | undefined;
  onSectionChange: (section: string) => void;
}

export function HomeNavbar({
  sections,
  activeSection,
  onSectionChange,
}: HomeNavbarProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = sections.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  if (sections.length === 0) {
    return (<AppShell.Navbar p="md">
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm"/>
        ))}
    </AppShell.Navbar>)
  }

 const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
      disabled={item === activeSection}
      onClick={() => onSectionChange(item)}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <AppShell.Navbar p="md">
        <TextInput
          value={query}
          onChange={(event: { currentTarget: { value: any; }; }) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event: { key: string; preventDefault: () => void; }) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current: number) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search Entries"
        />
      <ScrollArea h="90%" type="always" mt="md" viewportRef={viewportRef} scrollbars="y">
          {items}
      </ScrollArea>
    </AppShell.Navbar>
  )
}