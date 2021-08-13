import { Input, Stack, Text } from '@chakra-ui/react'
import { ErrorMessage, useField } from 'formik'
import React from 'react'

export default function TextField({ ...props }) {
  const [field, meta] = useField(props)

  return (
    <Stack spacing={0}>
      <Input
        w="full"
        size="lg"
        variant="flushed"
        isInvalid={meta.touched && meta.error}
        {...field}
        {...props}
        // autoComplete="off"
      />
      <ErrorMessage
        component={Text}
        color="red.400"
        fontSize="sm"
        name={field.name}
      ></ErrorMessage>
    </Stack>
  )
}
