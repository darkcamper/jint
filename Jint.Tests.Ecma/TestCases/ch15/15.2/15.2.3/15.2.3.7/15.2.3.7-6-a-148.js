/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-148.js
 * @description Object.defineProperties - 'O' is an Array, 'name' is the length property of 'O',  test RangeError is thrown when the [[Value]] field of 'desc' is positive non-integer values (15.4.5.1 step 3.c)
 */


function testcase() {

        var arr = [];

        try {
            Object.defineProperties(arr, {
                length: {
                    value: 123.5
                }
            });

            return false;
        } catch (e) {
            return e instanceof RangeError && arr.length === 0;
        }
    }
runTestCase(testcase);
