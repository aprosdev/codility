function solution(H) {
    var blocks = 0
    var heights = []
    
    for (var i = 0; i < H.length; i++) {
        if (heights.length == 0)
            heights.push(H[i])
        else {
            while (heights[heights.length -1] >= H[i]) {
                if (heights[heights.length -1] > H[i])
                    blocks ++
                heights.pop()
            }
            heights.push(H[i])
        }
    }
    return blocks + heights.length
}
