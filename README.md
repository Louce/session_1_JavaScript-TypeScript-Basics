# Basic JavaScript/TypeScript Tasks

## Task Overview

This project contains solutions to basic programming tasks implemented in TypeScript.

## Tasks and Solutions

### 1. Area of Rectangle
**Task**: Write a code to find area of rectangle
- **Input**: length = 5, width = 3
- **Output**: 15
- **File**: `rectangleArea.ts`
```typescript
let length = 5;
let width = 3;
let Area = length * width;
console.log(Area);
```

### 2. Circle Properties
**Task**: Write a code to find diameter, circumference and area of a circle
- **Input**: radius = 5
- **Output**: 
  - diameter = 10
  - circumference = 31.4159
  - area = 78.539
- **File**: `circleProperties.ts`
```typescript
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let circle_Area = Math.PI * Math.pow(radius, 2);
console.log(diameter);
console.log(circumference.toFixed(4));
console.log((Math.floor(circle_Area * 1000) / 1000).toFixed(3));
```

### 3. Triangle Angles
**Task**: Write a code to find angles of triangle if two angles are given
- **Input**: a = 80, b = 65
- **Output**: 35
- **File**: `triangleAngles.ts`
```typescript
let a = 80;
let b = 65;
let OutPut = 180 - a - b;
console.log(OutPut);
```

### 4. Date Difference
**Task**: Write a code to get difference between dates in days
- **Input**: 
  - date1 = 2025-06-19
  - date2 = 2025-06-21
- **Output**: 2
- **File**: `dateDifference.ts`
```typescript
let date1 = new Date('2025-06-19');
let date2 = new Date('2025-06-21');

let difference_Months = date2.getTime() - date1.getTime();
let difference_Days = difference_Months / (1000 * 3600 * 24);

console.log(difference_Days);
```

### 5. Name Initials
**Task**: Write a code to print your name initial in uppercase
- **Input**: John Doe
- **Output**: JD
- **File**: `nameInitials.ts`
```typescript
let fullName = "John Doe";
let nameParts = fullName.split(" ");
let initial = nameParts[0].charAt(0) + nameParts[1].charAt(0);
console.log(initial.toUpperCase());
```

## File Structure

```
basic-of-javascript-typescript/
├── README.md
├── geometry/
│   ├── rectangleArea.ts
│   ├── circleProperties.ts  
│   └── triangleAngles.ts
└── utility/
    ├── dateDifference.ts
    └── nameInitials.ts
```

## How to Run

1. Make sure you have TypeScript installed:
```bash
npm install -g typescript
```

2. Compile TypeScript files:
```bash
tsc filename.ts
```

3. Run the compiled JavaScript:
```bash
node filename.js
```

Each file can be run independently and will produce the output as shown in the task requirements.
