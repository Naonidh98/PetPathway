const SideBarLinks = [
  {
    id: 0,
    title: "Profile",
    icon: "RiUserFill",
    type: "all",
    link: "/dashboard/my-profile",
  },
  {
    id: 1,
    title: "Blogs",
    icon: "RiBloggerFill",
    type: "user",
    link: "/dashboard/user/blogs",
  },
  {
    id: 2,
    title: "Add Pet",
    icon: "RiBilibiliFill",
    type: "user",
    link: "/dashboard/user/pets",
  },
  {
    id: 3,
    title: "Cart",
    icon: "RiShoppingCart2Line",
    type: "user",
    link: "/cart",
  },
  {
    id: 4,
    title: "Item",
    icon: "RiStore2Line",
    type: "admin",
    link: "/dashboard/admin/additems",
  },
  {
    id: 5,
    title: "Category",
    icon: "RiApps2Fill",
    type: "admin",
    link: "/dashboard/admin/addcategory",
  },
  {
    id: 6,
    title: "Analytics",
    icon: "RiLineChartFill",
    type: "admin",
    link: "/dashboard/admin/dashboard",
  },
];

export default SideBarLinks;
