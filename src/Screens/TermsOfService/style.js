import styled from 'styled-components/native'

export const Para = styled.View`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'background']};
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`

export const Btn = styled.TouchableOpacity`
    display: flex;
    margin: 10px;
    width: 80%;
    height: 50px;
    border-radius: 8px;
    background-color: #8CB1FF;
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: center;
`