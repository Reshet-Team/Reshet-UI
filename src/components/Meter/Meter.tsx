import { Meter as BaseMeter } from "@base-ui/react/meter";
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from "./primitives";
import styles from "./Meter.module.scss";

export type MeterColor = "default" | "success" | "warning" | "danger";

export interface MeterProps extends BaseMeter.Root.Props {
  color?: MeterColor;
}

export function Meter({ color = "default", children, ...props }: MeterProps) {
  return (
    <MeterRoot data-color={color} {...props}>
      {children}
    </MeterRoot>
  );
}

function MeterTrackWithIndicator(props: BaseMeter.Track.Props) {
  return (
    <MeterTrack {...props}>
      <MeterIndicator />
    </MeterTrack>
  );
}

Meter.Track = MeterTrackWithIndicator;
Meter.Label = MeterLabel;
Meter.Value = MeterValue;
Meter.Header = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.header}>{children}</div>
);
