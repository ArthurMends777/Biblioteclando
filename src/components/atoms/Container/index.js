import styled from 'styled-components/native'

/* Se a propiedade não for passsada, terá uma padrão*/
export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
`

export const ScreenScrollContainer = styled.ScrollView.attrs(
  ({ theme, withPadding = false }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
  })
)`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
`;

export const Div = styled.View`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`

export const DivBook = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  margin: ${({ theme, m }) => theme.metrics.px(m || 0)}px;
`

export const DivProfile = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '200px')};
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
`



/************************************************************************************* */
export const ImageStyle = styled.Image `
width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
border-radius: 10px;
`;

