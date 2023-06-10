import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Container, Grid } from '@mantine/core';
import { randomId } from '@mantine/hooks';

import { Select } from '@mantine/core';


import {
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
} from '@mantine/core';

import { TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconUserPlus, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const Fields = (props: TextInputProps) => {

  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Seja muito bem vindo!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Essa é uma simples API da Luiza Labs :)
      </Text>

      <TextInput
        icon={<IconUserPlus size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        mt={20}
        rightSection={
          <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
            {theme.dir === 'ltr' ? (
              <IconArrowRight size="1.1rem" stroke={1.5} />
            ) : (
              <IconArrowLeft size="1.1rem" stroke={1.5} />
            )}
          </ActionIcon>
        }
        placeholder="Adicionar Cliente"
        rightSectionWidth={42}
        {...props}
      />

      <Paper withBorder shadow="md" p={30} mt={30} radius="lg">
        <Select
          label="Escolha o Cliente"
          placeholder="Escolha o Cliente"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
        <Select
          label="Escolha o Produto"
          placeholder="Escolha o Produto"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
        <Button fullWidth mt="xl">
          Adicionar ao Carrinho
        </Button>
      </Paper>
    </Container>
  );
}

export default Fields;
