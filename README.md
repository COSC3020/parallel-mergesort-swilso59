# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Answer
We determine the span of the parallel mergesort implementation by analyzing the msort function. 
1. Recursive Splitting:
   - The array is split into 2 halves recursively.
   - The recursion depth is determined by the number of splits needed to reach the base case.
   - This takes $\log_2(n)$ levels of recursion.
2. Parallel Recursive Calls:
   - The left and right halves are sorted concurrently. This does not affect the span.
3. Merge:
   - At each of the $\log_2(n)$ levels of recursion, merging all subarrays at that level collectively takes $O(n)$ work, but these merges do not affect the 
     span.

The total work is similar to the recursive implementation: $O(n \cdot \log_2(n))$.  
However, the span is determined by the recursive depth, which is $\Theta(\log_2(n))$.

## Plagiarism Acknowledgement 

I first started off by reviewing the lecture videos for parallelism. I started with the recursive mergesort implementation from the mergesort assignment. Then I looked for some information online.
- https://www.w3schools.com/js/js_async.asp
- https://www.w3schools.com/jsref/jsref_obj_promise.asp
- https://www.w3schools.com/jsref/jsref_promise_all.asp

For time complexity I had some trouble with the analysis. I ended up looking at a few repositories. I think I was mainly having trouble understadning the differences between work and span.
- https://github.com/COSC3020/parallel-mergesort-DJReflexive
- https://github.com/COSC3020/parallel-mergesort-Hrics12-1

I adapted the test from the quicksort assignment test code.
- https://github.com/COSC3020/quicksort-swilso59-2/blob/main/code.test.js

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
