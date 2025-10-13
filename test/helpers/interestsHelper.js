
import interestsData from '../data/interests_cases.json';

export function getInterestsFromJson() {
  return interestsData.interests.map(i => i.toLowerCase());
}
