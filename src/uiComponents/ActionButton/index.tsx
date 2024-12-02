import { FC, HTMLProps, ReactNode } from 'react';

interface IProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

const ActionButton: FC<IProps> = ({ children, ...props }: IProps) => {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
};

export default ActionButton;
