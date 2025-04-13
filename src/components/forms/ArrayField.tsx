import { ReactNode } from 'react';

interface ArrayFieldProps {
  label: string;
  items: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
  renderItem: (item: string, index: number) => ReactNode;
}

const ArrayField = ({
  label,
  items,
  onAdd,
  onRemove,
  onChange,
  renderItem
}: ArrayFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {items.map((item, index) => (
      <div key={index} className="flex gap-2 mb-2">
        {renderItem(item, index)}
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="px-3 py-2 text-red-600 hover:text-red-800"
        >
          Удалить
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="text-cyan-600 hover:text-cyan-800"
    >
      + Добавить элемент
    </button>
  </div>
);

export default ArrayField;
