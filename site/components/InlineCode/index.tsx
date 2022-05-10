import styled from "@emotion/styled";

const InlineCode = styled.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  // Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;

export default InlineCode;
