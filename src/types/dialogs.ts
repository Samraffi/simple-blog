export interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'warning';
  isOpen: boolean;
  onClose: () => void;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
