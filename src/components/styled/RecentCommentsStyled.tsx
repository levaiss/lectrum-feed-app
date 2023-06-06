import styled, { type IStyledComponent } from 'styled-components'

export const RecentCommentsStyled: IStyledComponent<any, any> = styled.div`
  .comment {
    margin-bottom: 15px;

    &:first-child{
      margin-top: 0;
    }

    .body {
      font-size: 20px;
      margin-bottom: 15px;
    }
    a {
      text-decoration: unset;
      color: var(--paletteColor5);
    }
  }
`
