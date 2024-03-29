import styled, { type IStyledComponent } from 'styled-components'

export const NavigationStyled: IStyledComponent<any, any> = styled.div`
  .navigation-item {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: unset;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.8;
    }
    &::before {
      content: '';
      display: block;
      width: 26px;
      height: 26px;
      background: transparent url(/img/profile-icon.png) center center no-repeat;
      background-size: cover;
      margin-right: 10px;
    }

    &:nth-child(2) {
      &::before {
        background: transparent url(/img/home-icon.png) center center no-repeat;
        background-size: cover;

      }
    }

  }

  .navigation-item.active {
    font-weight: 700;
    position: relative;

    &::after{
      content: '';
      display: block;
      width: 100%;
      height: 200%;
      padding: 0 20px;
      border-radius: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: -1;
      background: var(--paletteColor11);
    }
  }

  .navigation-profile {
    color: white;
    font-size: 24px;
    line-height: 26px;
    text-decoration: unset;
    font-weight: 700;
    margin-bottom: 30px;
    display: block;

    .profile-wrapper {
      position: relative;
    }
  }

  .navigation-avatar {
    width: 150px;
    height: 150px;
    display: block;
    margin-bottom: 20px;
    border-radius: 50%;
    background: var(--paletteColor5);
  }

  .user-status {
    position: absolute;
    left: 120px;
    bottom: 0;

    .status {
      span {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      &.online span{
        background: #578843;

      }

      &.offline span{
        background: #f40009;

      }
    }
  }

  .logout {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--paletteColor5);
    background: unset;
    border: unset;
    font-size: 16px;
    transition: 0.3s all ease;
    cursor: pointer;
    display: flex;
    align-items: center;

    &::before{
      content: '';
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

`
