import Button, { ButtonProps } from "./Button";

export default function SecondaryButton({ ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className="bg-secondary rounded-full px-2 py-1 max-w-64"
    ></Button>
  );
}
