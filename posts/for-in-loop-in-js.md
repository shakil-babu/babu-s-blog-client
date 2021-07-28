---
title: "for in loop - ফর ইন লুপ"
date: 'July 10 2021'
author: 'Shakil Babu'
cover_image: "/images/forin.png"
desc: "for, while এবং do..while লুপ ছাড়াও জাভাস্ক্রিপ্টে আরও একটি লুপের সাথে পরিচয় করিয়ে দেওয়া হয়েছে নাম for...in লুপ। এই লুপের সাহায্যে  অবজেক্ট (object) এর সব প্রোপার্টিকে খুব সহজেই ইটারেট করা যায়। "
category: 'javascript'
---

```for```, ```while``` এবং ```do..while``` লুপ ছাড়াও জাভাস্ক্রিপ্টে আরও একটি লুপের সাথে পরিচয় করিয়ে দেওয়া হয়েছে নাম ```for...in``` লুপ ।

এই লুপের সাহায্যে  অবজেক্ট (object) এর সব প্রোপার্টিকে  খুব সহজেই ইটারেট করা যায়। 

### JavaScript for...in loop syntax :-
```
for (key in object) {
    // body of for...in
}
```
লুপের প্রত্যেক ইটারেশন(iteration) এ ```key``` নামে একটা ভ্যারিয়েবল সেট হবে যা ```object``` এর প্রত্যেকটা ```key``` কে নির্দেশ করে ।
> **_NOTE:_**  যখন আমরা কোনো অবজেক্ট(object) এর keys গুলো পাবো তখন খুব সহজেই keys এর সাহায্যে ভ্যালুস(values) গুলোও এক্সেস করতে পারবো । 


### Example 1: Iterate Through an Object :-
```
const person = {
    name: 'shakil',
    occupation:'student',
    age: 20
}

// using for...in
for ( let key in person ) {

    // display the properties
    console.log(`${key} : ${person[key]}`);
}
```

### OUTPUT :-
```
name : shakil
occupation : student
age : 20
```

উপরের প্রোগ্রামে ```for...in``` লুপ ইউস করা হয়েছে ```person``` অবজেক্ট কে ইটারেট করতে যা অবজেক্টের সব প্রোপারটিস(properties) কে প্রিন্ট আউট করেছে। 

- প্রত্যেকবার লুপের ইটারেশনে অবজেক্ট এর ```key``` আমাদের সেট করে দেওয়া ভ্যারিয়েবল ```key``` তে স্টোর হয় ।
- এবং ```key``` কে ইউস করে খুব সহজেই আমরা ভ্যালুকেও এক্সেস নিতে পারছি ```person[key]``` এইভাবে । 


### Example 2: Update Values of Properties :-
```
const salaries= {
    shakil : 24000,
    torikus : 34000,
    fahim : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}
```

### OUTPUT :-
```
shakil : $24000,
torikus : $34000,
fahim : $55000
```

উপরের উদাহরণে, ```salaries``` অবজেক্টের সব প্রোপারটিস(properties) কে ইটারেট করা হয়েছে । তারপর, প্রত্যেকটা অবজেক্ট ভ্যালুর এর সাথে  স্ট্রিং হিসেবে ```$``` ডলার সাইন যুক্ত করা হয়েছে। 



#### অবজেক্ট(object) বাদেও  স্ট্রিং(string) এবং অ্যারে(array) তে for...in লুপ ইউস করা যায় যেমন:-

**for...in with Strings :-**
```
const name = 'babu';

// using for...in loop
for (let i in name) {
    console.log(name[i]);
}
```

### OUTPUT :-
```
b
a
b
u
```

### for...in with Arrays :-
```
// define array
const arr = [ 'shakil', 10, 'babu' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
```

### OUTPUT :-
```
shakil
10
babu
```

> **_NOTE:_** যদি কখনও অ্যারের ইনডেক্স নিয়ে কাজ করার দরকার পরে তাহলে for..in লুপ ইউস না করায় ভালো । 

আশা করি বুঝতে পারছেন, ধন্যবাদ সবাইকে ।