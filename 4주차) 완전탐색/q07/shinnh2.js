//의사코드
/*
1. 소수를 찾는 함수 isPrime, 정답을 저장할 Set인 primes을 생성한다.
2. numbers를 각 숫자를 가진 배열로 변환한다.
3. numbers의 각 요소로 조합을 만드는 함수 findCombination(전달인자 배열, 문자앞부분)을 생성한다.
    3.0. 함수 설명: 
    문자열 ['0','1','2']가 있을 때 이를 조합으로 만들려면
    '0', '01', '02', '012', 
    '1', '10', '12', '102', '120', ....
    이런식으로 하나의 요소를 선택하고, 그 요소에 하나씩 덧붙여가며 경우의 수를 만들어야 한다.
    이를 반복문으로 만드는 것은 힘드므로 재귀를 사용한다.
    - 함수 시작: 전체 배열과 빈문자열을 전달인자로 받아서 함수를 시작한다.
    
    3.1. 전달인자의 문자앞부분에 배열의 첫요소를 추가하여 숫자로 변환한다.
    3.2. 해당 숫자가 소수인지 아닌지 isPrime으로 판별하여
        > 소수라면 primes에 추가한다. (Set을 사용했으므로 중복은 자동으로 처리된다.)
    3.3. 첫요소를 제외한 나머지 배열과 앞에서 구한 문자앞부분+배열의 첫요소를 새로운 전달인자로 재귀함수를 실행한다.
    3.4. 3.1~3.3 과정을 배열의 요소만큼 반복한다.
    3.5. 위 전체 과정을 전달받은 배열의 길이가 없을 때까지 반복한다.
4. primes의 size를 리턴한다.
*/
function solution(numbers) {
	const isPrime = (n) => {
		if (n < 2) return false;
		if (n === 2) return true;
		let standard = parseInt(Math.sqrt(n)) + 1;
		for (let i = 2; i <= standard; i++) {
			if (n % i === 0) return false;
		}
		return true;
	};

	let primes = new Set();
	const findCombination = (arr, front) => {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				if (isPrime(Number(front + arr[i]))) primes.add(Number(front + arr[i]));
				let removedIArr = [...arr];
				removedIArr.splice(i, 1);
				findCombination(removedIArr, front + arr[i]);
			}
		}
	};

	findCombination(numbers.split(""), "");
	return primes.size;
}
