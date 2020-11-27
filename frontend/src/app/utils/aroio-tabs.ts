import {AroioTabsInterface} from '../modules/core/interfaces/aroio-tabs.interface';

export const AroioTabs: AroioTabsInterface[] = [
  {
    id: 'tab-audio',
    position: 3,
    label: 'Audio',
    route: 'audio',
    enabled: true
  },
  {
    id: 'tab-convolver',
    position: 4,
    label: 'Convolver',
    route: 'convolver',
    enabled: true
  },
  {
    id: 'tab-network',
    position: 1,
    label: 'Network',
    route: 'network',
    enabled: true
  },
  {
    id: 'tab-streaming',
    position: 3,
    label: 'Streaming',
    route: 'streaming',
    enabled: true
  },
  {
    id: 'tab-system',
    position: 0,
    label: 'System',
    route: 'system',
    enabled: true
  },
]
