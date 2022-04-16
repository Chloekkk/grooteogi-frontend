import {
  EmptyDiv,
  SCheckboxComponentBox,
  SCheckboxComponentText,
  StyledCheckbox,
  StyledCheckboxDetail,
  StyledCheckboxInput,
  StyledCheckboxText,
} from './style';

interface CheckBoxProps extends SCheckboxComponentBox, SCheckboxComponentText {
  label: string;
  checked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({
  label,
  link,
  width = '100%',
  height = '30px',
  paddingLeft,
  onClick,
  checked = false,
}: CheckBoxProps) => {
  const box = { width, height, paddingLeft };
  return (
    <StyledCheckbox {...box}>
      <EmptyDiv>
        <StyledCheckboxInput type={'checkbox'} onClick={onClick} checked={checked} />
        <StyledCheckboxText>{label}</StyledCheckboxText>
      </EmptyDiv>
      {link && <StyledCheckboxDetail>보기</StyledCheckboxDetail>}
    </StyledCheckbox>
  );
};

export default Checkbox;
