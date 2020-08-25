import styled, { createGlobalStyle } from "styled-components";

export const Modifiers = createGlobalStyle`
    .text-decorations {
        text-decoration: none;
        :active {
            text-decoration: none;
        }
    }

    .full-with {
      width: 100;
    }
    .narrower-width {
        width: 80%;
      }

    .padding-left {
      padding-left: 2rem;
    }
    .padding-right {
      padding-right: 2rem;
    }
    .padding-top {
      padding-top: 2rem;
    }
    .padding-bottom {
      padding-bottom: 2rem;
    }
    .padding-all-sides {
      padding: 2rem;
    }

    .margin-bottom {
      margin-bottom: 2rem!important;
    }

    .margin-remove {
      margin: 0!important;
    }

    .position-fixed {
      position: fixed!important;
      background-color:#F1EFFF;
      width: 100%;
      bottom: 0;
      margin: 10px;
      padding: 1rem;
      box-sizing: border-box;
    }

    .width--narrower {
      width: 80%!important;
    }
    
    .modal-is-open {
      display: flex;
    }

    .modal-is-close {
      display: none;
    }
    
`;
