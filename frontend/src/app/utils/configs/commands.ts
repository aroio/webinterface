import {AroioCommandInterface} from '../../modules/core/interfaces/command.interface';

export enum MeassurementCommands {
  MEASUREMENT_01_BEGINN = 'measurement_beginn',
  MEASUREMENT_02_MICROPHONE_ADJUSTMENT = 'microphone_adjustment',
  MESSUREMENT_03_START = 'messurement_start',
  MESSUREMENT_04_RUNNING = 'messurement_running',
  MEASUREMENT_05_CREATE_FILTER = 'create_filter',
  MEASUREMENT_06_SAVE_FILTER = 'save_filter',
}


export const AroioCommands: {[key: string]: AroioCommandInterface} = {
  measurement_beginn: {
      command: 'begin_measurement',
      message: 'Anlegen einer neuen Messung.'
  },
  microphone_adjustment: {
      command: 'microphone_adjustment',
      message: 'Ausrichtung des Mikrofons.'
  },
  messurement_start: {
      command: 'messurement_start',
      message: 'Messung wird gestartet.'
  },
  messurement_running: {
      command: 'messurement_running',
      message: 'Messung läuft.'
  },
  create_filter: {
      command: 'create_filter',
      message: 'Messung läuft.'
  },
  save_filter: {
      command: 'save_filter',
      message: 'Messung läuft.'
  },
};
