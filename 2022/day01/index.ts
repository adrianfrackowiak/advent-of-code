import { readFileSync } from 'fs';
import { join } from 'path';

const findElvesCalories: (fileContent: string) => number[] = (fileContent: string): number[] => {
  const textToNums: number[] = fileContent.split('\n').map((line: string): number => Number(line));
  let elvesCalories: number[] = [];
  let caloriesCarried: number = 0;
  textToNums.forEach((num: number, index: number): void => {
    if (num !== 0) {
      caloriesCarried += num;

      if (textToNums.length - 1 === index) {
        elvesCalories.push(caloriesCarried);
      }
    } else {
      elvesCalories.push(caloriesCarried);
      caloriesCarried = 0;
    }
  });

  return elvesCalories;
}

const findElfCarryingTheMost: (fileContent: string) => number = (fileContent: string): number => {
  const elvesCaloriesList: number[] = findElvesCalories(fileContent);

  return Math.max(...elvesCaloriesList);
}

const findThreeElvesCarryingTheMost: (fileContent: string) => number = (fileContent: string): number => {
  const elvesCaloriesList: number[] = findElvesCalories(fileContent);
  const sortedList: number[] = elvesCaloriesList.sort((a: number, b: number): number => b - a);

  return sortedList[0] + sortedList[1] + sortedList[2];
}

const inputFile: string = readFileSync(join(__dirname, './input.txt'), 'utf-8');

console.log(`day01 part1 answer: ${findElfCarryingTheMost(inputFile)}`);
console.log(`day01 part2 answer: ${findThreeElvesCarryingTheMost(inputFile)}`);
