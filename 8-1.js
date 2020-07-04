function solution(A) {
    var size = 0
    var value = 0
    
    for (var i = 0; i < A.length; i++) {
        if (size == 0) {
            size ++
            value = A[i]
        } else {
            if (value == A[i])
                size ++
            else {
                size --
                if (size == 0)
                    value = A[i]
            }
        }
    }
    if (size == 0)
        return -1
    var indexes = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] == value)
            indexes.push(i)
    }
    if (indexes.length > Math.floor(A.length / 2))
        return indexes[0]
    else
        return -1
}
