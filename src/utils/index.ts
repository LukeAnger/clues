import { getQuestions } from './getQuestions';
import { getNextConcepts } from './getNextConcepts';
import { getTopicMapping } from './getTopicMapping';

const captilizeEachWord = (str: string) => {
  return str
    // split on space and hyphen
    // .split(/[\s-]/)
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const floatToPercent = (float: number) => {
  return Math.round(float * 100);
}

export { getQuestions, getNextConcepts, getTopicMapping, captilizeEachWord, floatToPercent };