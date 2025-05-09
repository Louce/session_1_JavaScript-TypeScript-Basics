/**
 * Calculates various properties of a circle
 * @param radius - The radius of the circle
 * @returns Object containing diameter, circumference, and area
 */
export function calculateCircleProperties(radius: number): {
    diameter: number;
    circumference: number;
    area: number;
} {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    
    return {
        diameter,
        circumference,
        area
    };
}

/**
 * Formats the area to 3 decimal places (truncated, not rounded)
 * @param area - The area to format
 * @returns Formatted area string
 */
export function formatArea(area: number): string {
    return (Math.floor(area * 1000) / 1000).toFixed(3);
}

let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let circle_Area = Math.PI * Math.pow(radius, 2);
console.log(diameter);
console.log(circumference.toFixed(4));
console.log((Math.floor(circle_Area * 1000) / 1000).toFixed(3)); 