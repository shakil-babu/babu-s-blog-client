---
title: "ফ্ল্যাট মেথড - Flat method in JavaScript ES6 "
date: 'July 18 2021'
author: 'Shakil Babu'
cover_image: "/images/flat.png"
desc: "আমাদের অনেক সময় একটা মাল্টিডাইমেনশনাল(Multidimentional) অ্যারেকে সিঙ্গেল ডাইমেনশনাল(dimentional) বা সিঙ্গেল অ্যারেতে কনভার্ট করার প্রয়োজন পরতে পারে । অনেক সময় কোনো একটা থ্রি(৩) ডাইমেনশনাল(dimentional) অ্যারেকে টু(২) ডাইমেনশনাল(dimentional) অ্যারেতে কনভার্ট করার প্রয়োজন হয়।"
category: 'javascript'
---

### মাল্টিডাইমেনশনাল(Multidimentional) অ্যারে কাকে বলে ? 
- সহজ ভাবে বলতে গেলে, যে অ্যারের(Array) ভেতর এক বা একাধিক অ্যারে(Array) থাকে তাকেই মাল্টিডাইমেনশনাল(Multidimentional) অ্যারে বলে ।

**উদাহরণ :-**
```
const multidinmentionalArray = [1,2,[3,4,[5]]] ;
```

আমাদের অনেক সময় একটা মাল্টিডাইমেনশনাল(Multidimentional) অ্যারেকে সিঙ্গেল অ্যারেতে কনভার্ট করার প্রয়োজন পরে। অনেক সময় কোনো একটা থ্রি(৩) ডাইমেনশনাল(dimentional) অ্যারেকে টু(২) ডাইমেনশনাল(dimentional) অ্যারেতে কনভার্ট করার প্রয়োজন হয়।
ব্লা ব্লা ব্লা --


এইরকম সমস্যা সমাধান করার জন্যই জাভাস্ক্রিপ্ট ইএস৬(ES6) এ ```flat()``` মেথডের আবির্ভাব হয়েছে । ধরুন, আমাদের কাছে নিম্নোক্ত অ্যারে(Array) টি আছে :-
```
const arr = [1,2,3,[4,5]];
```
এখন আমাদের এই অ্যারে(Array) কে সিঙ্গেল অ্যারে(Array) তে কনভার্ট করতে হবে অর্থাৎ ``` [1,2,3,4,5] ``` এমন করতে হবে । তো চলুন ```flat()``` মেথডের সাহায্যে করে ফেলি :-

```
const arr = [1,2,3,[4,5]].flat();
console.log(arr);
// [1,2,3,4,5] 
```

আমাদের কাজ শেষ, উপরোক্ত অ্যারেটি ```[1,2,3,[4,5]]``` এক  ডাইমেনশনাল(dimentional) হওয়ায় শুধুমাত্র একবার ```flat()``` মেথডকে ব্যাবহার করতে হয়েছে । যদি টু বা থ্রি  ডাইমেনশনাল(dimentional) অ্যারে হয় তাহলে ? চলেন দেখা যাক  আরও একটি অ্যারে নিই :-
```
const numbers = [1,2,[3,4,[5,6]]];
```

এখন আমাদের কাছে টু ডাইমেনশনাল(dimentional)  অ্যারে আছে এইটাকে সিঙ্গেল অ্যারেতে রুপান্তর করতে হবে :-

```
const numbers = [1,2,[3,4,[5,6]]].flat().flat();
console.log(numbers);
// [1, 2, 3, 4, 5, 6]
```

যেহেতু এবারের অ্যারেটি আমদের টু ডাইমেনশনাল তাই দুই বার ```flat()``` মেথডকে ব্যাবহার করা হয়েছে । ২ বার ```flat()``` মেথডকে ব্যাবহার না করে যদি ১ বার করা হতো তাহলে উত্তর কি আসতো চলেন দেখা যাক :- 

```
const numbers = [1,2,[3,4,[5,6]]].flat();
console.log(numbers);
// [1, 2, 3, 4, [5, 6]]
```
দেখছেন ? অ্যারেটাকে শুধু মাত্র একবার flat করা হয়েছে যার কারণে আমাদেরকে  ```[1, 2, 3, 4, [5, 6]]``` এইটা উত্তর হিসেবে দিয়েছে যা আমাদের পাওয়ার কথা ।
আশা করি আপনারা ```flat()``` মেথডের ব্যাবহার বুঝতে পারছেন।


একটা বিষয় ভেবে দেখছেন? যদি আমাদের অ্যারেটা অনেক বড় ডাইমেনশনাল(dimentional) অ্যারে হয় এবং আমাদের সেইটা সিঙ্গেল অ্যারেতে রুপান্তর করতে বলা হয় তাহলে বার বার আমাদের ```flat()``` মেথডকে কল করতে হবে তাইনা ? চলেন একটা উদাহরণ দিয়ে দেখা যাক :-

```
const nums = [1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14,[15,16,[17,18]]]]]]]]];
const result = nums.flat().flat().flat().flat().flat().flat().flat().flat() ;
console.log(result);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
```

এখানে আমাদের অ্যারেটা এইট(৮) ডাইমেনশনাল তাই ```flat()``` মেথডকে ৮ বার ব্যাবহার করেছি । এখন এই যে বার বার ```flat()``` মেথডকে  লিখা একটা বিরক্তিকর কাজ মনে হচ্ছে নাহ ? 

আসলেই বিরক্তিকর সেই জন্যই চলেন আমরা একটা ট্রিক্স শিখে ফেলি যেইটা অ্যাপ্লায় করে যে কোনো প্রকার মাল্টিডাইমেনশনাল(Multidimentional) অ্যারেকে সিঙ্গেল অ্যারেতে কনভার্ট কারতে পারি জাস্ট এক লাইনে :-

```
const nums = [1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14,[15,16,[17,18]]]]]]]]];
const result = nums.flat(Infinity);
console.log(result);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
```

ব্যাস কাঙ্ক্ষিত উত্তর পেয়ে গেছি । এখানে ```flat()``` মেথডকে  একবার কল করেছি এবং তার ভেতরে প্যারামিটার হিসেবে ```Infinity``` পাঠিয়ে দিয়েছি । যার কাজ হচ্ছে যত ছোট বা বড় ডাইমেনশনাল(dimentional) অ্যারেই হোক না কেনো যতক্ষণ না পর্যন্ত সিঙ্গেল অ্যারেতে রুপান্তর হচ্ছে ততক্ষণ পর্যন্ত ```flat()``` মেথডকে কল করতেই থাকবে ।


### আরেকটি ছোট্ট উদাহরণ :-
```
const names = ['shakil','raihan',['fahim',['moota',['afifa']]]];
console.log(names.flat(Infinity));
// ["shakil", "raihan", "fahim", "moota", "afifa"]
```

এখন আশা করা যায় ```flat()``` মেথডকে  আপনারা ইজিলি(easily) ব্যাবহার করতে পারবেন কোনো বেগ পেতে হবে না, ধন্যবাদ ।  