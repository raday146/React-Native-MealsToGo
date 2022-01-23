import styled from "styled-components";

const defaultTextStyles = (theme) => `
 font-family: ${theme.fonts.body};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary};
 flex-wrap: wrap;
 margin-top: 0;
 margin-bottom: 0;
`;
const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;
const error = (theme) => `
color: ${theme.colors.text.error};
`;

const caption = (theme) => `
font-weight: ${theme.fontWeights.bold};
font-size: ${theme.fontSizes.caption};
`;

const label = (theme) => `
font-family: ${theme.fonts.heading};
font-weight: ${theme.fontWeights.medium};
font-size: ${theme.fontSizes.body};
`;
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

export default Text;
Text.defaultProps = {
  variant: "body",
};
