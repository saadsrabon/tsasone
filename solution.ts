type formatValueType = string | number | boolean;
function formatValue(value: formatValueType): formatValueType {
  if (typeof value === 'string') {
  if (value.trim() === "") return "Please provide a valid string";
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
}

type getLengthData = any[] | string;
function getLength(value: getLengthData): number {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type filtersRating = {
  title: string;
  rating:  0 | 1 | 2 | 3 | 4 | 5;
};
function filterByRating<T extends filtersRating>(data: T[]): T[] {
  const filteredRatingData = data.filter((item) => item.rating >= 4);
  return filteredRatingData;
}

type userData = {
  name: string;
  id: number;
  email: string;
  isActive: boolean;
};
function filterActiveUsers<T extends userData>(users: T[]): T[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(bookData: Book): string {
  let result = `Title: ${bookData?.title}, Author: ${bookData?.author}, Published: ${
    bookData?.publishedYear
  }, Available:  ${bookData.isAvailable ? 'Yes' : 'No'}`;
  return result;
}



function getUniqueValues(arr: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  let temp: Record<string, number | string> = {};
  let result: (number | string)[] = [];
  arr.forEach((element: number | string) => {
    if (temp[element] === undefined) {
      temp[element] = element;
      result.push(element);
    } else {
      return;
    }
  });

  arr2.forEach((element) => {
    if (temp[element] === undefined) {
      temp[element] = element;
      result.push(element);
    } else {
      return;
    }
  });

  return result;
}

interface product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
function calculateTotalPrice(arr: product[]): number {
  let total: number = 0;
  arr.forEach((element) => {
    let itemTotal: number = element.price * element.quantity;
    
    const discount = element.discount ?? 0;

    let discountedItem: number = itemTotal * (1 - discount / 100);

    total += discountedItem;
  });
  return total;
}




