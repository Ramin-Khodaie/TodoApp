import { useEffect, useState } from 'react'

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	return { toggleDarkMode }
}

export { useDarkMode }
