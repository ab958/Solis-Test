let arr = [
[1,1,1,0,0,0],
[0,1,0,0,0,0],
[1,1,1,0,0,0],
[0,0,2,4,4,0],
[0,0,0,2,0,0],
[0,0,1,2,4,0]];



function hourglassSum(arr) {
    let max = 0
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let sum = 0
            sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
            max = max < sum ? sum : max
        }
    }
    return max
}

console.log(hourglassSum(arr))