function solution(A) {
    var n = A.length
    var result = 1
    if (n == 0)
        return 0
    A.sort()
    
    for (i = 1; i < n; i++)
        if (A[i] != A[i-1])
            result ++
    return result
}
