import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Spinner */}
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`}
        >
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-mint-teal rounded-full animate-spin"></div>
        </div>
        {/* Inner rotating dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-mint-teal rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading Text */}
      {text && (
        <p
          className={`${textSizeClasses[size]} text-gray-600 font-medium animate-pulse`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">{spinner}</div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
