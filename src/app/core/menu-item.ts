import { SidebarItem } from "../shared/models/sidebarItem.model";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { title: 'Dashboard', icon: 'far fa-home', route: '/dashboard' },
  { title: 'Orders', icon: 'far fa-shopping-cart', route: '/orders', disabled: true },
  { title: 'Users', icon: 'fas fa-user-friends', route: '/users', disabled: true },
  { title: 'Items', icon: 'fal fa-store', route: '/items', disabled: true },
  { title: 'Tranactions', icon: '', route: '/transactions', disabled: true },
  { title: 'Reports', icon: 'fal fa-file-chart-line', route: '/reports', disabled: true },
  { title: 'Messages', icon: 'fal fa-comment-dots', route: '/messages', hasNotification: true },
  { title: 'Support', icon: 'fal fa-life-ring', route: '/support', disabled: true },
  { title: 'Settings', icon: 'fas fa-cog', route: '/settings', disabled: true },
];