---
title: "ডিফল্ট(Default) প্যারামিটার ইন জাভাস্ক্রিপ্ট ইএস৬(ES6)"
date: 'June 24 2021'
author: 'Shakil Babu'
cover_image: "/images/dp.png"
desc: "জাভাস্ক্রিপ্ট ইএস ৬(ES6) এ আরেকটা চমৎকার কনসেপ্ট হলো ডিফল্ট(Default) প্যারামিটার যা ফাংশনে ব্যাবহার করা হয় । কোনো ফাংশন ডিফাইন করার সময় এর সাথে দেওয়া প্যারামিটারের একটা ডিফল্ট ভ্যালু সেট করে দেওয়াটাই হইলো ডিফল্ট(Default) প্যারামিটার । যদিও জাভাস্ক্রিপ্ট ইএস৫ এ এই কনসেপ্ট ছিলো নাহ তারপরেও লজিক ব্যাবহার করে ডিফল্ট প্যারামিটারের কাজটা সেরে ফেলা যেত। "
category: 'javascript'
---

জাভাস্ক্রিপ্ট ইএস ৬(ES6) এ আরেকটা চমৎকার কনসেপ্ট হলো ডিফল্ট(Default) প্যারামিটার যা ফাংশনে ব্যাবহার করা হয় । কোনো ফাংশন ডিফাইন করার সময় এর সাথে দেওয়া প্যারামিটারের একটা ডিফল্ট ভ্যালু সেট করে দেওয়াটাই হইলো ডিফল্ট(Default) প্যারামিটার ।

যদিও জাভাস্ক্রিপ্ট ইএস৫ এ এই কনসেপ্ট ছিলো নাহ তারপরেও লজিক ব্যাবহার করে ডিফল্ট প্যারামিটারের কাজটা সেরে ফেলা যেত। আমরা এখন ইএস৫ এবং ইএস৬ দুইটাতেই দেখবো যে - ডিফল্ট প্যারামিটার কনসেপ্ট আসার আগে কেমনে হ্যান্ডেল করা হতো আর 
আসার পর কেমনে করা হয় ।

```
const info = (Name, Town) => {
    // do something
}
info();
```
ধরুন, আমাদের info নামে একটা ফাংশন আছে, যার দুইটা প্যারামিটার আছে Name এবং Town নামে । যদি কেউ ফাংশন কল করার পর প্যারামিটার এর ভ্যালু পাস করে তাহলে সেই অনুযায়ী রেজাল্ট দিবে আর যদি ভ্যালু পাস নাহ করা হয় তাহলে 
ডিফল্টভাবে ```Name='Shakil Babu'``` এবং ```Town='Bogura'``` ধরে রেজাল্ট দিবে। 

প্রথমে চলুন আমরা এইটা ইএস৫ এ কেমনে হ্যান্ডেল করে সেইটা দেখি -

```
const info = (Name, Town) => {

    Name ? Name = Name : Name = 'Shakil Babu' ; 
    Town ? Town = Town : Town = 'Bogura' 
    console.log(`I am ${Name} from ${Town}`);
    
}
```

এখন কেউ যদি, ফাংশন কল করে প্যারামিটারের ভ্যালু পাস করে তাহলে সেই অনুযায়ী আমাদের আউটপুট দেখাবে :-

```
info('Torikus', 'Dinajpur');
// output :
// I am Torikus from Dinajpur
```
এবার যদি, প্যারামিটারের ভ্যালু পাস নাহ করা হয় :-

```
info();
// output :
// I am Shakil Babu from Bogura
```

দেখছেন ? আমাদের ডিফল্টভাবে সেট করে দেওয়া ভ্যালুগুলো নিয়েই কাজ করেছে।


এখন এই সেইম কাজটা ইএস৬ এর ডিফল্ট(Default) প্যারামিটার দিয়ে করা যাক - 

```
const info = (Name='Shakil Babu', Town='Bogura') => {
    console.log(`I am ${Name} from ${Town}`);
}
```

যদি কেউ প্যারামিটারের ভ্যালু পাস করে :-

```
info('Torikus', 'Dinajpur');
// output :
// I am Torikus from Dinajpur
```

এবার যদি, প্যারামিটারের ভ্যালু পাস নাহ করা হয় -

```
info();
// output :
// I am Shakil Babu from Bogura
```

আমরা কিন্তু সেইম কাজটা অনেক সহজ ওয়েতে ইএস৬ এর ডিফল্ট(Default) প্যারামিটার দিয়ে করলাম । আর এইটাই স্ট্যান্ডার্ড ওয়ে যা আগে ডেভেলপাররা চাইতো এবং ফাইনালি ইএস৬ সেইটা এনে দিয়েছে ।

আশা করি আপনারা ডিফল্ট(Default) প্যারামিটার কনসেপ্ট বুঝতে পারছেন ।


### এবার ছোট্ট একটা প্রব্লেমের সাথে ডিফল্ট(Default) প্যারামিটার ব্যাবহার করা যাক :-

প্রব্লেম - একটি নামতা প্রিন্ট করার প্রোগ্রাম লিখতে হবে যেখানে ফাংশন প্যারামিটার হিসেবে একটি নাম্বার নিবে । যদি প্যারামিটারের ভ্যালু পাস করা হয় তাহলে সেই ভ্যালু অনুযায়ী নয়তো ১ এর ঘরের নামতা প্রিন্ট করতে হবে ।

আপনারা কিন্তু, ইতিমধ্যে বুঝে ফেলছেন এইটা কিভাবে করতে হবে । এখানে অবশ্যই ডিফল্ট(Default) প্যারামিটারের ব্যাবহার করতে হবে।
তো চলুন দেখা যাক -

```
const multipicationTable = (number = 1) =>{
    for (let i = 1; i <= 10 ;  i++) {
        console.log(`${number}*${i} = ${i*number}`);
    }
}
```

এখন, উপরোক্ত ফাংশন কল করে আমরা একটা নাম্বার ভ্যালু পাস করি যেমন - 10 । 

```
multipicationTable(10);
```
আউটপুট হবে :-
```
10*1 = 10
10*2 = 20
10*3 = 30
10*4 = 40
10*5 = 50
10*6 = 60
10*7 = 70
10*8 = 80
10*9 = 90
10*10 = 100
```

যদি, প্যারামিটারের কোনো ভ্যালু পাস নাহ করা হয় :-

```
multipicationTable();
```

তখন আউটপুট হবে :-
```
1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
1*5 = 5
1*6 = 6
1*7 = 7
1*8 = 8
1*9 = 9
1*10 = 10
```

আমাদের প্রব্লেমের সমাধান পেয়ে গেছি । 
আশা করি, ডিফল্ট(Default) প্যারামিটার নিয়ে আপনাদের আর কোনো অসুবিধা হবে নাহ । 

ধন্যবাদ সবাইকে । 