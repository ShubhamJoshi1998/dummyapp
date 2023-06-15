import React from 'react'

let arrayJson = [
    { "methodName": "Concat", "id": "concatmethod" },
    { "methodName": "Join", "id": "joinmethod" },
    { "methodName": "Pop", "id": "popmethod" },
    { "methodName": "Push", "id": "pushmethod" },
    { "methodName": "Shift", "id": "shiftmethod" },
    { "methodName": "Unshift", "id": "unshiftmethod" },
    { "methodName": "Slice", "id": "slicemethod" },
    { "methodName": "Splice", "id": "splicemethod" },
    { "methodName": "ForEach", "id": "forEachmethod" },
    { "methodName": "Map", "id": "mapmethod" },
    { "methodName": "Filter", "id": "filtermethod" },
    { "methodName": "Reduce", "id": "reducemethod" },
    { "methodName": "ReduceRight", "id": "reduceRightmethod" },
    { "methodName": "Find", "id": "findmethod" },
    { "methodName": "FindIndex", "id": "findIndexmethod" },
    { "methodName": "IndexOf", "id": "indexOfmethod" },
    { "methodName": "LastIndexOf", "id": "lastIndexOfmethod" },
    { "methodName": "Some", "id": "somemethod" },
    { "methodName": "Every", "id": "everymethod" },
    { "methodName": "Sort", "id": "sortmethod" },
    { "methodName": "Reverse", "id": "reversemethod" },
    { "methodName": "IsArray", "id": "isArraymethod" },
    { "methodName": "Includes", "id": "includesmethod" },
    { "methodName": "Splice", "id": "splicemethod" }
]

console.log(arrayJson[0].methodName)


const ArrayMethods = () => {
    return (
        <>
            <div className='Container'>
                <div className='headingtext'>ArrayMethods</div>
                <div className='descriptiontext'>
                    Here are the list Of mostly used Array Methods:
                </div>
                <div>
                    <ul className="columns" data-columns="2">
                        {arrayJson?.map((item) => {
                            console.log("item", item.methodName)
                            return (
                                <li style={{ textAlign: "left" }}>
                                    {item.methodName}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <div className="back-button">
                        <a href="/" className="label">back</a>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ArrayMethods