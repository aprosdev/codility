function solution(A) {
    var n = A.length
    A.sort((a, b) => a - b)

    var max = A[n-1] * A[n-2] * A[n-3]
    max = Math.max(A[0] * A[1] * A[n-1], max)
    max = Math.max(A[0] * A[1] * A[2], max)
    return max
}
