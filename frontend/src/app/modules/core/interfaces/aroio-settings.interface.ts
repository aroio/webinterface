import {strict} from 'assert';

export interface NetworkConfigInterface {
  hostname: string,
  wifi: boolean,
  lan_dhcp?: string,
  lan_ipaddr?: string,
  lan_netmask?: string,
  lan_dnsserv?: string,
  lan_gateway?: string,
  wlan_dhcp?: string,
  wlan_ipaddr?: string,
  wlan_netmask?: string,
  wlan_dnsserv?: string,
  wlan_gateway?: string,
  wlanssid?: string,
  wlanpwd?: string
}


export interface SystemConfigInterface {
  updateserver: string,
  betaserver: string,
  usebeta: string,
  platform: string,
  userpasswd: string,
  known_version: string,
  display_rotate?: boolean
}


export interface StreamingConfigInterface {
  servername?: string,
  serverport?: string,
  squeezeuser?: string,
  squeezepwd?: string,
  playername: string

}


export interface WebinterfaceConfigInterface {
  dark_mode?: boolean,
  initial_setup?: boolean
  advanced_configuration?: boolean
}



export interface PlayerConfigInterface {
  mscoding: boolean,
  measurement_output: string,
  rate: number,
  channels: number,
  squeezelite: boolean,
  gmediarender: boolean,
  shairportsync: boolean,
  bluealsaaplay: boolean,
  input: boolean,
  netjack: boolean
}

export interface OutputConfigInterface {
  audio_output: string,
  direct_config: PlayerConfigInterface,
  bus_config: PlayerConfigInterface,
  convolver_config: PlayerConfigInterface
}


export interface AudioConfigInterface {
  audioplayer: string,
  rate: string,
  shairplayrate: string,
  channels: string,
  mscoding: string,
  volume: string,
  soundcard: string,
  resampling: string,
  volume_start: string,
  audio_output: string,
  measurement_output: string,
  debug: string,
  jackbuffer: string,
  jackperiod: string,
  raw_player: string,
  raw_playerms: string,
  squeeze_maxfrequency: string,
  squeeze_intbuffer: string,
  squeeze_outbuffer: string,
  sp_outbuffer: string,
  sp_period: string,
  bf_partitions: string,
  output_configuration: OutputConfigInterface
}

export interface AroioFilter {
  coeff_name?: string,
  coeff_comment?: string,
  coeff_att?: string,
  coeff_delay?: string,
}

export interface ConvolverConfigInterface {
  debug: string,
  load_prefilter: boolean,
  brutefir: boolean,
  def_coeff: number,
  filters?: Array<AroioFilter>
}

export interface ConfigurationInterface {
  network: NetworkConfigInterface,
  system: SystemConfigInterface,
  streaming: StreamingConfigInterface,
  audio: AudioConfigInterface,
  convolver: ConvolverConfigInterface,
  webinterface: WebinterfaceConfigInterface,
}


export interface AroioSettingsInterface {
  username: string,
  timestamp: string,
  description: string,
  authentication_enabled?: boolean
  password?: string
  password_repeated?: string
  configuration: ConfigurationInterface
}
