const navbarNavigations = [
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Compras",
    child: [
      {
        title: "Carrito de compras",
        url: "/carrito",
      },
      {
        title: "Órdenes de compra",
        url: "/usuario/ordenes",
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Ventas",
    child: [
      {
        title: "Productos",
        child: [
          {
            title: "Ver productos",
            url: "/usuario/productos",
          },
          {
            title: "Agregar producto",
            url: "/usuario/productos/agregar",
          },
          {
            title: "Ver categoría de producto",
            url: "/usuario/categorias-productos",
          },
          {
            title: "Agregar categoría de producto",
            url: "/usuario/categorias-productos/agregar",
          },
        ],
      },
      {
        title: "Órdenes de venta",
        url: "/usuario/ordenes-venta",
      },
      {
        title: "Método para recibir pagos",
        url: "/usuario/recibir-pagos",
      }
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Mi perfil",
    child: [
      {
        title: "Perfil",
        child: [
          {
            title: "Ver perfil",
            url: "/usuario/perfil",
          },
          {
            title: "Editar perfil",
            url: "/usuario/perfil/editar",
          },
        ],
      },
      {
        title: "Direcciones",
        child: [
          {
            title: "Ver direcciones",
            url: "/usuario/direcciones",
          },
          {
            title: "Agregar dirección",
            url: "/usuario/direcciones/agregar",
          },
        ],
      },
      {
        title: "Tarjetas",
        child: [
          {
            title: "Ver tarjetas",
            url: "/usuario/tarjetas",
          },
          {
            title: "Agregar tarjeta",
            url: "/usuario/tarjetas/agregar",
          },
        ],
      }
    ],
  }, 
  {
    title: "Ayuda",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      {
        title: "¿Cómo comprar?",
        url: "/market-1",
      },
      {
        title: "¿Cómo vender?",
        url: "/market-1",
      },
      {
        title: "¿Cómo solicitar devoluciones y reembolsos?",
        url: "/market-1",
      }
    ],
  },
];
export default navbarNavigations;
