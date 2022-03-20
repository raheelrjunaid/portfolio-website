import {
  ActionIcon,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section>
        <Container size="xl" py="xl">
          <div>
            <Text transform="uppercase">Hi! My name is</Text>
            <Title>
              Raheel Junaid
              <br /> I build online experiences.
            </Title>
          </div>
          <Text my="md">
            I&apos;m a software engineer that empowers users through developing
            applications. My apps/websites use full-stack web technologies to
            enhance the user experience with minimal painpoints.
          </Text>
          <Group mt="xl">
            <Button size="md">Portfolio</Button>
            <Button size="md" variant="subtle">
              Resume
            </Button>
            <ActionIcon size="lg" variant="transparent">
              <FaGithub size="1.5rem" />
            </ActionIcon>
            <ActionIcon size="lg">
              <FaYoutube size="1.5rem" />
            </ActionIcon>
          </Group>
        </Container>
      </section>
      <section>
        <Container py="xl" size="xl">
          <Grid px="xl">
            <Grid.Col span={3}>
              <Image
                radius="lg"
                alt="self portrait"
                src="/self-portrait.jpeg"
              />
            </Grid.Col>
            <Grid.Col span={9}>Rest</Grid.Col>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
