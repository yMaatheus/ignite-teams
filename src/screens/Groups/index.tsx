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
import { Alert } from 'react-native'
import { Loading } from '@components/Loading'

export function Groups() {
  const [isLoading, setLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setLoading(true)
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas.")
    } finally {
      setLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <HightLight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      { isLoading ? <Loading /> : (
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty
              message='Que tal cadastrar a primeira turma?'
            />
          )}
        />
      )}

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  )
}
