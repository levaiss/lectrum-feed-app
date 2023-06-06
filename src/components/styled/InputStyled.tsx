import styled, { type IStyledComponent } from 'styled-components'

export const InputStyled: IStyledComponent<any, any> = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .error-message {
    color: var(--paletteColor25);
    font-size: 12px;
    padding-top: 6px;
  }
`
