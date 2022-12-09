import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export const Success = () =>{
  return(
    <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Compra Finalizada com Sucesso!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Parabéns! Sua compra foi finalizada com sucesso e logo logo os produtos mais procurados da galáxia estarão na sua casa!
  </AlertDescription>
</Alert>

  )
}
