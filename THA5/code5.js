function help(str)
{
    let map={}
    let mx=0;
    let ans;
    for(let i=0; i<str.length; i++)
    {
        if(!map[str[i]])
            map[str[i]]=1;
        else
            map[str[i]]++;
        if(map[str[i]]>mx)
        {
            mx=map[str[i]];
            ans=str[i];
        }
    }
    console.log(ans+" ( "+mx+" times )");
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
help(arr1);