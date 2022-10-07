
export const convertCard = (cardNumber) => {
  const last4Str = String(cardNumber).slice(-4); 
  const last4Num = Number(last4Str); 

  return last4Num
}
