/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return false;
  } else {
    const arrayFromString1 = str1.toLowerCase().split("").sort().join("");
    const arrayFromString2 = str2.toLowerCase().split("").sort().join("");
    if (arrayFromString1 === arrayFromString2) {
      return true;
    } else {
      return false;
    }
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("finder", "Friend")); // true
console.log(anagram("hello", "bye")); // false
