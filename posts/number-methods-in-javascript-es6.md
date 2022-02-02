---
title: "নাম্বার(number) মেথডস জাভাস্ক্রিপ্ট ইএস৬(ES6)"
date: 'June 25 2021'
author: 'Shakil Babu'
cover_image: "/images/numbermethods.png"
desc: "জাভাস্ক্রিপ্ট ইএস৫(ES5) এ নাম্বার(number) এর অনেক মেথডস সম্পর্কে জেনেছি এবং কাজও করেছি । এবার জাভাস্ক্রিপ্ট ইএস৬(ES6) এ নতুন কয়েকটি নাম্বার মেথডস রিলিজ দেওয়া হয়েছে :- ১। isInteger() ২। isSafeInteger() ৩। isFinite() ৪। isNaN()"
category: 'javascript'
---

জাভাস্ক্রিপ্ট ইএস৫(ES5) এ নাম্বার(number) এর অনেক মেথডস সম্পর্কে জেনেছি এবং কাজও করেছি । এবার জাভাস্ক্রিপ্ট ইএস৬(ES6) এ নতুন কয়েকটি নাম্বার মেথডস রিলিজ দেওয়া হয়েছে :- 

**১। isInteger()**

**২। isSafeInteger()**

**৩। isFinite()**

**৪। isNaN()**


আজকে আমরা উপরোক্ত ৪ টি নাম্বার(number) মেথডস সম্পর্কে জানবো এবং এদের ব্যাবহার দেখবো। আজাইরা গল্প বাদ দিয়ে চলুন শুরু করা যাক -

### ১। isInteger() মেথড

সিনট্যাক্স -
``` 
Number.isInteger(number)
```


যদি ```Number.isInteger()``` মেথডের আরগুমেন্ট ইন্টিজার টাইপ হয় তাহলে এটি ```true``` রিটার্ন করবে তাছাড়া ```false``` রিটার্ন করবে । নিচের
কোড লক্ষ করুন :-

```
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.3)); // false
```

প্রথমটা আউটপুট ```true``` রিটার্ন করেছে কারণ:- ```10``` একটি ইন্টিজার নাম্বার আর দ্বিতীয়টা ফ্লোট নাম্বার হওয়ায় ```false``` রিটার্ন করেছে ।


### ২। isSafeInteger() মেথড
সিনট্যাক্স-
```
Number.isSafeInteger(number)
```

```Number.isSafeInteger()``` মেথডের আরগুমেন্ট যদি সেইফ ইন্টিজার বা নাম্বার হয় তাহলে এটি ```true``` রিটার্ন করবে তাছাড়া ```false``` রিটার্ন করবে ।

**সেইফ ইন্টিজার কাকে বলে ?**
যদি কোনো ইন্টিজার নাম্বার ```9007199254740991``` থেকে ছোট হয় বা এই নাম্বারটাই হয় তাহলে তাকে সেইফ ইন্টিজার বলে ।

তার মানে, উপরোক্ত নাম্বার থেকে আরগুমেন্ট যদি বড় হয় তাহলে ```false``` রিটার্ন করবে আর সমান বা ছোট হইলে ```true``` রিটার্ন করবে । নিচের কোড লক্ষ করুন :- 

```
console.log(Number.isSafeInteger(200)); // true
console.log(Number.isSafeInteger(9007199254740991)); //true

console.log(Number.isSafeInteger(9007199254740992)); // false
```


### ৩। isFinite() মেথড
সিনট্যাক্স -
``` 
isFinite(arg);
```
```isFinite()``` মেথডের আরগুমেন্ট যদি ```Infinity``` অথবা ```NaN(Not a Number)``` হয় তাহলে ```false```  রিটার্ন করবে তাছাড়া ```true``` রিটার্ন করবে । 
নিচের কোড লক্ষ করুন :-

```
console.log(isFinite('shakil')); // false
console.log(isFinite(10/0)); // false

console.log(isFinite(10)); // true
```

### ৪। isNaN() মেথড
সিনট্যাক্স -
``` 
isNaN(arg) 
```

```isNaN()``` মেথডের আরগুমেন্ট যদি ```NaN(Not a Number)``` হয় তাহলে ```true``` রিটার্ন করবে তাছাড়া ```false``` রিটার্ন করবে । 
নিচের কোড লক্ষ করুন :-

```
console.log(isNaN('shakil')); // true
console.log(isNaN([20,30])); // true

console.log(isNaN(10)); // false
```
যদিও এই মেথডস গুলো খুব একটা ব্যাবহার হয় নাহ । তারপরেও আমাদের জানা থাকলো ।

**ধন্যবাদ সবাইকে ।** 