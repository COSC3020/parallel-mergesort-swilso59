// Main function to perform mergesort
async function parallelMergesort(x) {
    // If array of length 1 or less is already sorted
    if (x.length <= 1) {
        return x;
    }
    // Create temporary array for merging
    const tmp = new Array(x.length);
    // Start the recursive sorting process
    await msort(x, 0, x.length -1, tmp);
    // Return the fully sorted array
    return x;
}

// Recursive function to divide the array and sort concurrently 
async function msort(x, lo, hi, tmp) {
    if (lo >= hi) {
        return;
    }

    // Find the midpoint to divide the array 
    const mid = Math.floor((lo + hi) / 2);
    // Create promises for the left and right recursive calls to enable parallelism
    const leftPromise = msort(x, lo, mid, tmp);
    const rightPromise = msort (x, mid + 1, hi, tmp);

    // Use promise.all to wait for both halves to finish sorting 
    await Promise.all([leftPromise, rightPromise]);

    // Merge the sorted halves into a single sorted segment 
    recursiveMerge(x, lo, mid, hi, tmp);
}

// Function to merge two sorted halves into a single sorted section 
function recursiveMerge(x, lo, mid, hi, tmp) {
    let a = lo;
    let b = mid + 1;

    // Merge the two halves into the temporaty array 
    for (let k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] <= x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }

    for (let k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}
