import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
