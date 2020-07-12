function solution(A) {
    var peaks = []
    var N = A.length
    var i = 1
    if (N < 3)
        return 0
    
    while (i < N) {
        if (A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks.push(i)
            i+=2
        } else
            i++
        
    }
    if (peaks.length < 2)
        return peaks.length
    i = peaks.length

    var prev_peak, count, availables = 0
    while (i > 2) {
         prev_peak = 0
         count = 1
         availables = i
        for (var j = 1; j < peaks.length; j++) {
            if (peaks[j]-peaks[prev_peak] >= i) {
                prev_peak = j
                count ++
            }
            if (peaks.length - 1 + j + count < i)
                break
        }
        if (i == count)
            return i
        i--
    }
    return 2
}
