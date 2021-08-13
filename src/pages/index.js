import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Stack,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextField from '../components/TextField'

const initalSignUpDetails = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Index = () => {
  const toast = useToast()

  const validate = Yup.object({
    firstName: Yup.string()
      .required('This field is required')
      .max(10, 'Must be 10 chars at most'),
    lastName: Yup.string()
      .required('This field is required')
      .max(20, 'Must be 20 chars at most'),
    email: Yup.string()
      .required('This field is required')
      .email('Must be a valid email'),
    password: Yup.string()
      .required('This field is required')
      .min(7, 'Must be 7 chars at least'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('This field is required'),
    // .min(7, 'Must be 7 chars at least'),
  })

  const handleSubmit = (values) => {
    console.log(values)
    toast({
      title: `Welcome!`,
      position: 'top-right',
      variant: 'left-accent',
      status: 'success',
      description: 'You have been signed up successfully',
      isClosable: true,
    })
  }

  return (
    <Center bg="gray.50" height="100vh">
      <Formik
        initialValues={initalSignUpDetails}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <VStack w="sm" bg="white" p={8} spacing={12} rounded={6}>
            <Heading>Sign Up</Heading>
            <Box w="full">
              <Form>
                <Stack spacing={3}>
                  <TextField
                    name="firstName"
                    placeholder="First Name"
                    label="firstName"
                  />
                  <TextField
                    name="lastName"
                    placeholder="Last Name"
                    label="lastName"
                  />
                  <TextField
                    name="email"
                    placeholder="Email"
                    type="email"
                    label="email"
                  />
                  <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    label="password"
                  />
                  <TextField
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    label="confirmPassword"
                  />
                </Stack>

                <HStack mt={8}>
                  <Button w="full" type="submit" size="lg" colorScheme="teal">
                    Sign Up
                  </Button>
                  <Button
                    w={32}
                    type="reset"
                    size="lg"
                    variant="outline"
                    colorScheme="teal"
                  >
                    Reset
                  </Button>
                </HStack>
              </Form>
            </Box>
          </VStack>
        )}
      </Formik>
    </Center>
  )
}
export default Index
