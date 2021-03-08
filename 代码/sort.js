//排序算法
var arr = [8, 6, 2, 3, 1, 5, 7, 4];
function bubble_sort(arr){
    var len = arr.length;
    for(var i = 0; i < len-1; i++){
        for(var j = 0; j < len-1-i; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};
function selection_sort(arr){
    var len = arr.length;
    for(var i = 0; i < len-1; i++){
        min_index = i;
        for(var j = i+1; j < len; j++){
            if(arr[j]<arr[min_index]){
                min_index = j;
            }
        var temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
        }
    }
    return arr;
}

bubble_sort(arr);
//selection_sort(arr);
console.log(arr)
