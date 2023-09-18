import styled from 'styled-components/native'

export const LogoImageStyle = styled.Image `
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
  border-radius: 20px;
`;