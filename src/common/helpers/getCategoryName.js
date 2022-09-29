export const getCategoryName = (idCategory) => {
  let categoryName = '';
  switch (idCategory) {
    case 1: categoryName = 'Tecnología';
    break; 
    case 2: categoryName = 'Agricultura y Comida';
    break;
    case 3: categoryName = 'Textil';
    break;
    case 4: categoryName = 'Salud y Belleza';
    break;
    case 5: categoryName = 'Casa y Decoración';
    break;
    case 6: categoryName = 'Repuestos Industriales';
    break;
    case 7: categoryName = 'Electrónica';
    break;
    case 8: categoryName = 'Otros';
    break;
  }
  return categoryName
}

export const getCategories = () => {
  return[
    {id:1,name:'Tecnología'},
    {id:2,name:'Agricultura y Comida'},
    {id:3,name:'Textil'},
    {id:4,name:'Salud y Belleza'},
    {id:5,name:'Casa y Decoración'},
    {id:6,name:'Repuestos Industriales'},
    {id:7,name:'Electrónica'},
    {id:8,name:'Otros'}
  ]
}