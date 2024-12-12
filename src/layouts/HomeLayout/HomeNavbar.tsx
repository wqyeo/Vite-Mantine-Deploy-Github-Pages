import { AppShell, Button, Skeleton } from '@mantine/core';


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
  if (sections.length === 0) {
    return (<AppShell.Navbar p="md">
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm"/>
        ))}
    </AppShell.Navbar>)
  }

  return (
    <AppShell.Navbar p="md">
      {
        sections.map((section, index) => {
          const color = (section === activeSection) ? "grape" : "indigo";
          const variant = (section === activeSection) ? "light" : "subtle";

          return (
            <Button key={index} variant={variant} color={color} size="lg" radius="xs" onClick={() => onSectionChange(section)}>
              {section}
            </Button>
          )
        })
      }
    </AppShell.Navbar>
  )
}