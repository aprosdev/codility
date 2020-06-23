function solution(S) {
    if (S.length == 0)
        return 1

    if (S.length % 2 != 0)
        return 0

    var stack = []
    var matches = {
        '{' : 1,
        '}' : -1,
        '[' : 2,
        ']' : -2,
        '(' : 3,
        ')' : -3
    }
    S = S.split('').map(a => matches[a])
    for (let i = 0; i < S.length; i++) {
        if (S[i] > 0) {
            stack.push(S[i])
        } else if (S[i] == -stack.pop()) {
        } else
            return 0
    }
    if (stack.length > 0)
        return 0
    return 1
}
