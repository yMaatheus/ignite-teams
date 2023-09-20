import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { HightLight } from '@components/HightLight'
import { ListEmpty } from '@components/ListEmpty'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
       const data = await groupsGetAll();
       setGroups(data)
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    console.log('use effect executou');
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <HightLight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={ groups.length === 0 && { flex: 1 } }
        ListEmptyComponent={() => (
          <ListEmpty
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  )
}
