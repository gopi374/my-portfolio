import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="ripple-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="loading-text"><h5>Loading...</h5></div>
          </div>

          <style jsx>{`
            .ripple-container {
              position: relative;
              width: 300px;
              height: 300px;
            }

            .loading-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-size: 1.25rem;
              font-weight: 500;
              z-index: 10;
              text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
              letter-spacing: 1px;
            }

            .circle {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 2px solid;
              animation: ripple 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
              transform: translate(-50%, -50%);
            }

            .circle:nth-child(1) {
              animation-delay: 0s;
              border-color: #0099ff;
            }
            .circle:nth-child(2) {
              animation-delay: 0.5s;
              border-color: #2277ff;
            }
            .circle:nth-child(3) {
              animation-delay: 1s;
              border-color: #4455ff;
            }
            .circle:nth-child(4) {
              animation-delay: 1.5s;
              border-color: #6633ff;
            }
            .circle:nth-child(5) {
              animation-delay: 2s;
              border-color: #8811ff;
            }

            @keyframes ripple {
              0% {
                width: 40px;
                height: 40px;
                opacity: 1;
              }
              100% {
                width: 300px;
                height: 300px;
                opacity: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}