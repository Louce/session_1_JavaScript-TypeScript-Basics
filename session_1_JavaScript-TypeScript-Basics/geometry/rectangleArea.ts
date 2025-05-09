/**
 * Calculates the area of a rectangle
 * @param length - The length of the rectangle
 * @param width - The width of the rectangle
 * @returns The area of the rectangle
 */
export function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

let length = 5;
let width = 3;
let Area = length * width;
console.log(Area); 