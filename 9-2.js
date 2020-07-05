function solution(A) {
    var min = A[0]
    var max = 0
    var candidates = []
    for (var i = 1; i < A.length; i++) {
        if (A[i] > min) {
            max = Math.max(max, A[i] - min)
        } else {
            if (max > 0)
                candidates.push(max)
            min = A[i]
            max = 0
        }
    }
    candidates.push(max)

    var max = 0
    for (i = 0; i < candidates.length; i++) {
        max = Math.max(max, candidates[i])
    }
    return max
}
