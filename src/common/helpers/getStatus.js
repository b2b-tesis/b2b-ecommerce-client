export const getStatus = (status) => {
  let statusDescription = '';
  switch (status) {
    case 'created': statusDescription = 'Orden creada, a la espera que el vendedor la acepte';
    break; 
    case 'accepted': statusDescription = 'Orden aceptada, lista para ser pagada';
    break;
    case 'pending': statusDescription = 'Orden pagada, a la espera de ser enviada por el vendedor';
    break;
    case 'shipped': statusDescription = 'Orden enviada por el vendedor';
    break;
    case 'delivered': statusDescription = 'Orden entregada al comprador';
    break;
    case 'cancelled': statusDescription = 'Orden cancelada y sin pendientes de pago o envío';
    break;
    case 'refund-pending': statusDescription = 'Orden de reembolso, a la espera que el vendedor confirme o cancele la solicitud';
    break;
    case 'refund': statusDescription = 'Orden de reembolso aceptada por vendedor, su dinero será reembolsado';
    break;
    case 'refund-cancelled': statusDescription = 'Orden de reembolso no aceptada por vendedor';
    break;
  }
  return statusDescription
}

export const getStatusSale = (status) => {
  let statusDescription = '';
  switch (status) {
    case 'created': statusDescription = 'Orden nueva, si los datos de compra son correctos, click en Aceptar Orden. Se puede editar el stock de los productos antes de aceptar la orden.';
    break; 
    case 'accepted': statusDescription = 'Orden aceptada, lista para ser pagada';
    break;
    case 'pending': statusDescription = 'Orden pagada, debe subir primero el PDF de la boleta o factura y luego click en Orden Enviada cuando sea enviada por el vendedor';
    break;
    case 'shipped': statusDescription = 'Orden enviada por el vendedor';
    break;
    case 'delivered': statusDescription = 'Orden entregada al comprador';
    break;
    case 'cancelled': statusDescription = 'Orden cancelada y sin pendientes de pago o envío';
    break;
    case 'refund-pending': statusDescription = 'Solicitud de reembolso, a la espera que el vendedor confirme o cancele la solicitud';
    break;
    case 'refund': statusDescription = 'Orden de reembolso aceptada por vendedor';
    break;
    case 'refund-cancelled': statusDescription = 'Orden de reembolso no aceptada por vendedor';
    break;
  }
  return statusDescription
}

export const getStatusTranslate = (status) => {
  let statusTranslate = '';
  switch (status) {
    case 'created': statusTranslate = 'Creado';
    break; 
    case 'accepted': statusTranslate = 'Aceptado por Vendedor';
    break;
    case 'pending': statusTranslate = 'Pendiente de Envío';
    break;
    case 'shipped': statusTranslate = 'Enviado';
    break;
    case 'delivered': statusTranslate = 'Entregado';
    break;
    case 'cancelled': statusTranslate = 'Cancelado';
    break;
    case 'refund-pending': statusTranslate = 'Reembolso Pendiente';
    break;
    case 'refund': statusTranslate = 'Reembolso Aceptado';
    break;
    case 'refund-cancelled': statusTranslate = 'Reembolso Cancelado';
    break;
  }
  return statusTranslate
}

export const getStatusSaleTranslate = (status) => {
  let statusTranslate = '';
  switch (status) {
    case 'created': statusTranslate = 'Nueva Orden';
    break; 
    case 'accepted': statusTranslate = 'Pendiente de Pago';
    break;
    case 'pending': statusTranslate = 'Pendiente de Envío';
    break;
    case 'shipped': statusTranslate = 'Enviado al Comprador';
    break;
    case 'delivered': statusTranslate = 'Entregado al Comprador';
    break;
    case 'cancelled': statusTranslate = 'Cancelado';
    break;
    case 'refund-pending': statusTranslate = 'Reembolso Pendiente';
    break;
    case 'refund': statusTranslate = 'Reembolso Aceptado';
    break;
    case 'refund-cancelled': statusTranslate = 'Reembolso Cancelado';
    break;
  }
  return statusTranslate
}

export const getColor = (status) => {
  switch (status) {
    case "created":
      return "secondary";

    case "accepted":
      return "secondary";

    case "pending":
      return "blue";

    case "shipped":
      return "success";

    case "delivered":
      return "success";

    case "cancelled":
      return "error";
    
    case "refund-pending":
      return "blue";

    case "refund":
      return "success";

    case "refund-cancelled":
      return "error";

    default:
      return "";
  }
};
