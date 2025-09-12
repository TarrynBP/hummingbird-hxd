import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLoading } from '@/contexts/LoadingContext';

interface RefreshButtonProps {
  onRefresh?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ 
  onRefresh, 
  className = '',
  size = 'md' 
}) => {
  const { isRefreshing, startRefresh, stopRefresh } = useLoading();

  const handleRefresh = async () => {
    startRefresh();
    
    try {
      // Call the custom refresh function if provided
      if (onRefresh) {
        await onRefresh();
      } else {
        // Default: reload the page
        window.location.reload();
      }
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      // Stop refresh after a minimum time to show the animation
      setTimeout(() => {
        stopRefresh();
      }, 1000);
    }
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <Button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={`${sizeClasses[size]} rounded-full bg-mint-teal hover:bg-mint-teal-dark text-white transition-all duration-200 ${className}`}
      title="Refresh page"
    >
      <RefreshCw 
        className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} 
      />
    </Button>
  );
};

export default RefreshButton;
