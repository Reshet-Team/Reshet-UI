import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import { styled } from "../../utilities/styled";
import styles from "./Fieldset.module.scss";

export default {
  Root: styled(BaseFieldset.Root, styles.root),
  Legend: styled(BaseFieldset.Legend, styles.legend),
};
