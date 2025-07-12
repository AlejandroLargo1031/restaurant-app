type ButtonProps = {
  onClickbtn?: () => void;
  text?: string;
  classButton?: string;
  textColor?: string;
};

export default function Button({ onClickbtn, text = '', classButton = '' }: ButtonProps) {
  return (
    <button
      onClick={onClickbtn}
      type="submit"
      className={`w-full py-2 rounded px-2 ${classButton}`}
    >
      {text}
    </button>
  );
}