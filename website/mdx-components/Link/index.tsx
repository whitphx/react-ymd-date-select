import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function isExternal(href: string | undefined): boolean {
  if (href == null) {
    return false;
  }
  try {
    const hrefUrl = new URL(href);
    return hrefUrl.origin !== window.location.origin;
  } catch {
    return false;
  }
}

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
}
function Link(props: LinkProps) {
  const isExt = isExternal(props.href);
  return (
    <ChakraLink href={props.href} isExternal={isExt}>
      {props.children}
      {isExt && <ExternalLinkIcon mx="2px" />}
    </ChakraLink>
  );
}

export default Link;
