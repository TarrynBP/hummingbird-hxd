import React from "react";

interface LoadingScreenProps {
  progress: number;
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  progress,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Hummingbird Logo/Icon */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto mb-4">
            {/* Animated hummingbird icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-teal to-soft-mauve rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-2 left-2 w-4 h-4 bg-mint-teal rounded-full animate-bounce"></div>
            <div
              className="absolute top-2 right-2 w-4 h-4 bg-soft-mauve rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-creamy-apricot rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          {/* Brand Name */}
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Hummingbird HXD
          </h1>
          <p className="text-gray-600 text-sm">Human Experience Design</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-mint-teal to-soft-mauve rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">
            {progress < 20 && "Connecting to Sanity..."}
            {progress >= 20 && progress < 40 && "Loading hero content..."}
            {progress >= 40 && progress < 60 && "Fetching services..."}
            {progress >= 60 && progress < 80 && "Loading testimonials..."}
            {progress >= 80 && progress < 95 && "Almost ready..."}
            {progress >= 95 && "Welcome!"}
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-mint-teal rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-soft-mauve rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-creamy-apricot rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
