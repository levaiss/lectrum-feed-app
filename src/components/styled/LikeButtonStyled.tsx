import styled, { type IStyledComponent } from 'styled-components'

export const LikeButtonStyled: IStyledComponent<any, any> = styled.section`
  margin-top: 20px;
  user-select: none;

  & .icon {
    position: relative;
    margin-top: 15px;
    color: var(--paletteColor5);
    font-size: 16px;
    cursor: default;
    text-align: center;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }


    svg {
      margin-right: 10px;
    }
  }

  & .liked svg {
    fill: #f40009;
    path {
      stroke: #f40009;

    }
  }

  & div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: default;

    & ul {
      position: absolute;
      z-index: 1;
      top: 30px;
      left: 25px;
      width: 200px;
      padding: 6px 8px;
      list-style: none;
      border-radius: 2px;
      background-color: var(--paletteColor8);
      color: var(--paletteColor2);
      font-size: 12px;
      line-height: 16px;
      text-align: left;
    }

    & span {
      color: var(--paletteColor2);
      font-size: 14px;
      line-height: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: block;
        width: 19px;
        height: 19px;
        background-image: url(/img/like-icon.png);
        background-repeat: no-repeat;
        background-position: 0 -37px;
        background-size: 18px;
        margin-right: 10px;
      }

      &:hover {
        cursor: default;
      }
    }
  }
`
