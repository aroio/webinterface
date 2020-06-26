import {SidebarWidgetInterface} from '../../modules/core/interfaces/sidebar-widget';

export enum WidgetTypes {
  SPOTIFY = 'spotify',
  SYSTEM_INFO = 'system',
  NETWORK_INFO = 'network',
  HELPTEXT = 'help' // Title and Content are required
}

export const Widgets: {[key: string]: SidebarWidgetInterface} = {
  spotify: {
    id: WidgetTypes.SPOTIFY,
    position: 0,
    title: null,
    content: null,
    classModifier: 'spotify'
  },
  meassurement_links: {
    id: WidgetTypes.HELPTEXT,
    position: 0,
    title: 'Nützliche Links:',
    content: 'Hier findest du Hilfe und nützliche Links zu der Messung.',
    classModifier: 'help'
  },
  system_info: {
    id: WidgetTypes.SYSTEM_INFO,
    position: 0,
    title: 'System Informationen:',
    content: 'Hier findest du Hilfe und nützliche Links zu der Messung.',
    classModifier: 'help'
  }
};
