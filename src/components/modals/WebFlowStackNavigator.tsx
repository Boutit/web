import React, { createContext, ReactNode, useContext } from 'react';
import { FlowStep } from './FlowProvider';

type WebFlowStackNavigatorProps = {
  children: ReactNode;
  flows: Record<string, React.FC>;
};

export type StackValue = {
  flow: string;
  step: FlowStep;
  data: Record<string, unknown>;
};

type WebFlowStackNavigatorContextType = {
  stack: StackValue[];
  setStack: React.Dispatch<React.SetStateAction<StackValue[]>>;
};

export const WebFlowStackNavigatorContext = createContext<
  WebFlowStackNavigatorContextType | undefined
>(undefined);

export const useWebFlowStackNavigatorContext = () => {
  const value = useContext(WebFlowStackNavigatorContext);
  if (!value) {
    throw new Error('WebFlowStackNavigatorContext requires a provider');
  }
  return value;
};

export default function WebFlowStackNavigator({
  children,
}: WebFlowStackNavigatorProps) {
  return <>{children}</>;
}
