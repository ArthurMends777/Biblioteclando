import styled from "styled-components/native"

export const BtnRegister = styled.TouchableOpacity`
    border-radius: 10px;
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 25)}px;
`

export const BtnGetRegister = styled.TouchableOpacity`
    border-radius: 10px;
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 25)}px;
    padding: 10px;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'bottomBar']};
`
// bottomBar

export const BtnLogin = styled.TouchableOpacity`
    background-color: #6DBDDF;
    border-radius: 20px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '85%')};
    height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '60')}px;
    justify-content: center;
    align-items: center;
`

export const BtnCategory = styled.TouchableOpacity`
    background-color: #6DBDDF;
    padding: 20px;
    border-radius: 10px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
    margin: ${({ theme, margin }) => theme.metrics.px(margin || 0)}px;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
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

export const BtnBook = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnFavorites = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '80%')};
height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '40px')};
margin-top: 15px;
border-radius: 8px;
background-color: #8CB1FF;
`

export const BtnReserv = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '80%')};
height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '40px')};
margin-top: 15px;
border-radius: 8px;
background-color: #54947F;
`
export const BtnSearch = styled.TouchableOpacity`
    background-color: #8CB1FF;
    padding: 10px;
    border-radius: 10px;
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`

export const BtnLogout = styled.TouchableOpacity`
    background-color: #FF0000 ;
    border-radius: 5px;
    width: 120px;
    height: 50px;
    padding: 8px;
    justify-content: center;
    align-items: center;
`