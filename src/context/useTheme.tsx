import React, { useContext } from 'react'
import { theme } from '../configs'

import { darkTheme } from '../styles/themes'

const { createContext, useState, useEffect } = React
type AvailableThemesProps = 'light' | 'dark'
type ColorModeContextProps = {
  colorMode: AvailableThemesProps
  toggleMode: () => void
  setSpecificTheme: (theme: AvailableThemesProps) => void
}
export const ColourModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps
)

type ColourModeProviderType = [
  AvailableThemesProps,
  () => void,
  (theme: AvailableThemesProps) => void
]

const availableThemes = {
  light: theme.className, // stitches' default theme
  dark: darkTheme.className,
}

const saveColorMode = (newMode: string) => {
  try {
    if (typeof newMode === 'string') window.localStorage.setItem('color-mode', newMode)
  } catch (e) {
    console.warn(e)
  }
}

const getSavedColorModePreference = (): AvailableThemesProps => {
  try {
    const savedMode = window.localStorage.getItem('color-mode')

    if (typeof savedMode === 'string') {
      return savedMode as AvailableThemesProps
    } else {
      return 'light'
    }
  } catch (e) {
    console.warn(e)

    return 'light'
  }
}

const getMediaTheme = (): AvailableThemesProps => {
  const mql = matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  } else {
    return 'light'
  }
}

const useColorMode = (): ColourModeProviderType => {
  const [colorMode, setColorMode] = useState<AvailableThemesProps>('light')
  const html = document.documentElement

  const applyColorMode = (newMode: AvailableThemesProps) => {
    html.classList.remove(availableThemes[colorMode])
    html.classList.add(availableThemes[newMode])
    setColorMode(newMode)
  }

  let savedColorMode = getSavedColorModePreference()

  if (savedColorMode == null) {
    savedColorMode = getMediaTheme()
  }

  html.classList.add(availableThemes[savedColorMode])
  useEffect(() => {
    setColorMode(savedColorMode)
  }, [savedColorMode])

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    applyColorMode(e.matches ? 'dark' : 'light')
  })

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    applyColorMode(e.matches ? 'light' : 'dark')
  })

  const toggleMode = (): void => {
    const keys = Object.keys(availableThemes)
    let index = keys.indexOf(colorMode)

    if (index === keys.length - 1) {
      index = 0
    } else if (index >= 0) {
      index = index + 1
    }
    const newMode = keys[index]
    applyColorMode(newMode as AvailableThemesProps)
    saveColorMode(newMode)
  }
  const setSpecificTheme = (themeToApply: AvailableThemesProps) => {
    applyColorMode(themeToApply)
    saveColorMode(themeToApply)
  }

  return [colorMode, toggleMode, setSpecificTheme]
}

type ColourModeProviderProps = {
  children: React.ReactNode
}

export const ColourModeProvider = ({ children }: ColourModeProviderProps) => {
  const [colorMode, toggleMode, setSpecificTheme] = useColorMode()

  return (
    <ColourModeContext.Provider
      value={{
        colorMode: colorMode,
        toggleMode: toggleMode,
        setSpecificTheme,
      }}
    >
      {children}
    </ColourModeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ColourModeContext)
}
