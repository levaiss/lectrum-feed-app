import styled, { type IStyledComponent } from 'styled-components'

export const ComposerStyled: IStyledComponent<any, any> = styled.section`
  position: relative;
  display: flex;
  max-width: calc(100vw - 20px);
  height: 150px;
  padding: 12px;
  margin-bottom: 20px;
  background-color: var(--paletteColor11);
  border-radius: 10px;

  & img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    transition: border 0.5s ease;
  }

  & form {
    width: 100%;

    & button[type='submit'] {
      position: absolute;
      right: 10px;
      bottom: 10px;
      padding: 10px 15px;
      font-size: 16px;
      font-weight: 600;
      color: var(--paletteColor2);
      cursor: pointer;
      background-color: var(--paletteColor6);
      border: 0;
      border-radius: 50px;
      outline: 0;
      transition: opacity 0.2s ease-in;

      &:hover {
        background-color: var(--paletteColor6);
        opacity: 0.8;
        transition: opacity 0.2s ease-in;

      }
    }

    & textarea {
      width: 100%;
      height: 80px;
      margin-top: 7px;
      font-weight: 300;
      resize: none;
      border: 0;
      outline: 0;
      transition: font-size 0.5s ease;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      background: transparent;
      color: white;

      &::-webkit-scrollbar {
        display: none;
      }

      &::placeholder {
        color: var(--paletteColor5);
        transition: color 0.4s ease-out;
      }

      &:focus {

        &::placeholder {
          color: var(--paletteColor5);
        }
      }
    }
  }
`
