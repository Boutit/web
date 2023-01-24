import VStack from '../../layout/VStack';

type OverlayBaseProps = {
  onPress?: React.MouseEventHandler;
};

export type OverlayProps = OverlayBaseProps;

export default function Overlay(props: OverlayProps) {
  const { onPress } = props;
  return <VStack background="backgroundOverlay" onClick={onPress} />;
}
