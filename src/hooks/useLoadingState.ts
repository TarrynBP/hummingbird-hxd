import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const useLoadingState = (initialLoading: boolean = true) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const queryClient = useQueryClient();

  // Detect if this is a page refresh
  useEffect(() => {
    const isRefresh = performance.navigation?.type === 1 || 
                     (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload';
    
    if (isRefresh) {
      // Clear any cached data on refresh to ensure fresh data
      queryClient.clear();
    }
  }, [queryClient]);

  useEffect(() => {
    if (isLoading) {
      // Check if we have cached data
      const hasCachedData = queryClient.getQueryData(['heroContent']) || 
                           queryClient.getQueryData(['services']) ||
                           queryClient.getQueryData(['testimonials']);

      if (hasCachedData) {
        // If we have cached data, show loading briefly then hide
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
        return;
      }

      // Simulate loading progress while waiting for Sanity data
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) {
            // Don't go to 100% until we actually have data
            return 90;
          }
          return prev + Math.random() * 10;
        });
      }, 150);

      // Set a maximum loading time of 5 seconds
      const maxLoadingTimer = setTimeout(() => {
        clearInterval(interval);
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(maxLoadingTimer);
      };
    }
  }, [isLoading, queryClient]);

  // Listen for successful data fetches
  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 1500; // Minimum 1.5 seconds loading time

    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.type === 'updated' && event.query.state.status === 'success') {
        // Check if we have the essential data loaded
        const heroData = queryClient.getQueryData(['heroContent']);
        const servicesData = queryClient.getQueryData(['services']);
        
        if (heroData && servicesData && isLoading) {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
          
          setLoadingProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, remainingTime + 500); // Add 500ms for smooth transition
        }
      }
    });

    return unsubscribe;
  }, [queryClient, isLoading]);

  return {
    isLoading,
    loadingProgress,
  };
};
