const bitmovin = require('bitmovin-player')
const ui = require('bitmovin-player-ui')

const setupPlayer = () => {
  const config = {
    key: '9ed67940-5265-468d-98f5-f4638258d3c5',
    style: {
      aspectratio: '16:9',
      ux: false
    },
    tweaks: {
      file_protocol: true,
      app_id: 'io.vigour.app',
      restart_threshold: 4
    },
    adaptation: {
      mobile: {
        bitrates: {
          minSelectableAudioBitrate: 0,
          maxSelectableAudioBitrate: '256000bps',
          minSelectableVideoBitrate: 0,
          maxSelectableVideoBitrate: '1mbps'
        }
      }
    },
    playback: {
      muted: false,
      autoplay: false,
      playsinline: true,
      timeShift: false
    },
    source: {
      dash: 'https://tvaesecond.akamaized.net/77340/MOV0000005_4092_(4092_ISMUSP).ism/MOV0000005_4092_(4092_ISMUSP).mpd',
      hls: 'https://tvaesecond.akamaized.net/77340/MOV0000005_4092_(4092_ISMUSP).ism/MOV0000005_4092_(4092_ISMUSP).m3u8'
    }
  }
  bitmovin.player('player-id').setup(config).then(function (player) {
    // const myUiManager = bitmovin.playerui.UIManager.Factory.buildDefaultUI(player)
    // const myUiManager = (ui.UIManager.Factory.buildDefaultUI(player))
  })
}

setupPlayer()
