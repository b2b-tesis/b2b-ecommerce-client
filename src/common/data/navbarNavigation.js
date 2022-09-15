const navbarNavigations = [
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Compras",
    child: [
      {
        title: "Carrito de compras",
        url: "/wish-list",
      },
      {
        title: "Órdenes de compra",
        url: "/wish-list",
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
            url: "/orders/5452423",
          },
          {
            title: "Agregar producto",
            url: "/orders",
          },
          {
            title: "Ver categoría de producto",
            url: "/orders/5452423",
          },
          {
            title: "Agregar categoría de producto",
            url: "/orders",
          },
        ],
      },
      {
        title: "Órdenes de venta",
        url: "/market-1",
      },
      {
        title: "Medio para recibir pagos",
        url: "/market-1",
      },
      {
        title: "Órdenes de devolución o reembolso",
        url: "/market-1",
      },
      {
        title: "Reportes",
        url: "/market-1",
      },
      // {
      //   title: "Profile",
      //   child: [
      //     {
      //       title: "View Profile",
      //       url: "/profile",
      //     },
      //     {
      //       title: "Edit Profile",
      //       url: "/profile/edit",
      //     },
      //   ],
      // },
      // {
      //   title: "Address",
      //   child: [
      //     {
      //       title: "Address List",
      //       url: "/address",
      //     },
      //     {
      //       title: "Add Address",
      //       url: "/address/512474",
      //     },
      //   ],
      // },
      // {
      //   title: "Support tickets",
      //   child: [
      //     {
      //       title: "All tickets",
      //       url: "/support-tickets",
      //     },
      //     {
      //       title: "Ticket details",
      //       url: "/support-tickets/512474",
      //     },
      //   ],
      // },
      // {
      //   title: "Wishlist",
      //   url: "/wish-list",
      // },
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
            url: "/admin/products",
          },
          {
            title: "Editar perfil",
            url: "/admin/products/248104",
          },
        ],
      },
      {
        title: "Direcciones",
        child: [
          {
            title: "Ver direcciones",
            url: "/admin/products",
          },
          {
            title: "Agregar dirección",
            url: "/admin/products/248104",
          },
        ],
      },
      {
        title: "Tarjetas",
        child: [
          {
            title: "Ver tarjetas",
            url: "/admin/products",
          },
          {
            title: "Agregar tarjeta",
            url: "/admin/products/248104",
          },
        ],
      },
      {
        title: "Salir",
        url: "/market-1",
      },
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
