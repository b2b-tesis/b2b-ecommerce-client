import Cookies from 'js-cookie';

export const getTokenB2B = () => {
  let tokenb2b = Cookies.get('tokenb2b')
  if(tokenb2b === '' || !tokenb2b){
    return ''
  } 
  return tokenb2b
}

export const getRucB2B = () => {
  let rucb2b = Cookies.get('rucb2b')
  if(rucb2b === '' || !rucb2b){
    return ''
  } 
  return rucb2b
}

