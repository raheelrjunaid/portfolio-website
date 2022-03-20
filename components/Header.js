import {
  Image,
  Header,
  Container,
  Group,
  Anchor,
  Button,
  Text,
} from "@mantine/core";
import React from "react";

export default function Main() {
  return (
    <Header py="md">
      <Container size="xl">
        <Group position="apart">
          <Image src="/logo.svg" width={60} alt="RDJ" />
          <Group spacing="xl">
            <Anchor color="gray">0. About</Anchor>
            <Anchor color="gray">1. Experience</Anchor>
            <Anchor color="gray">2. Portfolio</Anchor>
            <Anchor color="gray">3. Contact</Anchor>
            <Button variant="outline">Resume</Button>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
