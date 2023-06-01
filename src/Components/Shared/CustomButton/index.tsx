// libs
import { FC } from 'react';
// styled-components
import { CusstomButtonWraper, CusstomButton } from './CustomButton.styled';

type CustomButtonProps = {
  title: string;
  handleClick?: any;
};
const CustomButton: FC<CustomButtonProps> = ({ title, handleClick }) => {
  return (
    <CusstomButtonWraper>
      <CusstomButton onClick={handleClick}>{title}</CusstomButton>
    </CusstomButtonWraper>
  );
};

export default CustomButton;
