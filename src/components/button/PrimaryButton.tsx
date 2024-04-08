import Button, { ButtonProps } from "./Button";

export default function PrimaryButton({ ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className="bg-primary rounded-full px-2 py-1 max-w-64"
    ></Button>
  );
}
