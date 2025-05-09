/**
 * Extracts initials from a full name and returns them in uppercase
 * @param fullName - The full name to extract initials from
 * @returns Uppercase initials
 */
export function getInitials(fullName: string): string {
    const nameParts = fullName.split(' ').filter(part => part.trim() !== '');
    
    const initials = nameParts.map(part => part.charAt(0)).join('');
    
    return initials.toUpperCase();
}

let fullName = "John Doe";
let nameParts = fullName.split(" ");
let initial = nameParts[0].charAt(0) + nameParts[1].charAt(0);
console.log(initial.toUpperCase());

console.log(`Initials for "Mary Ann Smith": ${getInitials("Mary Ann Smith")}`);
console.log(`Initials for "John": ${getInitials("John")}`); 