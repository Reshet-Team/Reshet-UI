import { Field as BaseField } from "@base-ui/react/field";
import Primitives from "./primitives";
import styles from "./Field.module.scss";

const FieldRoot = Primitives.Root;

export type FieldLabelIndicator = "required" | "optional";

export interface FieldLabelProps extends BaseField.Label.Props {
  indicator?: FieldLabelIndicator;
}

function FieldLabel({ indicator, children, ...props }: FieldLabelProps) {
  return (
    <Primitives.Label {...props}>
      {children}
      {indicator === "required" && (
        <span className={styles.indicatorRequired} aria-hidden>
          *
        </span>
      )}
      {indicator === "optional" && (
        <span className={styles.indicatorOptional}>(optional)</span>
      )}
    </Primitives.Label>
  );
}

const FieldControl = Primitives.Control;
const FieldDescription = Primitives.Description;
const FieldError = Primitives.Error;
const FieldValidity = Primitives.Validity;
const FieldItem = Primitives.Item;

export {
  FieldRoot,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldValidity,
  FieldItem,
};
