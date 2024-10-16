function add(nums) {
    if (nums === '') {
        return 0;
    }

    let delimiter = ',';
    if (nums.startsWith('//')) {
        delimiter = nums[2];
        nums = nums.substring(4);
    }

    const number = nums.replace(/\n/g, delimiter).split(delimiter);
    const negatives = number.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return number.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
