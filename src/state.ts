import { ref, computed } from '@vue-mini/wechat';
import { useNow } from './composables/now';
import type { MatchType, ParsedChar } from './logic';
import {
  START_DATE,
  WORD_LENGTH,
  parseWord as _parseWord,
  testAnswer as _testAnswer,
  isDstObserved,
  numberToHanzi,
} from './logic';
// eslint-disable-next-line import/no-cycle
import {
  useNumberTone as _useNumberTone,
  inputMode,
  spMode,
  tries,
} from './storage';
import { getAnswerOfDay } from './answers';

export const now = useNow();
export const showHint = ref(false);
export const showSettings = ref(false);
export const showHelp = ref(false);
export const showCheatSheet = ref(false);
export const useMask = ref(false);

export const useNumberTone = computed(() => {
  if (inputMode.value === 'sp') return true;
  if (inputMode.value === 'zy') return false;
  return _useNumberTone.value;
});

export const daySince = computed(() => {
  // Adjust date for daylight saving time, assuming START_DATE is not in DST
  const adjustedNow = isDstObserved(now.value)
    ? new Date(Number(now.value) + 3_600_000)
    : now.value;
  return Math.floor((Number(adjustedNow) - Number(START_DATE)) / 86_400_000);
});
export const dayNo = ref(daySince.value);
export const dayNoHanzi = computed(() => `${numberToHanzi(dayNo.value)}日`);
export const answer = computed(() => getAnswerOfDay(dayNo.value));

export const hint = computed(() => answer.value.hint);
export const parsedAnswer = computed(() => parseWord(answer.value.word));

export function parseWord(
  word: string,
  _ans = answer.value.word,
  mode = inputMode.value,
  spM = spMode.value
) {
  return _parseWord(word, _ans, mode, spM);
}

export function testAnswer(word: ParsedChar[], ans = parsedAnswer.value) {
  return _testAnswer(word, ans);
}

export const parsedTries = computed(() =>
  tries.value.map((i) => {
    const word = parseWord(i);
    const result = testAnswer(word);
    return {
      word,
      result,
    };
  })
);

export function getSymbolState(
  symbol?: string | number,
  key?: '_1' | '_2' | 'tone'
) {
  const results: MatchType[] = [];
  for (const t of parsedTries.value) {
    for (let i = 0; i < WORD_LENGTH; i++) {
      const w = t.word[i];
      const r = t.result[i];
      if (key) {
        if (w[key] === symbol) results.push(r[key]);
      } else {
        if (w._1 === symbol) results.push(r._1);
        if (w._2 === symbol) results.push(r._2);
        if (w._3 === symbol) results.push(r._3);
      }
    }
  }

  if (results.includes('exact')) return 'exact';
  if (results.includes('misplaced')) return 'misplaced';
  if (results.includes('none')) return 'none';
  return null;
}
