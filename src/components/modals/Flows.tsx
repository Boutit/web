import { ReactNode } from 'react';
import { flowsComponents } from './flowsComponents';
import WebFlowStackNavigator from './WebFlowStackNavigator';

type FlowsProps = {
  children: ReactNode;
};

export default function Flows({ children }: FlowsProps) {
  return (
    <WebFlowStackNavigator flows={flowsComponents}>
      {children}
    </WebFlowStackNavigator>
  );
}
