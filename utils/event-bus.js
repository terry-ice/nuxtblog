
/*
*
* 一些无法适用于 store 的数据状态
*
*/

import Vue from 'vue'
import musicPlayerBuilder from '~/utils/music-player'

export default new Vue({
  data() {
    return {
      emoji233333: null,
      player: {
        player: null,
        playerState: {
          seek: 0,
          index: 0,
          targetIndex: 0,
          volume: 0.4,
          wave: false,
          ready: false,
          muted: false,
          loading: false,
          playing: false,
          progress: 0
        },
        list: {
          fetching: false,
          data: null
        },
        song: {
          fetching: false,
          data: null
        },
        lrc: {
          fetching: false,
          data: null
        }
      }
    }
  },
  computed: {
    currentSong() {
      if (this.player.list.data) {
        return this.player.list.data.tracks[this.player.playerState.index]
      } else {
        return null
      }
    }
  },
  methods: {
    initPlayer() {
      musicPlayerBuilder(this.player)
      if (this.player.playerState.ready && this.player.player.play) {
        // window.addLoadedTask(this.player.player.play)
        window.addLoadedTask(() => {
          // this.player.player.play()
          window.onmousemove = () => {
            this.player.player.play()
            window.onmousemove = null
          }
        })
      }
    },

    requestMusicList() {
      this.player.list.fetching = true
    },
    getMusicListFailure() {
      this.player.list.fetching = false
      this.player.list.data = null
    },
    getMusicListSuccess(action) {
      this.player.list.fetching = false
      this.player.list.data = action.result
    },

    requestSong() {
      this.player.song.fetching = true
    },
    getSongFailure() {
      this.player.song.data = null
      this.player.song.fetching = false
    },
    getSongSuccess(action) {
      this.player.song.data = action.result
      this.player.song.fetching = false
    },
    
    requestLrc() {
      this.player.lrc.fetching = true
    },
    getLrcFailure() {
      this.player.lrc.fetching = false
      this.player.lrc.data = null
    },
    getLrcSuccess(action) {
      this.player.lrc.fetching = false
      this.player.lrc.data = action.result
    }
  }
})
