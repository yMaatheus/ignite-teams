import { useNavigation } from '@react-navigation/native'
import LogoImg from "@assets/logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton &&
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      }

      <Logo source={LogoImg} />
    </Container>
  )
}