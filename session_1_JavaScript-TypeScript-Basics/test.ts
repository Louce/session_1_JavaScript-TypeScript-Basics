import { calculateDaysBetweenDates } from './dateDifference';
import { getInitials } from './nameInitials';
import { calculateRectangleArea } from './geometry/rectangleArea';

console.log("Testing imports:");

const date1 = new Date('2023-01-01');
const date2 = new Date('2023-01-10');
console.log(`Days between dates: ${calculateDaysBetweenDates(date1, date2)}`);

console.log(`Initials of "John Doe": ${getInitials("John Doe")}`);

console.log(`Rectangle area (5x10): ${calculateRectangleArea(5, 20)}`); 