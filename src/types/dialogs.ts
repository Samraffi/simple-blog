export interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'warning';
  isOpen: boolean;
  onClose: () => void;
}

export type AlertType = 'error' | 'success' | 'warning';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
