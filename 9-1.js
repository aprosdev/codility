function solution(A) {
    var N = A.length
    var max_sum_ending_at = Array(N).fill(0)
    var max_sum_starting_from = Array(N).fill(0)
    var max_ending = max_starting = 0
    if (A.length == 3)
        return 0
    for (var i = 1; i < N - 1; i++) {
        max_ending = Math.max(0, max_ending + A[i])
        max_sum_ending_at[i] = max_ending
    }
    
    for (i = N - 2; i > 0; i--) {
        max_starting = Math.max(0, max_starting + A[i])
        max_sum_starting_from[i] = max_starting
    }
    
    var max = 0
    for (i = 1; i < N - 1; i++) {
        max = Math.max(max_sum_ending_at[i-1] + max_sum_starting_from[i+1], max)
    }
    return max
}
