import { Box, Container, Text } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'
import { createFileRoute } from '@tanstack/react-router'
import Carousel from '../../components/UserSettings/Carousel'
// import boat_1 from '../../assets/images/boat_1.jpg'
// import boat_2 from '../../assets/images/boat_2.jpg'
// import boat_3 from '../../assets/images/boat_3.jpg'

import { UserOut } from '../../client'

export const Route = createFileRoute('/_layout/')({
  component: Dashboard,
})

function Dashboard() {
  const queryClient = useQueryClient()
  const currentUser = queryClient.getQueryData<UserOut>('currentUser')

  const slides = [
    'https://images.unsplash.com/photo-1676314336300-922f2ce0eb86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJvYXQlMjBwb3J0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1432071079086-3f012ce3f1ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvYXQlMjBwb3J0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1646639179031-1f4e3dcf4e6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvYXQlMjBwb3J0fGVufDB8fDB8fHww',
  ]
  return (
    <>
      <Container maxW="full">
        <Box pt={12}>
          <Box w="100%" mt={8}>
            <Carousel slides={slides} />
          </Box>
          <Text fontSize="2xl" pt={6}>
            Hi, {currentUser?.full_name || currentUser?.email}
          </Text>
          <Text pb={8}>
            Welcome to BolaBuddy, get ready for your next boating adventure!
          </Text>
        </Box>
      </Container>
    </>
  )
}

export default Dashboard
