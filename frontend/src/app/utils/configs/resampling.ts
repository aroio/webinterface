export const ResamplingFrequencies = [
  {
    value: 44100,
    label: '44.1kHz',
    config: {
      jackbuffer: 4096,
      jackperiod: 3,
      squeeze_alsabuffer: 16384,
      squeeze_alsaperiod: 4,
      squeeze_intbuffer: 16384,
      squeeze_outbuffer: 8192,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100
    }
  },
  {
    value: 48000,
    label: '48kHz',
    config: {
      jackbuffer: 4096,
      jackperiod: 3,
      squeeze_alsabuffer: 16384,
      squeeze_alsaperiod: 4,
      squeeze_intbuffer: 8192,
      squeeze_outbuffer: 8192,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
  {
    value: 88000,
    label: '88kHz',
    config: {
      jackbuffer: 8192,
      jackperiod: 3,
      squeeze_alsabuffer: 8192,
      squeeze_alsaperiod: 4,
      squeeze_intbuffer: 4096,
      squeeze_outbuffer: 4096,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
  {
    value: 96000,
    label: '96kHz',
    config: {
      jackbuffer: 8192,
      jackperiod: 3,
      squeeze_alsabuffer: 8192,
      squeeze_alsaperiod: 4,
      squeeze_intbuffer: 4096,
      squeeze_outbuffer: 4096,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
  {
    value: 174000,
    label: '174kHz',
    config: {
      jackbuffer: 8192,
      jackperiod: 3,
      squeeze_alsabuffer: 4096,
      squeeze_alsaperiod: 2,
      squeeze_intbuffer: 4096,
      squeeze_outbuffer: 4096,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
  {
    value: 192000,
    label: '192kHz',
    config: {
      jackbuffer: 8192,
      jackperiod: 3,
      squeeze_alsabuffer: 4096,
      squeeze_alsaperiod: 2,
      squeeze_intbuffer: 4096,
      squeeze_outbuffer: 4096,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
  {
    value: 348000,
    label: '348kHz',
    config: {
      jackbuffer: 8192,
      jackperiod: 3,
      squeeze_alsabuffer: 4096,
      squeeze_alsaperiod: 2,
      squeeze_intbuffer: 4096,
      squeeze_outbuffer: 4096,
      sp_outbuffer: 32768,
      sp_period: 2,
      bf_partitions: 2,
      resampling: 'speexrate_medium',
      sp_samplerate: 44100,
    }
  },
]
