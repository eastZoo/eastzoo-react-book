"use client";
import styled, { keyframes } from "styled-components";

export const loader = keyframes`
  0% { transform: rotate(0); }
  100%{ transform: rotate(1turn); }
`;

export const LoadingSpinnerBox = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  z-index: 110;

  .loader-2 {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-top: 6px solid rgba(255, 255, 255, 0.3);
    border-right: 6px solid rgba(255, 255, 255, 0.3);
    border-bottom: 6px solid rgba(255, 255, 255, 0.3);
    border-left: 6px solid rgba(255, 255, 255, 1);
    animation: ${loader} 1.5s linear infinite;
  }
`;
