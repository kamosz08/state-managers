type Props = {
  label: string;
  isEnabled: boolean;
  handleToggle: (key: string, val: boolean) => void;
};

export function Toggle({ isEnabled, label, handleToggle }: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handleToggle(label, !isEnabled);
  };

  return (
    <div className="flex justify-center" key={label}>
      <label
        className="relative flex justify-between items-center group p-2 text-xl"
        htmlFor={label}
      >
        {label}
        <input
          id={label}
          checked={isEnabled}
          onChange={handleChange}
          type="checkbox"
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1" />
      </label>
    </div>
  );
}
