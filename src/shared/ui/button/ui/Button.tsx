type Props = {
  type?: "button" | "submit";
  text: string;
  handleClick: () => void;
};

export default function Button({ type = "button", text, handleClick }: Props) {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
}
