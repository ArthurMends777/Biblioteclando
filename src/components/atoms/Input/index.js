import styled from "styled-components/native";

export const InputLogin = styled.TextInput `
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 10)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 10)}px;
    font-size: ${({ theme, size }) => theme.metrics.px(size || 18)}px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '85%')};
    background-color: #fff;
    padding: 15px;
    border-radius: 20px;
`;

export const InputStyle = styled.TextInput `
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    font-size: ${({ theme, size }) => theme.metrics.px(size || 18)}px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
    border-width: 1px;
    border-color: white;
    padding: 10px;
    border-radius: 5px;
`;

export const InputRegister = styled.TextInput `
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    font-size: ${({ theme, size }) => theme.metrics.px(size || 18)}px;
    width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '80%')};
    background-color: #fff;
    margin: 10px;
    border-width: 1px;
    border-color: white;
    padding: 10px;
`;
