import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function SearchBar(){
  return (

      <VStack width="100%" space={5}>
        <Input
          placeholder="Buscar tareas"
          bg="#fff"
          width="100%"
          borderRadius={25}
          py={3}
          px={1}
          fontSize={14}
           _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
            }}
          InputLeftElement={<Icon size='sm' m={2} size={6} color="gray.400" as={<MaterialIcons name="search" />} />}
        />
        </VStack>
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px={8}>
        <SearchBar/>
      </Center>
    </NativeBaseProvider>
  );
}