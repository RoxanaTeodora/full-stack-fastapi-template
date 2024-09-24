import { extendTheme } from '@chakra-ui/react'
import Appearance from './components/UserSettings/Appearance'

const disabledStyles = {
  _disabled: {
    backgroundColor: 'ui.main',
  },
}

const theme = extendTheme({
  colors: {
    ui: {
      main: '#25a1d4',
      secondary: '#EDF2F7',
      success: '#48BB78',
      danger: '#E53E3E',
      white: '#FFFFFF',
      dark: '#1A202C',
      darkSlate: '#252D3D',
      background: '#25a1d4',
      color: '#5AB2FF',
    },
  },

  components: {
    Button: {
      variants: {
        primary: {
          backgroundColor: 'ui.main',
          color: 'ui.white',
          _hover: {
            backgroundColor: '#A0DEFF',
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        danger: {
          backgroundColor: 'ui.danger',
          color: 'ui.white',
          _hover: {
            backgroundColor: '#E32727',
          },
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: 'ui.main',
            },
          },
        },
      },
    },
  },
})

export default theme
