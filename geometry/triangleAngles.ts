/**
 * Calculates the third angle of a triangle given the other two angles
 * @param angle1 - First angle in degrees
 * @param angle2 - Second angle in degrees
 * @returns The third angle in degrees
 */
export function calculateThirdAngle(angle1: number, angle2: number): number {
    return 180 - angle1 - angle2;
}

let a = 80;
let b = 65;
let OutPut = 180 - a - b;
console.log(OutPut); 