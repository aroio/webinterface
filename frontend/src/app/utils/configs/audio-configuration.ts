
export const AroioCodings = [
  {
    id: 'coding_stereo',
    position: 0,
    value: false,
    label: 'Stereo',
    description: 'Audiosignal wird als normales Stereo-Signal wiedergegeben.'
  },
  {
    id: 'coding_ms',
    position: 1,
    value: true,
    label: 'M/S',
    description: 'Audiosignal wird Mitte-Seite kodiert. Dies ist nur sinnvoll, in zusammenhang mit einem Abacus Cleaner auf Seiten der Hardware.'
  }
];
export const AroioPlayer = [
  {
    id: 'squeezelite',
    position: 0,
    label: 'Squeezelite',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'gmediarender',
    position: 1,
    label: 'UPnP',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'shairportsync',
    position: 2,
    label: 'ShAirPlay',
    description: 'Apple Airplay Support'
  },
  {
    id: 'bluealsaaplay',
    position: 3,
    label: 'Bluetooth',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'input',
    position: 4,
    label: 'Line In',
    description: 'Direkter Raspberry Pi Ausgang'
  },
  {
    id: 'netjack',
    position: 5,
    label: 'NetJack',
    description: 'Direkter Raspberry Pi Ausgang'
  }
];
export const AroioOutputs = [
  {
    id: 'direct_config',
    position: 0,
    value: 'vol-plug',
    label: 'Direkt',
    description: 'Direkter Raspberry Pi Ausgang',
    multiselectable: false,
    player: AroioPlayer,
    codings: AroioCodings
  },
  {
    id: 'bus_config',
    position: 1,
    value: 'jack',
    label: 'Bus',
    description: 'Bus Ausgang für komplexeres Audio Routing',
    multiselectable: true,
    player: AroioPlayer,
    codings: AroioCodings
  },
  {
    id: 'convolver_config',
    position: 2,
    value: 'jack-bf',
    label: 'Convolver',
    description: 'Convolver zur korrektur Messung',
    multiselectable: true,
    player: AroioPlayer,
    codings: AroioCodings
  },
];
