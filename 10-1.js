function solution(N) {
    var i = 1
    var result = 0
    while (i * i <= N) {
        if (N % i == 0)
            result += i * i == N ? 1 : 2
        i ++
    }
    
    return result
}
