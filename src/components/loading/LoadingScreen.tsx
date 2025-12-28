import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
        <p className="mt-4 text-gray-900 dark:text-white">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;