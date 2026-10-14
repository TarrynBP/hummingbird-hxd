import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TooltipProvider } from '../src/components/ui/tooltip';

import '../src/index.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <TooltipProvider>
              <Story />
            </TooltipProvider>
          </MemoryRouter>
        </QueryClientProvider>
      </HelmetProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#ffffff' },
        muted: { name: 'muted', value: '#f4f4f5' },
        dark: { name: 'dark', value: '#0a0a0a' },
      },
    },
    viewport: {
      options: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
