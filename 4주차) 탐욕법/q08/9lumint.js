const canCompleteCircuit = function(gas, cost) {
    let tank = 0, totalTank = 0, start = 0;
    for(let i = 0; i < gas.length; i++){
        tank += (gas[i] - cost[i]);
        totalTank += (gas[i] - cost[i]);
        if (tank < 0){
            start = i + 1;
            tank = 0;
        }
    }
    return totalTank < 0 ? -1 : start;
};
