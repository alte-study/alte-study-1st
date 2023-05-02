function solution(participant, completion) {
  let runnerTable = {};
  for (let i = 0; i < participant.length; i++) {
    runnerTable[participant[i]] = (runnerTable[participant[i]] || 0) + 1;
  }
  for (let i = 0; i < completion.length; i++) {
    runnerTable[completion[i]] -= 1;
  }
  for (let i = 0; i < participant.length; i++) {
    if (runnerTable[participant[i]] !== 0) {
      return participant[i];
    }
  }
}
