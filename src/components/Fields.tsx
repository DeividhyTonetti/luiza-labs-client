import React, { useState } from 'react';
import { TextInput, Button, Container } from '@mantine/core';

import { Select } from '@mantine/core';

import {
  Paper,
  Title,
  Text,
} from '@mantine/core';

import { ActionIcon, useMantineTheme } from '@mantine/core';
import { IconUserPlus, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const Fields = (props: any) => {

  const theme = useMantineTheme();
  const [value, setValue] = useState('');

  const customerSelectData = props?.customers?.map( (value: any) => {
    return {
      value: value.id,
      label: value.name
    }
  })

  const productsSelectData = props?.pageProducts?.map( (value: any) => {
    return {
      value: value.id,
      label: value.title
    }
  })

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
        withAsterisk
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)} 
        rightSection={
          <ActionIcon 
            size={32} 
            radius="xl" 
            color={theme.primaryColor} 
            variant="filled"
            onClick={() => props.onAddCustomer(value)}
          >
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
          radius="xl"
          data={customerSelectData}
        />
        <Select
          label="Escolha o Produto"
          placeholder="Escolha o Produto"
          radius="xl"
          data={productsSelectData}
        />
        <Button fullWidth mt="xl" radius="xl">
          Adicionar ao Carrinho
        </Button>
      </Paper>
    </Container>
  );
}

export default Fields;
