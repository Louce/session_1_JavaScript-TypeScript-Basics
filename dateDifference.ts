/**
 * Calculates the difference between two dates in days
 * @param startDate - The start date
 * @param endDate - The end date 
 * @returns The difference in days
 */
export function calculateDaysBetweenDates(startDate: Date, endDate: Date): number {
    const timeDifference = endDate.getTime() - startDate.getTime();
    return timeDifference / (1000 * 3600 * 24);
}

let date1 = new Date('2025-06-19');
let date2 = new Date('2025-06-21');

let difference_Months = date2.getTime() - date1.getTime();
let difference_Days = difference_Months / (1000 * 3600 * 24);

console.log(difference_Days); 