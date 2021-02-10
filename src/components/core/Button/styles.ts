import { grayscale, lighten, readableColor } from "polished"
import styled, { css, keyframes } from "styled-components/macro"

const animations = {
  ripple: keyframes`
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  `,
}

interface ButtonProps {
  color: string
  load?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ color, load }) => css`
    position: relative;

    overflow: hidden;

    padding: 0.5rem;

    border: none;
    background: ${color};
    cursor: pointer;
    ${load && "pointer-events: none;"}

    color: ${readableColor(color)};

    transition: 0.3s;

    &:hover {
      background: ${lighten(0.1, color)};
    }

    &:disabled {
      opacity: 0.75;

      background: ${grayscale(color)};
      cursor: not-allowed;
    }

    &:focus {
      outline: 2px solid ${lighten(0.5, color)};
      background: ${lighten(0.1, color)};
    }

    span {
      position: absolute;
      transform: translate(-50%, -50%);

      pointer-events: none;
      border-radius: 50%;
      background-color: #fff;

      animation: ${animations.ripple} 1s linear infinite;
    }
  `}
`

export const LoadWrapper = styled.div<{ color: string }>`
  ${({ color }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color};
  `}
`
