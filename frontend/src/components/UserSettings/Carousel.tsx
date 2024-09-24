import { useState, useRef } from 'react'
import { Box, Image, Flex, Circle } from '@chakra-ui/react'

interface CarouselProps {
  slides: string[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current

    if (distance > 50) {
      nextSlide()
    } else if (distance < -50) {
      previousSlide()
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <Box
      position="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      overflow="hidden"
      width="100%"
      height="auto"
    >
      <Flex
        transition="transform 0.4s ease-out"
        transform={`translateX(-${current * 100}%)`}
      >
        {slides.map((slide, index) => (
          <Box key={index} flex="none" width="100%">
            <Image
              src={slide}
              alt={`Slide ${index}`}
              objectFit="cover"
              width="100%"
              height="auto"
              maxH={{ base: '80%', lg: '700px' }} // 80% din viewport height pe mobile și 20% pe ecran mare
            />
          </Box>
        ))}
      </Flex>

      <Flex
        position="absolute"
        bottom="5px"
        left="0"
        width="100%"
        justify="center"
        gap="10px"
        p="10px"
      >
        {slides.map((_, index) => (
          <Circle
            key={index}
            size="12px"
            bg={index === current ? 'blue.400' : 'gray.300'}
            cursor="pointer"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Flex>
    </Box>
  )
}
