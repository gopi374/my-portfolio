import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 3500ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}