export interface NetworkConfigInterface {
  hostname: string,
  dhcp: boolean,
  wifi: boolean,
  ipaddr?: string,
  netmask?: string,
  dnsserv?: string,
  gateway?: string,
  wlanssid?: string,
  wlanpwd?: string
}


export interface SystemConfigInterface {
  updateserver: string,
  betaserver: string,
  usebeta: string,
  platform: string,
  userpasswd: string

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
  channels: string,
  mscoding: string,
  volume: string,
  jackbuffer: string,
  soundcard: string

}


export interface ConvolverConfigInterface {
  debug: string,
  load_prefilter: string,
  brutefir: string,
  def_coeff: string,
  def_scoeff: string
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
  configuration: ConfigurationInterface
}
