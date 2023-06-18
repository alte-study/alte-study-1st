/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

//의사코드
/*
0. 루트 노드서부터 각 노드의 값을 전체 합계에서 뺀다. 그렇게 노드를 아래로 탐색하며 반복해서 뺐을 때 리트노드에서 최종값이 0이 된다면 true이다. 만약 최종값이 0이 아니거나, 현재 노드가 없다면 false를 리턴한다.
1. 반복하는 과정을 재귀로 표현한다. (인자는 현재 노드, 현재 합계값)
2. 현재 노드의 값이 없다면 false이다. (재귀 탈출조건1)
3. 현재 노드의 값이 있다면, 리트노드인지 아닌지 확인한다.
현재 합계값에서 현재 노드의 값을 뺀 것이 0이라면 true, 아니라면 false를 리턴한다. (재귀 탈출조건2)
4. 현재 노드가 리트노드가 아니라면 
4.1. 왼쪽자식과 targetSum-현재노드 값으로 재귀를 반복한다. 
4.2. 오른쪽자식과 targetSum-현재노드 값으로 재귀를 반복한다.
4.3. 각 자식 중 그 결과가 하나라도 true이면 된다.
*/
var hasPathSum = function (root, targetSum) {
	if (root === null) return false;
	if (root.left === null && root.right === null)
		return targetSum - root.val === 0;
	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	);
};
