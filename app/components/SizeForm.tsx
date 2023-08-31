interface IProps {
  size: string;
  setSize: (value: string) => void;
}

const SizeForm = ({ size, setSize }: IProps) => {
  const onOptionChange = (e: { target: { value: string; }; }) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <input
            className="hidden"
            type="radio"
            name="size"
            value="S"
            id="S"
            checked={size === "S"}
            onChange={onOptionChange}
          />

          <label
            className={`${
              size === "S" && "border-lime-600"
            } p-1 border-2 border-gray-400 cursor-pointer`}
            htmlFor="S"
          >
            <span className="text-xs font-semibold uppercase">S</span>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            type="radio"
            name="size"
            value="M"
            id="M"
            checked={size === "M"}
            onChange={onOptionChange}
          />

          <label
            className={`${
              size === "M" && "border-lime-600"
            } p-1 border-2 border-gray-400 cursor-pointer`}
            htmlFor="M"
          >
            <span className="text-xs font-semibold uppercase">M</span>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            type="radio"
            name="size"
            value="L"
            id="L"
            checked={size === "L"}
            onChange={onOptionChange}
          />
          <label
            className={`${
              size === "L" && "border-lime-600"
            }  p-1 border-2 border-gray-400 cursor-pointer`}
            htmlFor="L"
          >
            <span className="text-xs font-semibold uppercase">L</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SizeForm;
