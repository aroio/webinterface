export interface SidebarWidgetInterface {
  id: string;
  position: number;
  title?: string;
  content?: string | HTMLElement;
  classModifier?: string;
}
