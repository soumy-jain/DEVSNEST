function array_Clone(str)
{
    return str.slice(0,str.length)
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));