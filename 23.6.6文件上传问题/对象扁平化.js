//描述问题 给一个对象对象包含嵌套属性我们需要拉平对象

let obj = {
    a: "1",
    b: 123,
    c: [ 1, 2, 3, 4 ,{
        array:"array",
        name:"zhangsan",
        age:123,
    }],
    d: {
        e: {
            f: "g"
        }
    }
}
let objresult = {
    'a': '1',
    'b': '123',
    'c[0]': "1",
    'd.e': "f"
}

function flatObj ( key, obj )
{
    const newobj = {}
    for ( const item in obj )
    {
        if ( typeof obj[ item ] != 'object' )
        {
            if ( key == '' )
            {
                newobj[ " " + item + "" ] = obj[ item ]
            } else
            {
                newobj[ key + '.' + item ] = obj[ item ]
            }
        }
        else
        {
            if ( Array.isArray( obj[ item ] ) )
            {
                obj[item].forEach( ( value, index ) =>
                {
                    if(typeof value != 'object'){
                        newobj[item + '[' + index + ']'] = value
                    }else{
                        Object.assign(newobj,flatObj(item + '[' + index + ']',value))
                    }
                } );
            } else
            {
                Object.assign( newobj, flatObj( key != '' ? key + '.' + item : item, obj[ item ] ) )
            }

        }
    }
    return newobj
}
console.log( "🚀 ~ file: 对象扁平化.js:34 ~ flatObj('',obj):", flatObj( '', obj ) )
