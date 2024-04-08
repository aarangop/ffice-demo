export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <button className="rounded-full p-2" {...props}>
      {title}
    </button>
  );
}
