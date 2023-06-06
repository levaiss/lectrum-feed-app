import styled, { type IStyledComponent } from 'styled-components'

export const FormStyled: IStyledComponent<any, any> = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 42px * 2 - 50px);
  padding: 42px;
  background-color: var(--paletteColor3);
  flex-grow: 1;

  &.centered {
    justify-content: center;
  }

  & .logo {
    width: 120px;
    height: 56px;
    background: transparent url(/img/logo-white.png) center center no-repeat;
    background-size: contain;
    margin-bottom: 30px;
  }

  & .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: var(--paletteColor11);
    padding: 50px 100px;
    min-height: unset;
    height: unset;
    border: unset;
    flex-grow: unset;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      & h1 {
        font-size: 45px;
        font-weight: 700;
        color: white;
        margin-bottom: 20px;
      }

      & img {
        height: 180px;
        width: 180px;
        margin: 20px 0;
        border-radius: 50%;
        border: unset;
        background-color: var(--paletteColor2);
      }

      & input {
        width: 250px;
        height: 50px;
        padding: 8px 10px;
        background-color: transparent;
        border-radius: 0;
        outline: none;
        color: var(--paletteColor2);
        border: unset;
        border-bottom: 1px solid var(--paletteColor14);

        font-size: 17px;
        transition: border 0.3s ease, box-shadow 0.3s ease;

        &[type='checkbox'] {
          width: auto;
          margin: 0 10px;
        }

        &[type='file'] {
          border: 1px solid black;
          margin: 20px 0;
          cursor: pointer;
        }

        &:focus {
          border-color: var(--paletteColor2);
        }
      }

      & .invalidInput {
        border: 1px solid red;

        &:focus {
          border: 1px solid crimson;
        }
      }

      & .rememberMe {
        display: flex;
        align-items: center;
        margin: 0 0 20px;
        color: var(--paletteColor8);
        cursor: pointer;
        user-select: none;
        font-size: 14px;
      }

      & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        padding: 0 16px;
        margin-bottom: 20px;
        outline: 0;
        border-radius: 7px;
        border: none;
        color: var(--paletteColor2);
        height: 34px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        transition: background-color 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.3s ease;
      }

      & .loginSubmit,
      & .signupSubmit{
        background-color: var(--paletteColor6);
        transition: 0.3s all ease-in;

        &:hover {
          opacity: 0.8;
          background-color: var(--paletteColor6);
          border: unset;
        }
      }

      & .profileSubmit  {
        background-color: var(--paletteColor9);
      }

      & .fileInput {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;

        & + label {
          padding: 6px 12px;
          font-size: 20px;
          font-weight: 700;
          color: var(--paletteColor8);
          background-color: transparent;
          border-radius: 7px;
          border: 1px solid var(--paletteColor24);
          cursor: pointer;
          margin-bottom: 20px;
          transition: background-color 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.3s ease;
        }

        &:focus + label,
        & + label:hover {
          box-shadow: 0 3px 3px -1px var(--paletteColor7);
        }
      }

      & i {
        position: relative;

        & .cancelUpdate {
          position: absolute;
          left: -30px;
          width: 110px;
          margin-top: 10px;
          transition: color 0.2s ease-out;
          color: var(--paletteColor5);
          font-size: 10px;
          cursor: pointer;

          &:hover {
            color: var(--paletteColor1);
          }
        }
      }
    }
  }

  & .centered {
    justify-content: center;
  }

  & .disabledInput {
    & div {
      & input {
        background-color: var(--paletteColor3);
      }
    }
  }

  & .disabledInputRedux {
    background-color: var(--paletteColor3);
  }

  & .disabledButton {
    background-color: var(--paletteColor7);
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    padding: 0 16px;
    border-radius: 7px;
    outline: 0;
    color: var(--paletteColor2);
    height: 34px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.3s ease;
    text-decoration: none;
  }

  .options {
    display: flex;
    color: var(--paletteColor5);
    font-weight: 400;
    margin-top: 30px;

    a {
      all: unset;
      margin-left: 10px;
      color: var(--paletteColor2);
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      font-weight: 600;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`
