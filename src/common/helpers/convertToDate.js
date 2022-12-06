import { format } from "date-fns";

export const convertToDate = (createdAt) => {
  const date = new Date(createdAt);
  const isoDate = date.toISOString();

  const result = format(new Date(isoDate), 'dd/MM/yyyy');
  return result;
}