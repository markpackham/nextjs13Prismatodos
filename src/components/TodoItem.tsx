type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input type="text" />
      <label htmlFor={id}></label>
    </li>
  );
}
