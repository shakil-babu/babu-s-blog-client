---
title: "linear search first problem and solution"
date: "August 10 2021"
author: "Shakil Babu"
cover_image: "/images/cp.png"
desc: ""
category: "dsa"
---

নাম্বার খুজুন
--------- 

আপনার কাছে একটি এলোমেলো নাম্বারের অ্যারে আছে nums নামে  এবং আপনি একটি নাম্বার খুজে বের করবেন নাম x । এখন nums অ্যারের প্রথম অর্ধেকের প্রত্যেকটা  উপাদানের সাথে 5 যোগ করতে হবে । এরপর পুরো অ্যারেতে x কে খুজতে হবে যদি পাওয়া যায় তাহলে "YES" নয়তো "NO" প্রিন্ট করতে হবে ।


ইনপুট :
-----------
একটি নাম্বারের অ্যারে nums এবং সার্চ আইটেম x নিতে হবে । nums অ্যারের সর্বচ্চ লেন্থ হবে 100 ।


আউটপুট :
-----------
একটি স্ট্রিং হবে যদি x অ্যারে তে থাকে তাহলে "YES" নয়তো "NO" প্রিন্ট করতে হবে (কোটেশন প্রিন্ট করতে হবে নাহ ) ।


টেস্ট কেস :
-----------

input :
> [1,2,3,4,5], 7

output:
> YES
--------------------------------------

input :
> [10,20,30,40], 70

output:
> NO

```

const findTheNumber = (nums, x) => {
    let halfNumber = Math.floor(nums.length/2);
    let array = [...nums.slice(halfNumber, nums.length - 1)];
    for(let i = 0; i <= halfNumber; i++){
        array.push(nums[i] + 5);
    };

    // linear search apply
    let isFound = false;
    for(let j = 0; j<array.length; j++){
        if(array[j] === x){
            isFound = true;
        }
    }

    return (isFound ? "YES" : "NO");
}

```

```
let result = findTheNumber([1,2,3,4,5],7);
console.log(result);
// YES
```

```
 // ইনপুট হিসেবে আয়তক্ষেত্রের সংখ্যা n নিলাম  
    let n = parseInt(readline());

    // গোল্ডেন আয়তক্ষেত্রের সংখ্যা হিসেব করার জন্য প্রথমে count = 0 রাখলাম
    let count = 0;

    // ratio নামে একটি ভেরিয়েবল নিলাম যা অনুপাতের মান ধরে রাখবে
    let ratio; 

    // একটি লুপ যা n সংখ্যক বার চলবে
    for(let i = 0; i<n; i++){
    
        // প্রত্যেক লাইনে ইনপুট (width and height)নিলাম 
        let wh = readline().split(" ").map((x) => parseFloat(x));
        
        // width এবং  height কে আলাদা আলাদা করে ভেরিয়েবলে রাখলাম
        let width = wh[0], height = wh[1];
    
  
        // যদি height থেকে width সমান বা বড় হয়
        if(width >= height){
        
        // তাহলে,  অনুপাত = প্রস্থ / উচ্চতা
            ratio = width / height; 
            
        }else{
         // তাহলে, অনুপাত = উচ্চতা / প্রস্থ
            ratio = height / width;
            
        }

        // এখন চেক করি অনুপাত কি [1.6, 1.7] এর মাঝে ? যদি সত্য হয় -
        if(ratio >= 1.6 && ratio <= 1.7){
        	
            // count এর মান 1 করে বাড়ায়
            count = count + 1;
        }
    
    }
    
    // গোল্ডেন আয়তক্ষেত্র কয়টি আছে তা count ধরে রাখছে । 
    // count প্রিন্ট করি
    print(count);
```