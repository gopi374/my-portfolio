import React, { useState } from 'react';
import { FileText, Mail, X } from 'lucide-react';
import { Link } from '../Link';
import { PdfViewer } from '../PdfViewer';

export function ActionButtons() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setShowResume(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          <span>View Resume</span>
        </button>
        <Link
          href="#contact"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-transform duration-300 transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          <span>Contact Me</span>
        </Link>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* PDF Viewer */}
            <div className="py-4">
              <PdfViewer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
