const findRelativeRanks = function(score) {
    let ranks = new MaxPriorityQueue();
	for (let i = 0; i < score.length; i++) {
		ranks.enqueue(i, score[i]);
       }
	for (let i = 0; i < score.length; i++) {
		let item = ranks.dequeue(), rank;       
		switch (i) {
			case 0:
				rank = "Gold Medal";
				break;
			case 1:
				rank = "Silver Medal";
				break;
			case 2:
				rank = "Bronze Medal";
				break;
			default:
				rank = (i + 1).toString();
		}        
		score[item.element] = rank;
	}    
	return score;
};
