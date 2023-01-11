export const convertToMiliseconds = (dateTime) => {
  const date = new Date(dateTime);
  const dateMiliseconds = date.getTime();

  return dateMiliseconds;
}