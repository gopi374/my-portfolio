import { useState, useEffect } from 'react';

function useTheme() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, setIsDark: toggleTheme };
}

export default useTheme;