import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { AnimationController } from "./types";

export type AnimateIconRegistration = {
  id: symbol;
  controller: AnimationController;
};

export type AnimateIconContextValue = {
  register: (registration: AnimateIconRegistration) => void;
  unregister: (id: symbol) => void;
  playAll: (variant?: string) => void;
  stopAll: () => void;
  resetAll: () => void;
};

export const AnimateIconContext = createContext<AnimateIconContextValue | null>(null);

export function useAnimateIconContext(): AnimateIconContextValue | null {
  return useContext(AnimateIconContext);
}
