function solution(A) {
    var result = getLeader(A)
    if (!result)
        return 0

    var leader = result[0]
    var leaderCount = result[1]
    var numberOfEquiLeaders = 0
    var count = 0
    var N = A.length

    for (var i = 0; i < N; i++) {
        if (A[i] == leader) {
            count ++
        }
        if (count > Math.floor((i+1)/2) && 
            (leaderCount - count) > Math.floor((N-i-1)/2))
            numberOfEquiLeaders++
    }
    return numberOfEquiLeaders
}

function getLeader(A) {
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
        return null
    
    var count = 0
    for (var i = 0; i < A.length; i++) {
        if (A[i] == value)
            count ++
    }
    if (count > Math.floor(A.length/2))
        return [value, count]
    else
        return null
}
