import styled, { type IStyledComponent } from 'styled-components'

export const DefaultLayoutStyled: IStyledComponent<any, any> = styled.main`
  display: flex;

  & > div {
    flex: 1;

  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    flex-shrink: 0;
    position: relative;

    & > div {
      &:nth-child(1), &:nth-child(3) {
        width: 20%;
        box-sizing: border-box;
        padding-top: 50px;
        position: sticky;
        top: 0;
        height: 80vh;
      }
      &:nth-child(1) {
        padding-right: 30px;
      }
      &:nth-child(3) {
        width: 30%;
      }
    }

    .posts {
      flex-grow: 1;
      padding-top: 50px;

    }
  }

  & .most-recent-comments {
    max-width: 550px;
    padding: 10px 0;
    padding-left: 10px;
    flex-shrink: 0;

    section {
      overflow-y: auto;
      height: 100%;
    }

    & h1 {
      text-align: center;
    }
  }
`
