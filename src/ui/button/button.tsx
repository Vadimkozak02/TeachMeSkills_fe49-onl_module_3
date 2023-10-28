import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary';
  children: string | React.ReactNode;
  disabled?: boolean;
  role?: string;
  onClick: (arg?: string) => void;
  onFocus?: () => void;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  disabled,
  role,
  onClick,
  onFocus,
}) => {
  return (
    <ButtonWrapper
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={() => onClick('ok')}
      role={role}
      onFocus={() => (typeof onFocus === 'function' ? onFocus() : undefined)}
    >
      {children}
    </ButtonWrapper>
  );
};

const css = String.raw;

const ButtonWrapper = styled.button<{
  $variant: 'primary' | 'secondary';
  $fitContent?: boolean;
}>`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  width: ${({ $fitContent }) =>
    $fitContent ? 'fit-content' : 'calc(100% - 20px)'};
  line-height: 30px;
  text-align: center;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return css`
          border: 1px solid white;
          background: blue;
          color: white;
        `;
      }
      default:
        return '';
    }
  }}

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }
`;
