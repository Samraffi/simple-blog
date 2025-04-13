interface FormActionsProps {
  onCancel: () => void;
}

const FormActions = ({ onCancel }: FormActionsProps) => (
  <div className="flex gap-4 pt-6">
    <button
      type="button"
      onClick={onCancel}
      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
    >
      Отмена
    </button>
    <button
      type="submit"
      className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
    >
      Создать рецепт
    </button>
  </div>
);

export default FormActions;
