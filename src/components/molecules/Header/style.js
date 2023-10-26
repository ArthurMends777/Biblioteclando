import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background-color: #54947F;
  height: ${({ theme }) => theme.metrics.px(120)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`