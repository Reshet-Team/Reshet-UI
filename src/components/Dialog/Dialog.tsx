import clsx from "clsx";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import React from "react";
import { Button, type ButtonProps } from "../Button/Button";
import Primitives from "./primitives";
import styles from "./Dialog.module.scss";

const DialogRoot = Primitives.Root;
const DialogTitle = Primitives.Title;
const DialogDescription = Primitives.Description;

type DialogTriggerProps = Omit<BaseDialog.Trigger.Props, "render"> &
  Pick<ButtonProps, "variant" | "size">;

function DialogTrigger({
  variant = "secondary",
  size,
  children,
  ...props
}: DialogTriggerProps) {
  return (
    <BaseDialog.Trigger
      render={<Button variant={variant} size={size} />}
      {...props}
    >
      {children}
    </BaseDialog.Trigger>
  );
}

type DialogCloseProps = Omit<BaseDialog.Close.Props, "render"> &
  Pick<ButtonProps, "variant" | "size">;

function DialogClose({
  variant = "secondary",
  size,
  children,
  ...props
}: DialogCloseProps) {
  return (
    <BaseDialog.Close
      render={<Button variant={variant} size={size} />}
      {...props}
    >
      {children}
    </BaseDialog.Close>
  );
}

export interface DialogContentProps extends BaseDialog.Popup.Props {
  children: React.ReactNode;
  showCloseButton?: boolean;
}

function DialogContent({
  children,
  showCloseButton = true,
  ...popupProps
}: DialogContentProps) {
  return (
    <Primitives.Portal>
      <Primitives.Backdrop />
      <Primitives.Popup {...popupProps}>
        {showCloseButton && (
          <DialogClose
            variant="ghost"
            size="sm"
            aria-label="Close dialog"
            className={styles.closeButton}
          >
            <X size={16} aria-hidden="true" />
          </DialogClose>
        )}
        {children}
      </Primitives.Popup>
    </Primitives.Portal>
  );
}

function DialogActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(styles.actions, className)} {...props}>
      {children}
    </div>
  );
}

export {
  DialogRoot,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContent,
  DialogActions,
};
