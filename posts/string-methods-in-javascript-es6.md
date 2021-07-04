---
title: "স্ট্রিং(string) মেথডস ইন জাভাস্ক্রিপ্ট ইএস৬(ES6)"
date: 'June 26 2021'
author: 'Shakil Babu'
cover_image: "/images/js.png"
desc: "যদিও আমরা স্ট্রিং(string) কি , কিভাবে ডিক্লেয়ার করা হয় সবই জানি । যখন আমরা কোনো স্ট্রিং(string) ডিক্লেয়ার করি তখন ডিক্লেয়ারকৃত স্ট্রিং(string) টির প্রত্যেকটা ক্যারেক্টারের একটা করে ইন্ডেক্স নাম্বার থাকে যেমন :-"
category: 'javascript'
---

জাভাস্ক্রিপ্ট ইএস৬(ES6) এ নতুন কয়েকটি স্ট্রিং মেথডস এসেছে । তার ভেতর সবচেয়ে বেশি ৪ টি মেথডস ব্যাবহার করা হয় :-

**নিচে উল্লেখ করা হলো :-**

- startsWith(str, index)
- endsWith(str, length)
- includes(str, index)
- repeat(number)


যদিও আমরা স্ট্রিং(string) কি , কিভাবে ডিক্লেয়ার করা হয় সবই জানি । যখন আমরা কোনো স্ট্রিং(string) ডিক্লেয়ার করি তখন ডিক্লেয়ারকৃত স্ট্রিং(string) টির প্রত্যেকটা ক্যারেক্টারের একটা করে ইন্ডেক্স নাম্বার থাকে যেমন :-

```
const Name = "SHAKIL MIA";
```

আমাদের কোনো ক্যারেক্টারের দরকার পরলে ইন্ডেক্স নাম্বার ব্যাবহার করে তা খুব সহজেই বের করতে পারি :-

```
const Name = "SHAKIL MIA";
console.log(Name[0]); // S
console.log(Name[1]); // H
console.log(Name[9]); // A
```


স্ট্রিং(string) নিয়ে আপনি অনেক কিছুই জানেন তারপরেও একটু আলোচনা করা হলো সবার জন্য । এবার চলুন জাভাস্ক্রিপ্ট ইএস৬(ES6) এ নতুন স্ট্রিং মেথডস নিয়ে আলোচনা
করা যাক :-


#### ১। startsWith() মেথড 

সিনট্যাক্স -

```
string.startsWith(str, index)
```

কোনো স্ট্রিং নির্দিষ্ট কোন ক্যারেক্টার বা ওয়ার্ড দিয়ে শুরু হয়েছে তা চেক করার জন্য ```startsWith()``` মেথড ব্যাবহার করা হয় । এটা সবসময় ```Boolean``` ভ্যালু 
true অথবা false রিটার্ন করে :- 

```
const Name = "SHAKIL MIA";
console.log(Name.startsWith('S')); // true
console.log(Name.startsWith('SHA')); // true
console.log(Name.startsWith('SHAKIL')) // true
```
উপরের, সবগুলো সঠিক তাই আউটপুট ```true``` দিয়েছে । এখন যদি স্ট্রিং যে ক্যারেক্টার বা ওয়ার্ড দিয়ে শুরু হয়েছে সেইটা বাদে অন্য কিছু দিয়ে চেক করি :-

```
const Name = "SHAKIL MIA";
console.log(Name.startsWith('Ab')); // false
console.log(Name.startsWith('abc')); // false
```

এবার কিন্তু, আমাদের false রিটার্ন করেছে কারণ- আমরা যে ক্যারেক্টার বা ওয়ার্ড দিয়ে চেক করেছি সেইটা দিয়ে স্ট্রিং শুরু হয় নাই । 

```startsWith()``` মেথড কেস-সেনসিটিভ অর্থাৎ ছোট হাতের এবং বড় হাতের একই ক্যারেক্টার এক নাহ । নিচে দেখুন :-

```
const Name = "SHAKIL MIA";
console.log(Name.startsWith('s')); // false
console.log(Name.startsWith('shakil')); // false
```

আমরা সিনট্যাক্স লিখার সময়ই দেখেছি ```startsWith()``` মেথড দুইটি প্যারামিটার নেয় । প্রথমটা স্ট্রিং আর দ্বিতীয়টা ইন্ডেক্স । দ্বিতীয় প্যারামিটার অর্থাৎ ইন্ডেক্স অপশনাল আপনি চাইলে পাস করতে পারেন আবার নাও পারেন । যদি পাস নাহ করা হয় তাহলে এটি ডিফল্ট(Default) হিসেবে প্রথম ইন্ডেক্সকেই পয়েন্ট(Point) করে যা আমরা এতক্ষণ দেখলাম । 

এবার যদি ইন্ডেক্সকে পাস করি তাহলে :-

```
const Name = "SHAKIL MIA";
console.log(Name.startsWith('IL',4 )); // true
console.log(Name.startsWith('M',7)); // true
```


একটু খেয়াল করলেই বুঝতে পারবেন যে, ```IL``` কিন্তু ```SHAKIL MIA``` এর ```4``` নাম্বার ইন্ডেক্স থেকেই শুরু হয়েছে তাই আমাদের আউটপুট হিসেবে true রিটার্ন করেছে ।


### ২। endsWith() মেথড
সিনট্যাক্স -

```
endsWith(str, length)
```

কোনো স্ট্রিং নির্দিষ্ট কোন ক্যারেক্টার বা ওয়ার্ড দিয়ে শেষ হয়েছে তা চেক করার জন্য ```endsWith()``` মেথড ব্যাবহার করা হয় । এটা সবসময় ```Boolean``` ভ্যালু 
true অথবা false রিটার্ন করে - 

```
const Name = "SHAKIL MIA";
console.log(Name.endsWith('A')); // true
console.log(Name.endsWith('MIA')); // true

console.log(Name.endsWith("S")); // false
```

#### endsWith() মেথডও কেস-সেনসিটিভ(case-sensitive) :-

```
const Name = "SHAKIL MIA";
console.log(Name.endsWith('a')); // false
```

```endsWith()``` মেথডও দুইটি প্যারামিটার নেয় প্রথমটা স্ট্রিং আর দ্বিতীয়টা length যা অপশনাল । যদি পাস নাহ করা হয় তাহলে এটি ডিফল্ট(Default) হিসেবে শেস ইন্ডেক্সকেই
পয়েন্ট(Point) করে যা আমরা এতক্ষণ দেখলাম । এবার যদি length কে পাস করি তাহলে -

```
const Name = "SHAKIL MIA";
console.log(Name.endsWith('M', 8)); // true
```

ইন্ডেক্স অনুযায়ী ```8``` নাম্বার পজিশনে কিন্তু ```I``` আছে ।


তারপরেও true রিটার্ন করতেছে কারণ - ```endsWith()``` মেথড index নাহ length প্যারামিটার নেয় । সেই অনুযায়ী M কিন্তু 8 নাম্বার ভ্যালু, কারণ - আমরা
জানি যে length সবসময় 1 থেকে কাউন্ট হয়।


**আরেকটি উদাহরণ দেখি :-**

```
const Name = "SHAKIL MIA";
console.log(Name.endsWith('H', 2)); // true
```



### ৩। includes() মেথড
সিনট্যাক্স -
```
includes(str, index)
```

কোনো স্ট্রিং(string) এ নির্দিষ্ট কোন ক্যারেক্টার বা ওয়ার্ড আছে কি নাহ তা চেক করার জন্য ```includes()``` মেথড ব্যাবহার করা হয় । এটাও সবসময় ```Boolean``` ভ্যালু 
true অথবা false রিটার্ন করে :-

```
const Name = "SHAKIL MIA";
console.log(Name.includes('H')); // true
console.log(Name.includes('MIA')); // true

console.log(Name.includes("Babu")); // false
```

```startsWith()``` এবং ```endsWith()``` এর মতো ```includes()``` মেথডও কেস-সেনসিটিভ(case-sensitive) :-

```
const Name = "SHAKIL MIA";
console.log(Name.includes('a')); // false
```

```includes()``` মেথডও দুইটি প্যারামিটার নেয় প্রথমটা স্ট্রিং আর দ্বিতীয়টা index যা অপশনাল । এবার যদি index কে পাস করি তাহলে :-

```
const Name = "SHAKIL MIA";
console.log(Name.includes('MIA',7 )); // true
```

### ৪। repeat() মেথড
সিনট্যাক্স -

```
repeat(number)
```

একটি স্ট্রিং কে বার বার লিখতে বা রিপিট(repeat) করতে এই মেথড ব্যাবহার করা হয়। এটি একটা number প্যারামিটার হিসেবে নেয় সেই অনুযায়ী স্ট্রিং রিপিট(repeat) হয় :-

```
const Name = "SHAKIL ";
console.log(Name.repeat(5));

// SHAKIL SHAKIL SHAKIL SHAKIL SHAKIL 
```

এই ছিলো জাভাস্ক্রিপ্ট ইএস৬ এর নতুন কিছু স্ট্রিং মেথডস । 
আশা করি বুঝতে পারছেন **ধন্যবাদ সবাইকে** ।