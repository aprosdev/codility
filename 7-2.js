function solution(A, B) {
    var upStream = []
    var downStream = []
    var N = B.length - 1

    for (var i = 0; i < B.length/2; i++) {
        if (B[i] == 0)
            upStream.push(A[i])
        else
            downStream.push(A[i])

        if (i == N-i)
            break;

        if (B[N-i] == 0)
            upStream.push(A[N-i])
        else
            downStream.push(A[N-i])
    }
    if (upStream.length == 0)
        return downStream.length
    if (downStream.length == 0)
        return upStream.length

    while (upStream.length > 0 && downStream.length > 0) {
        if (upStream[upStream.length-1] > downStream[downStream.length-1])
            downStream.pop()
        else
            upStream.pop()
    }
    return upStream.length + downStream.length
}
