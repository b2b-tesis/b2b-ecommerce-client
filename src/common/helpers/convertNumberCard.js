import valid from "card-validator";

export const convertCard = (cardNumber) => {
  const last4Str = String(cardNumber).slice(-4); 
  const last4Num = Number(last4Str); 

  return last4Num
}

export const getTypeCard = (cardNumber) => {
  const numberValidation = valid.number(cardNumber);

  if (numberValidation.card) {
    return numberValidation.card.type
  }
}