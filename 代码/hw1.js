//求1-n之间所有偶数的乘积
//求n-m之间所有奇数的乘积
//圆的面积
//求两个数中的最大值
//求三个数中的最大值
//判断一个数是否是素数
var pi = 3.14;

function create_arr(n, m){
    //创建n-m的数组
    var arr = [m-n+1];
    for(var i=0; i<m-n+1; i++){
        arr[i]=i+n;
    }
    return arr;
}

function even_multiply(arr){
    //计算数组中偶数乘积
    var len = arr.length;
    var multi = 1;
    for(var i=0; i<len; i++){
        if(arr[i]%2 == 0){
            multi = multi*arr[i];
        }
    }
    return multi;
}

function odd_multiply(arr){
    //计算n-m所有奇数的乘积
    var len = arr.length;
    var multi = 1;
    for (var i=0; i<len; i++){
        if(arr[i]%2 != 0){
            multi = multi*arr[i];
        }
    }
    return multi;
}

function circle_area(r){
    //圆面积
    return pi*r*r;
}

/*
function two_max(a, b){
    return Math.max(a,b);
}

function three_max(a, b, c){
    return Math.max(a,b,c);
}
*/

function two_max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

function three_max(a, b, c){
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
}

function tell_prime_number(a){
    //判断一个数是否是素数
    //质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；
    if(a<1){
        return 'it is not a prime number';
    }
    else if(a == 1){
        return 'it is a prime number';
    }
    else{
        var count = 0;
        for(var i = 2; i < a; i++){
            if(a%i == 0){
                count+=1;
            }
        }
        if(!count){
            return 'it is a prime number';
        }
        else{
            return 'it is not a prime number';
        }
    }
}

function main(){
    /*
    var n = 1;
    var m = 10;
    
    var arr = create_arr(n, m);
    console.log(arr);
    
    var even_multi = even_multiply(arr);
    console.log(even_multi);
    
    var odd_multi = odd_multiply(arr);
    console.log(odd_multi);

    console.log(circle_area(2));

    console.log(two_max(even_multi, odd_multi));

    console.log(three_max(0,1,2));
    */

    console.log(tell_prime_number(0))
}

main()
