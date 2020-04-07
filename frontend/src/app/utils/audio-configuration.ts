export const AroioCodings = [
  {
    id: 'coding_stereo',
    position: 0,
    label: 'Stereo',
    description: 'Audiosignal wird als normales Stereo-Signal wiedergegeben.'
  },
  {
    id: 'coding_ms',
    position: 1,
    label: 'M/S',
    description: 'Audiosignal wird Mitte-Seite kodiert. Dies ist nur sinnvoll, in zusammenhang mit einem Abacus Cleaner auf Seiten der Hardware.'
  }
];
export const AroioPlayer = [
  {
    id: 'player_sqeeze',
    position: 0,
    label: 'Squeezelite',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'player_upnp',
    position: 1,
    label: 'UPnP',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'player_shairplay',
    position: 2,
    label: 'ShAirPlay',
    description: 'Apple Airplay Support'
  },
  {
    id: 'player_bluetooth',
    position: 3,
    label: 'Bluetooth',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'player_line',
    position: 4,
    label: 'Line In',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'player_netjack',
    position: 5,
    label: 'NetJack',
    description: 'Direkter Raspberry Pi Ausgang'
  }
];
export const AroioOutputs = [
  {
    id: 'output_direct',
    position: 0,
    label: 'Direkt',
    description: 'Direkter Raspberry Pi Ausgang',
    multiselectable: false,
    player: AroioPlayer,
    codings: AroioCodings
  },
  {
    id: 'output_bus',
    position: 1,
    label: 'Bus',
    description: 'Bus Ausgang für komplexeres Audio Routing',
    multiselectable: true,
    player: AroioPlayer,
    codings: AroioCodings
  },
  {
    id: 'output_convolver',
    position: 2,
    label: 'Convolver',
    description: 'Convolver zur korrektur Messung',
    multiselectable: true,
    player: AroioPlayer,
    codings: AroioCodings
  },
];
