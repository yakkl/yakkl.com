export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  type?: 'link' | 'dropdown' | 'separator' | 'title';
  iconPaths?: string[];
}
