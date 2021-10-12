let obj1 = {
    "name": "Tshirt",
    "attributes": [
        {
            "name": "color",
            "values": [
                {
                    "name": "red",
                    "active": true
                },
                {
                    "name": "blue",
                    "active": true
                },
                {
                    "name": "green",
                    "active": true
                }
            ]
        },
        {
            "name": "size",
            "values": [
                {
                    "name": "S",
                    "active": true
                },
                {
                    "name": "M",
                    "active": false
                },
                {
                    "name": "L",
                    "active": true
                }
            ]
        }
    ]
}

let obj2 = {
    "name": "Lightning Cable",
    "attributes": [
        {
            "name": "color",
            "values": [
                {
                    "name": "red",
                    "active": true
                },
                {
                    "name": "blue",
                    "active": true
                },
                {
                    "name": "green",
                    "active": true
                }
            ]
        },
        {
            "name": "length",
            "values": [
                {
                    "name": "1m",
                    "active": true
                },
                {
                    "name": "3m",
                    "active": true
                },
                {
                    "name": "6m",
                    "active": false
                }
            ]
        },
        {
            "name": "finish",
            "values": [
                {
                    "name": "nylon",
                    "active": true
                },
                {
                    "name": "rubber",
                    "active": false
                }
            ]
        }
    ]
}

let { name, attributes } = obj2
console.log(attributes);

let atrArr = []

let testObj = {}
attributes.map((attribute) => {
    testObj[attribute.name] = attribute.values.map((value) => { return value.name })


    console.log(testObj);

    atrArr.push(attribute.name)
})

console.log(testObj);

let { color, size, finish } = testObj
console.log(color);
console.log(size);
console.log(finish);

console.log(atrArr);

let test = []
for (const key in testObj) {
    test.push(testObj[key])
}
console.log(test);

function cartesian(...args) {
    let r = [], max = args.length - 1;
    function helper(arr, i) {
        for (let j = 0, l = args[i].length; j < l; j++) {
            let a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i == max)
                r.push(a);
            else
                helper(a, i + 1);
        }
    }
    helper([], 0);
    return r;
}

console.log(cartesian([{ color: 'red' }, { color: 'blue' }, { color: 'green' }], [{ size: 'S' }, { size: 'M' }, { size: 'L' }]))
console.log(cartesian(...test))