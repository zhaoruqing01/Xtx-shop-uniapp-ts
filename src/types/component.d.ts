/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //设置小兔鲜组件的自动导入
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
