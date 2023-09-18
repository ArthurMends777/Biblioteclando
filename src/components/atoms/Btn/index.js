import styled from 'styled-components/native'

export const BtnSearch = styled.TouchableOpacity`
    background-color: #8CB1FF;
    padding: 10px;
    border-radius: 10px;
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`

export const BtnCategory = styled.TouchableOpacity`
    background-color: #8CB1FF;
    padding: 10px;
    border-radius: 10px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
    height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '50px')};
    margin: ${({ theme, margin }) => theme.metrics.px(margin || 0)}px;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
`

export const BtnBook = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnProfile = styled.TouchableOpacity`
    display: flex;
    margin: 10px;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    background-color: #8CB1FF;
    justify-content: ${({ justify }) => justify || 'center'};

`
