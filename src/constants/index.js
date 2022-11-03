export const navLinks = [
  {
    id: "home",
    path: "",
    title: "Home",
  },
  {
    id: "products",
    path: "products",
    title: "Products",
  },
  {
    id: "privateLabel",
    path: "privateLabel",
    title: "Private Label",
  },
  {
    id: "about",
    path: "about",
    title: "About Us",
  },
  {
    id: "contact",
    path: "contact",
    title: "Contact Us",
  },
];

export const productCards = [
  {
    name: "comfort fit pets",
    imageOne: "https://via.placeholder.com/300x400",
    imageTwo: "https://via.placeholder.com/300x400",
    path: "comfort-fit-pets",
    categories: [
      {
        title: "dog harnesses",
        types: [
          {
            title: "colder weather harness",
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/510x510"
          },
          {
            title: "warmer weather harness",
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/510x510"
          },
          {
            title: "inside plush harness",
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/510x510"
          }
        ]
      },
      {
        title: "dog collars",
        types: [
          {
            title: "soft padded dog collar",
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/510x510"
          },
          {
            title: "ultra soft padded dog collar",
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/510x600"
          }
        ]
      }
    ]
  },
  {
    name: "drift to sleep",
    imageOne: "https://via.placeholder.com/300x400",
    imageTwo: "https://via.placeholder.com/300x400",
    path: "drift-to-sleep",
    categories: [
      {
        title: "sleep masks",
        types: [
          {
            amazonLink: "https://www.amazon.com",
            imageOne: "https://via.placeholder.com/400x400",
            imageTwo: "https://via.placeholder.com/500x200",
            imageThree: "https://via.placeholder.com/400x400"
          }
        ]
      },
      {
        title: "ear plugs",
        types: [
          {
            imageOne: "https://via.placeholder.com/400x400",
            subTypes: [
              {
                image: "https://via.placeholder.com/200x200",
                amazonLink: "https://www.amazon.com",
                pieces: ["20 Pairs", "40 Pairs", "60 Pairs"]
              },
              {
                image: "https://via.placeholder.com/200x200",
                amazonLink: "https://www.amazon.com",
                pieces: []
              },
              {
                image: "https://via.placeholder.com/200x200",
                amazonLink: "https://www.amazon.com",
                pieces: ["20 Pairs", "50 Pairs", "60 Pairs"]
              },
              {
                image: "https://via.placeholder.com/200x200",
                amazonLink: "https://www.amazon.com",
                pieces: ["60 Pairs of Bottle Pack"]
              }
            ]
          }
        ]
      },
    ]
  },
  {
    name: "cups and underwire for intimate apparel",
    imageOne: "https://via.placeholder.com/300x400",
    imageTwo: "https://via.placeholder.com/300x400",
    path: "cups-and-underware",
    categories: [
      {
        title: "bra molded cup",
        path: "bra-molded-cup",
        image: "https://via.placeholder.com/400x500",
        types: [
          {
            title: "push-up cups",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          },
          {
            title: "strapless cups",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          },
          {
            title: "bando shapes cups",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          },
          {
            title: "triangular cups",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          },
        ]
      },
      {
        title: "bra underwires",
        path: "bra-underwires",
        image: "https://via.placeholder.com/400x500",
        types: [
          {
            title: "nylon coated steel wire",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          },
          {
            title: "galvernized steel wire",
            images: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]
          }
        ]
      }
    ]
  }
];

export const aboutUsSections = [
  {
    title: "our story",
    description: "Metric products is a family owned company which creates products intended to delight customers. We offer a range of products which are functional and embody good design, simplicity and beauty.Our products are backed up by service and quality which is second to no other.We operate with ethical and moral integrity towards our customers, employees and the environment we live in.Honesty comes first to us as a company and we have been practicing this for over 7 decades.",
    hasMedia: false,
    media: []
  },
  {
    title: "our facilities",
    description: "We manufacture all of our products at our Sri Lankan facility which is located in a beautiful setting, surrounded by nature.We strive to preserve the beauty of the area while providing jobs to the local population.We engage with the local community and work on projects that are important in the area.Over the years we have provided English classes for the local population, participated in remodeling local schools and hospitals, built housing after the Tsunami in 2005 and participated and enable local festivals.We also have a gardening project where we help Local populations grow native foods and plants, providing seeds and other necessary materials.",
    hasMedia: true,
    media: [
      {
        id: "facility1",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "facility2",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "facility3",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "facility4",
        src: "https://via.placeholder.com/800x400"
      },
    ]
  },
  {
    title: "environment",
    description: "We are mindful of the environment, recycling 100% of our scrap and by products. We reuse all our raw materials. Our scrap foam cup lamination panels are used in soft toys and mattresses and wire scrap is recycled in local recycling plants.Carton scraps are used as paper bi- products.",
    hasMedia: true,
    media: [
      {
        id: "env1",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "env2",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "env3",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "env4",
        src: "https://via.placeholder.com/800x400"
      },
    ]
  },
  {
    title: "our community",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
    hasMedia: true,
    media: [
      {
        id: "comm1",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "comm2",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "comm3",
        src: "https://via.placeholder.com/800x400"
      },
      {
        id: "comm4",
        src: "https://via.placeholder.com/800x400"
      },
    ]
  },
]