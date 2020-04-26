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
  known_version: string
}


export interface StreamingConfigInterface {
  servername?: string,
  serverport?: string,
  squeezeuser?: string,
  squeezepwd?: string,
  playername: string

}


export interface AudioConfigInterface {
  audioplayer: string,
  rate: string,
  sprate: string,
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
  dmix_squeezelite?: boolean,
  dmix_gmediarender?: boolean,
  dmix_shairportsync?: boolean,
  dmix_bluealsaaplay?: boolean,
  dmixms_squeezelite?: boolean,
  dmixms_gmediarender?: boolean,
  dmixms_shairportsync?: boolean,
  dmixms_bluealsaaplay?: boolean,
  jack_squeezelite?: boolean,
  jack_gmediarender?: boolean,
  jack_shairportsync?: boolean,
  jack_bluealsaaplay?: boolean,
  jack_netjack?: boolean,
  jack_input?: boolean,
  jackms_squeezelite?: boolean,
  jackms_gmediarender?: boolean,
  jackms_shairportsync?: boolean,
  jackms_bluealsaaplay?: boolean,
  jackms_netjack?: boolean,
  jackms_input?: boolean,
  jackbf_squeezelite?: boolean,
  jackbf_gmediarender?: boolean,
  jackbf_shairportsync?: boolean,
  jackbf_bluealsaaplay?: boolean,
  jackbf_netjack?: boolean,
  jackbf_input?: boolean,
  jackbfms_squeezelite?: boolean,
  jackbfms_gmediarender?: boolean,
  jackbfms_shairportsync?: boolean,
  jackbfms_bluealsaaplay?: boolean,
  jackbfms_netjack?: boolean,
  jackbfms_input?: boolean

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
  def_coeff: string,
  filter?: Array<AroioFilter>
}

export interface ConfigurationInterface {
  network: NetworkConfigInterface,
  system: SystemConfigInterface,
  streaming: StreamingConfigInterface,
  audio: AudioConfigInterface,
  convolver: ConvolverConfigInterface,
}


export interface AroioSettingsInterface {
  name: string,
  timestamp: string,
  description: string,
  initial_config: boolean
  configuration: ConfigurationInterface
}
