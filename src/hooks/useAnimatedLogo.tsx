import { useState } from 'react';

function useAnimatedLogo() {
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 1000); // Animation duration
  };

  return { isLogoAnimating, handleLogoClick };
}

export default useAnimatedLogo;