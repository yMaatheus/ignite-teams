import { Header } from '@components/Header'
import { HightLight } from '@components/HightLight'
import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <HightLight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    </Container>
  )
}
