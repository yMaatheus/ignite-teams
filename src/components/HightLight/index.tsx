import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
}

export function HightLight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}