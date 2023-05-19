function solution(bridge_length, weight, truck_weights) {
	//의사코드
	//0. 현재 다리는 큐 bridge
	//1. truck_weights의 첫번째 트럭이 bridge를 건넌다.
	// 1초 추가한다.
	// 하중 sum에 다리의 맨 앞 칸만큼 뺀다.
	// 다리의 맨 앞 한 칸 제거
	// 2.1. 하중 sum에 두번째 트럭의 무게를 추가한 값이 weight보다 작은 경우
	// ->  bridge의 마지막에 트럭 추가
	// -> 하중 sum에 두번째 트럭의 무게를 추가한다.
	// 2.2. 그렇지 않은 경우
	// -> bridge의 마지막에 0 추가(출발하지 않음)
	//3. 위의 반복되는 과정을 truck_weights의 모든 트럭이 다리를 건널 때까지 반복한다.
	//4. 마지막 트럭을 보내면 3이 종료되므로, 여기에 다리의 길이만큼 더해 시간을 리턴한다.

	//초기 설정
	let time = 0; //총 시간
	let sum = 0; //현재 다리 하중
	let bridge = new Array(bridge_length).fill(0); //다리 상태를 나타내는 큐

	while (truck_weights.length > 0) {
		time++;
		sum -= bridge.shift();
		if (sum + truck_weights[0] <= weight) {
			bridge.push(truck_weights[0]);
			sum += truck_weights.shift();
		} else {
			bridge.push(0);
		}
	}

	return time + bridge.length;
}
