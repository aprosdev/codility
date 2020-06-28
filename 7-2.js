function solution(A, B) {
    var stack = []
    for (var i = 0; i < A.length; i++) {
        if (stack.length == 0)
            stack.push(i)
        else {
            var dir = B[i]
            var size = A[i]
            var k = stack.length - 1

            while(k >= 0) {
                if ((dir - B[stack[k]]) == -1 && A[stack[k]] < size)
                    stack.pop()
                k--
            }
            if (stack.length > 0) {
                if (dir - B[stack[stack.length-1]] != -1)
                    stack.push(i)
            } else
                stack.push(i)
        }
    }
    return stack.length
}
