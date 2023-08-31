import MouseIcon from "@mui/icons-material/Mouse";


export const navLinks = [
    { label: "Home", link: "/" },
    { label: "Games", link: "/games"},
    { label: "Blog", link: "/blog"},
  ];

export const menuItems = [
  {
    cardStyle: "menu_cards",
    headerTitle: "Left Click",
    footerTitle: "Test your left click out!",
    extraStrings: [],
    image: <MouseIcon sx={{ transform: "scale(1.5)" }} />,
    link: "/games/left-click",
  },
  {
    cardStyle: "menu_cards",
    headerTitle: "Right Click",
    footerTitle: "Test your right speed!",
    extraStrings: [],
    image: <MouseIcon sx={{ transform: "scale(1.5)" }} />,
    link: "/games/rightClick",
  },
  {
    cardStyle: "menu_cards",
    headerTitle: "Scrollwheel",
    footerTitle: "Test your scroll skillz!",
    extraStrings: [],
    image: <MouseIcon sx={{ transform: "scale(1.5)" }} />,
    link: "/games/slider-game",
  },
  {
    cardStyle: "menu_cards",
    headerTitle: "Middle Click",
    footerTitle: "No one uses this button... but try it out!",
    extraStrings: [],
    image: <MouseIcon sx={{ transform: "scale(1.5)" }} />,
    link: "/games/middle-click",
  },
];
