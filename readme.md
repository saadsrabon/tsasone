# TypeScript Concepts

## Differences between Interfaces and Type Aliases

### Interface 
নিম্নে টাইপ আর ইন্টারফেস এর মধ্যে পার্থক্য আলোচনা করা হলঃ 

- অবজেক্ট বা ক্লাসের স্ট্রাকচার/কনট্র্যাক্ট ডিফাইন করতে ব্যবহৃত।  
- extends দিয়ে এক্সটেন্ড করা যায়।  
- একাধিক ইন্টারফেস একই নামে ডিক্লেয়ার করলে মার্জ হয় (Declaration merging) 
- মূলত অবজেক্ট ও ক্লাসের কনট্র্যাক্টের জন্য।  

### Type Alias
- অবজেক্ট, ইউনিয়ন, ইন্টারসেকশন, টুপল, প্রিমিটিভ সবকিছুর টাইপ ডিফাইন করা যায়।  
- & ব্যবহার করে একাধিক টাইপ মিলানো যায়।  
- ডিক্লেয়ারেশন মার্জিং সম্ভব নয়।  
- ফ্লেক্সিবল টাইপ কম্পোজিশন বা ইউনিয়ন/টুপলের জন্য।  

---

## What is the use of the keyof keyword in TypeScript?

TypeScript-এ keyof কীওয়ার্ড আলোচনা করা হলঃ

- অবজেক্টের সব key বের করা।  
- টাইপ-সেফ প্রপার্টি এক্সেস।  
- জেনেরিক ফাংশন/ক্লাসে টাইপ-সেফ ডাইনামিক প্রপার্টি।  
- কাস্টম টাইপ ইউটিলিটি তৈরিতে ব্যবহার।  

### Example:

```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type UserKeys = keyof User; 

function getProperty(obj: User, key: keyof User) {
  return obj[key];
}

const user: User = { name: "Saad", age: 28, isAdmin: true };
console.log(getProperty(user, "name")); 
