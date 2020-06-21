function solution(A) {
    step = 1
    passes = -1
    for (i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            if (passes < 0)
                passes = 0
            else
                step ++
        } else {
            if (passes >= 0)
                passes += step
        }
    }
    if (passes > 1000000000)
        return -1
    if (passes < 0)
        return 0
    return passes
}
