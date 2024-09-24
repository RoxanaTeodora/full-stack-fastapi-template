import React from 'react'
import {
  Badge,
  Container,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  useColorMode,
} from '@chakra-ui/react'

const Appearance: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Container maxW="full">
        <Heading size="sm" py={4}>
          Appearance
        </Heading>
        <RadioGroup onChange={toggleColorMode} value={colorMode}>
          <Stack>
            {/* TODO: Add system default option */}
            <Radio value="light" colorScheme="blue">
              Light mode
              <Badge ml="1" colorScheme="blue">
                Default
              </Badge>
            </Radio>
            <Radio value="dark" colorScheme="blue">
              Dark mode
            </Radio>
          </Stack>
        </RadioGroup>
      </Container>
    </>
  )
}
export default Appearance
