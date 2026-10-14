import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';

import * as projectAnnotations from './preview';

const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);

/**
 * jsdom does not implement a handful of DOM APIs that Radix UI primitives rely
 * on (pointer capture, ResizeObserver, matchMedia, scrollIntoView). These are
 * safe, minimal shims so interaction tests can run in the jsdom environment.
 */
if (typeof window !== 'undefined') {
  if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = () => false;
  }
  if (!Element.prototype.setPointerCapture) {
    Element.prototype.setPointerCapture = () => {};
  }
  if (!Element.prototype.releasePointerCapture) {
    Element.prototype.releasePointerCapture = () => {};
  }
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = () => {};
  }

  if (!('ResizeObserver' in window)) {
    class ResizeObserverStub {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    // @ts-expect-error jsdom shim
    window.ResizeObserver = ResizeObserverStub;
  }

  if (!('IntersectionObserver' in window)) {
    class IntersectionObserverStub {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
      root = null;
      rootMargin = '';
      thresholds = [];
    }
    // @ts-expect-error jsdom shim
    window.IntersectionObserver = IntersectionObserverStub;
  }

  if (!window.matchMedia) {
    window.matchMedia = (query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList;
  }
}
