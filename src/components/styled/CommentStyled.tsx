import styled, { type IStyledComponent } from 'styled-components'

export const CommentStyled: IStyledComponent<any, any> = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  flex-grow: 1;
  max-width: calc(100vw - 20px);
  padding: 12px;
  border: unset;
  background-color: var(--paletteColor11);
  border-radius: 10px;
  word-wrap: break-word;
  transition: box-shadow 0.3s ease;

  & > p:first-child {
    color: var(--paletteColor2);
    font-weight: 700;
    margin-bottom: 5px;
  }

  & > time {
    display: block;
    font-size: 12px;
    color: var(--paletteColor5);
    font-weight: normal;
    margin-bottom: 15px;
  }

  & .body, & > .comment {
    color: var(--paletteColor2);
    font-size: 16px;
  }

  & > .comment {
    background-color: var(--paletteColor11);
  }
`
