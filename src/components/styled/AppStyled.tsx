import styled, { type IStyledComponent } from 'styled-components'

export const AppStyled: IStyledComponent<any, any> = styled.div`
  .wrapper {
    flex-grow: 1;
    height: 100%;
    padding-top: 50px;
    padding: 50px 30px 0 30px;
    min-height: 95vh;
  }

  .link-back {
    color: var(--paletteColor5);
    background: unset;
    border: unset;
    font-size: 16px;
    transition: 0.3s all ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: unset;

    .arrow{
      display: block;
      width: 26px;
      height: 26px;
      background: transparent url(/img/exit-icon.png) center center no-repeat;
      background-size: cover;
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.7;
      transition: 0.3s all ease;
    }
  }
  
  .status-message {
    display: block;
    color: var(--paletteColor2);
    text-align: center;
  }
`
