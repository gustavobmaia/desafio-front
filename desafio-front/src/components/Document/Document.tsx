import { DocumentProps } from "./Document.interface";
import { DocumentStyle, Text, Span, Description } from "./Document.style";

export default function Document({ name, description }: DocumentProps) {
  return (
    <DocumentStyle>
      <Text>
        <Span>Nome: </Span>
        {name}
      </Text>
      <Description>
        <Span>Descrição: </Span>
        {description}
      </Description>
    </DocumentStyle>
  );
}
