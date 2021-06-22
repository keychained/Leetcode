//Given an array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
    let counter = {};

    for ( i = 0; i < nums.length; i++ ) {
        counter[nums[i]] ? counter[nums[i]]++ : counter[nums[i]] = 1;
    }

    for ( let key in counter ) {
        if ( counter[key] >= 2 ) {
            return true;
        }
    }

    return false;
}

