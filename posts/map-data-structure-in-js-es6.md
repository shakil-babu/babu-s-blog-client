---
title: "Map - একটি নতুন ডাটা স্ট্রাকচার  "
date: 'June 24 2021'
author: 'Shakil Babu'
cover_image: "/images/map.png"
desc: "জাভাস্ক্রিপ্ট ইএস৬(ES6) এ দুটি নতুন ডাটা স্ট্রাকচারের সাথে পরিচয় করিয়ে দেওয়া হয়েছে নাম Map এবং WeakMap । আজকে আমি আপনাদের সাথে Map নিয়ে আলোচনা করবো । Map এই ডাটা-স্ট্রাকচার অনেকটাই অবজেক্ট(Object) এর মতো যেখানে এলিমেন্টস(elements) গুলোকে কী/ভ্যালু(key/value) পেয়ার(pair) করে স্টোর করা যায়।"
category: 'javascript'
---

জাভাস্ক্রিপ্ট ইএস৬(ES6) এ দুটি নতুন ডাটা স্ট্রাকচারের সাথে পরিচয় করিয়ে দেওয়া হয়েছে নাম ```Map``` এবং ```WeakMap``` । আজকে আমি আপনাদের সাথে ```Map``` নিয়ে আলোচনা করবো ।


```Map``` এই ডাটা-স্ট্রাকচার অনেকটাই অবজেক্ট(Object) এর মতো যেখানে এলিমেন্টস(elements) গুলোকে কী/ভ্যালু(key/value) পেয়ার(pair) করে স্টোর করা যায়।
```Map``` ডাটা-স্ট্রাকচার কী(key) হিসেবে বিভিন্ন ডাটা-টাইপ্স রাখতে পারে যেমন :-  অবজেক্ট(object), ফাংশন(function) এবং অন্যান্য ।


## ```Map``` ডাটা-স্ট্রাকচার নিয়ে আজকে আমার আলোচ্য বিষয়মহূহ :-
- ```Map``` তৈরি করা 

- ```Map``` এ আইটেম যুক্ত(insert) করা
- ```Map``` থেকে আইটেম(item) এক্সেস(access) করা
- ```Map``` এ আইটেম(item) চেক(check) করা
- ```Map``` থেকে আইটেম(item) রিমুভ(remove) করা
- ```Map``` এর লেন্থ(length) বা সাইজ(size) বের করা
- ```Map``` এ লুপ(loop) থ্রো করা
- ```Map``` এ keys(), values(), এবং entries() প্রয়োগ করা

# 1. ```Map``` তৈরি করা :-
কোনো একটা Map তৈরি করার সময়  আমাদের ```new Map()``` এই কন্সট্রাকটর(constructor) ইউস করতে হয় যেমন :-

```
// create a Map
const map1= new Map(); // an empty map
console.log(map1); // Map {}
```
আমরা  ```map1``` নামে একটি Map অবজেক্ট তৈরি করে ফেলেছি যার ভেতর এখন কোনো এলিমেন্টস নাই ।


# 2. ```Map``` এ আইটেম যুক্ত(insert) করা :-
```Map```  তৈরি করার পর আমাদের এতে আইটেম যুক্ত করতে হবে, যেইটা আমরা খুব সহজেই ```set()``` মেথডের সাহায্যে করতে পারি  যেমন :-

```
// insert an item
map1.set('name','Shakil Babu');
console.log(map1);
```
### OUTPUT :-
```
Map(1) { 'name' => 'Shakil Babu' }
```

```Map``` এ আমরা কী হিসেবে স্ট্রিং(string), অবজেক্ট(object), ফাংশন(function) ইত্যাদি রাখতে পারি এবং ভ্যালু হিসেবেও প্রায় সবকিছুই রাখতে পারি ।
### Map এ কী হিসেবে অবজেক্ট(object) এবং ভ্যালু হিসেবেও অবজেক্ট(object) রাখা :-
```
let map2 = new Map();
let obj = {};
map2.set(obj, {name:"Shakil", age:20});
console.log(map2);
```
### OUTPUT :-
```
Map(1) { {} => { name: 'Shakil', age: 20 } }
```

### 3. ```Map``` থেকে আইটেম(item) এক্সেস(access) করা :-
ম্যাপ(Map) এ থাকা ডাটা থেকে কোনো আইটেম অ্যাক্সেস করতে চাইলে খুব সহজেই আমরা ```get()``` মেথডের সাহায্যে করতে পারি যেমন:-
```
let map1 = new Map();
map1.set('name','Shakil Babu');

console.log(map1.get('name'));
```

### OUTPUT :-
```
Shakil Babu
```

### 4. ```Map``` থেকে আইটেম(item) চেক(check) করা :-
অনেক সময় আমাদের চেক(check) করার প্রয়োজন হতে পারে যে ম্যাপ(Map) এ কোনো স্পেসেফিক ভ্যালু বা আইটেম(item) আছে কিনা ?  সেটা চেক(check) করতে ```has()``` মেথড ব্যাবহার করা হয় । এই মেথড আউটপুট হিসেবে বুলিয়ান(Boolean) ভ্যালু true অথবা false রিটার্ন করে অর্থাৎ, যদি স্পেসেফিক ভ্যালু বা আইটেম(item) ম্যাপে থাকে তাহলে true নয়তো false রিটার্ন করে । 

চলুন  উদাহরণ দেখা যাক :-
```
let map1 = new Map();
map1.set('name','Shakil Babu');

// check if an item is in Map
console.log(map1.has('name'));
```

### OUTPUT :-
```
true
```

### 5. ```Map``` থেকে  আইটেম(item) রিমুভ(remove) করা :-
কোনো একটা ম্যাপ(Map) থেকে তার আইটেম গুলো ডিলিট করতে আমরা দুইটা মেথড ব্যাবহার করতে পারি 1.```clear()``` 2.```delete()``` । 

তবে যখন ম্যাপ(Map) থেকে একটি স্পেসেফিক ভ্যালু বা আইটেম(item) ডিলিট করার দরকার হয় তখন আমরা ```delete()``` মেথড ব্যাবহার করতে পারি ।

```delete()``` মেথড  আউটপুট হিসেবে বুলিয়ান(Boolean) ভ্যালু true অথবা false রিটার্ন করে, অর্থাৎ, যদি স্পেসেফিক ভ্যালু বা আইটেম(item) ম্যাপে থাকে তাহলে  ```Map``` থেকে  সেই আইটেমটি ডিলিট হবে সাথে  আউটপুট হিসেবে true দিবে। আর যদি স্পেসেফিক ভ্যালু বা আইটেম(item) ম্যাপে  না থাকে  তাহলে false রিটার্ন করে । 

উদাহরণ দেখা যাক :-

```
let map1 = new Map();
map1.set('name','Shakil Babu');

console.log(map1.delete('info'));
```

### OUTPUT :-
```
false
```
আউটপুট false কারণ- উপরোক্ত ম্যাপে ```info``` নামে কোনো আইটেম নেই ।
আরেকটি উদাহরণ :-

```
let map1 = new Map();
map1.set('name','Shakil Babu');

console.log(map1.delete('name'));
console.log(map1);
```

### OUTPUT :-
```
true
Map(0) {}
```
উপরোক্ত ম্যাপে ```name``` নামে আইটেম ছিলো তাই আউটপুট true পেয়েছি এবং যেহেতু উপরোক্ত ম্যাপে মাত্র একটি আইটেমই ছিলো তাই ম্যাপ কনসোল লগ করলে ফাকা দেখাইতেছে। 

যখন একটি ম্যাপের সবগুলো আইটেম একবারে ডিলিট করার দরকার পরবে তখন আমরা ```clear()``` মেথড ইউস করতে পারি যেমন :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// remove all items
map2.clear();
console.log(map2);
```

### OUTPUT :-
```
Map(0) {}
```

### 6. ```Map``` এর লেন্থ(length) বা সাইজ(size) বের করা :-
একটা ম্যাপে কয়টা আইটেম আছে তা বের করতে  ```size``` মেথড ব্যাবহার করা হয় -

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// get size
console.log(map2.size);
```

#### OUTPUT :-
```
2
```

### 7. ```Map``` এ লুপ(loop) থ্রো করা :-
কোনো ম্যাপের কী/ভ্যালু কে বের করতে আমরা ```for...of```  লুপ এবং ```forEach()``` মেথডও ইউস করতে পারি যেমন :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// looping through Map
for(let [key, value] of map2){
    console.log(`${key} : ${value}`);
}
```

### OUTPUT :-
```
firstName : shakil
lastName : babu
```

আমরা সেইম ভাবে ```forEach()``` মেথডও ইউস করতে পারি :- 
```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// looping through Map
map2.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});
```

### OUTPUT :-
```
firstName : shakil
lastName : babu
```
কোনো ম্যাপে উপরোক্ত ভাবে লুপ থ্রো এবং কী/ভ্যালু বের করতে পারি যা দিয়ে আমরা আমাদের প্রয়োজন মতো কী/ভ্যালুর ইউস করতে পারি । 

### 8. ```Map``` এ keys(), values(), এবং entries() প্রয়োগ করা :-

- keys() মেথড ইউস করে কোনো একটা অবজেক্ট বা ম্যাপের কী গুলো বের করা হয় যেহেতু এখন আমরা ম্যাপ শিখতেছি তাই এইটাতেই ইউস করা যাক যেমন :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// keys of Map
console.log(map2.keys());
```
### OUTPUT :-
```
[Map Iterator] { 'firstName', 'lastName' };
```

কীস(keys) গুলো আউটপুট হিসেবে দিয়েছে কিন্তু উপরোক্ত ভাবে আউটপুট কেমন জানি বাজে ভাবে আসতেছে তাই স্পেসিফিকভাবে কী গুলো বের করতে লুপের সাথে ```keys()``` ইউস করতে পারি :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// looping through Map
for(let key of map2.keys()){
    console.log(key);
}
```

### OUTPUT :-
```
firstName
lastName
```

- values() মেথড ইউস করে কোনো একটা অবজেক্ট বা ম্যাপের ভ্যালু(value) গুলো বের করা যায় যেমন :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// values of Map
console.log(map2.values());
```
### OUTPUT :-
```
[Map Iterator] { 'shakil', 'babu' };
```
স্পেসিফিকভাবে  ভ্যালু গুলো বের করতে লুপের সাথে ```values()``` ইউস করতে পারি :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// looping through Map
for(let value of map2.values()){
    console.log(value);
}
```

### OUTPUT :-
```
shakil
babu
```

- entries() মেথড ইউস করে কোনো একটা অবজেক্ট বা ম্যাপের কীস(keys) এবং ভ্যালুস(values) দুইটাই বের করা যায় যেমন :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// keys/values of Map
console.log(map2.entries());
```

### OUTPUT :-
```
[Map Entries] { [ 'firstName', 'shakil' ], [ 'lastName', 'babu' ] }
```

স্পেসিফিকভাবে কীস(keys) এবং ভ্যালুস(values) গুলো বের করতে লুপের সাথে ```entries()``` ইউস করতে পারি :-

```
let map2 = new Map();
map2.set('firstName','shakil');
map2.set('lastName', 'babu');

// looping through Map
for(let item of map2.entries()){
    console.log(`${item[0]} : ${item[1]}`);
}
```

### OUTPUT :-
```
firstName : shakil
lastName : babu
```

আজকের লিখাটা যদিও অনেক বড় হয়ে গিয়েছে কিন্তু আপনারা যদি পুরোটা পড়ে থাকেন তাহলে আশা করি ম্যাপ ডাটা-স্ট্রাকচার সমন্ধে একটা ভালো আইডিয়া চলে আসছে ।
ধন্যবাদ সবাইকে ।