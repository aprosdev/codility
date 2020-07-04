function solution(S) {
    var braces = 0
    if (S.length == 0)
        return 1
    else if (S[0] == ')')
        return 0

    for (var i = 0; i < S.length; i++) {
        if (S[i] == '(')
            braces ++
        else
            braces --
        if (braces < 0)
            return 0
    }
    if (braces == 0)
        return 1
    else
        return 0
}
