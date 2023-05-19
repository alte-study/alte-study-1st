function solution(bridge_length, weight, truck_weights) {
  let answer = 0,
    bridge = new Array(bridge_length).fill(0),
    weight_bridge = 0;

  answer++;
  bridge.shift();
  weight_bridge += truck_weights[0];
  bridge.push(truck_weights.shift());

  while (weight_bridge > 0) {
    answer++;
    weight_bridge -= bridge.shift();
    if (
      truck_weights.length > 0 &&
      weight_bridge + truck_weights[0] <= weight
    ) {
      weight_bridge += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }
  return answer;
};
