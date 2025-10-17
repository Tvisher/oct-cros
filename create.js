// const renderZone = document.querySelector('#render-zone');



// const data = {
//     1: [
//         {
//             "coll": 25,
//             "letter": 'р'
//         },
//     ],
//     2: [
//         {
//             "coll": 21,
//             "letter": 'г'
//         },
//         {
//             "coll": 25,
//             "letter": 'а'
//         },
//     ],
//     3: [
//         {
//             "coll": 21,
//             "letter": 'о'
//         },
//         {
//             "coll": 25,
//             "letter": 'з'
//         },
//         {
//             "coll": 28,
//             "letter": 'а'
//         },
//     ],
//     4: [
//         {
//             "coll": 7,
//             "letter": 'б'
//         },
//         {
//             "coll": 9,
//             "letter": 'б'
//         },

//         {
//             "coll": 21,
//             "letter": 'р'
//         },

//         {
//             "coll": 25,
//             "letter": 'в'
//         },

//         {
//             "coll": 28,
//             "letter": 'б'
//         },
//     ],
//     5: [
//         {
//             "coll": 7,
//             "letter": 'о'
//         },
//         {
//             "coll": 9,
//             "letter": 'о'
//         },
//         {
//             "coll": 17,
//             "letter": 'к'
//         },
//         {
//             "coll": 19,
//             "letter": 'з'
//         },
//         {
//             "coll": 21,
//             "letter": 'б'
//         },
//         {
//             "coll": 25,
//             "letter": 'е'
//         },
//         {
//             "coll": 28,
//             "letter": 'д'
//         },
//     ],
//     6: [
//         {
//             "coll": 7,
//             "letter": 'н'
//         },
//         {
//             "coll": 9,
//             "letter": 'н'
//         },

//         {
//             "coll": 17,
//             "letter": 'а'
//         },

//         {
//             "coll": 19,
//             "letter": 'а'
//         },
//         {
//             "coll": 21,
//             "letter": 'у'
//         },
//         {
//             "coll": 25,
//             "letter": 'д'
//         },
//         {
//             "coll": 28,
//             "letter": 'у'
//         },
//     ],
//     7: [
//         {
//             "coll": 7,
//             "letter": 'н'
//         },
//         {
//             "coll": 9,
//             "letter": 'д'
//         },
//         {
//             "coll": 11,
//             "letter": 'г'
//         },

//         {
//             "coll": 17,
//             "letter": 'п'
//         },
//         {
//             "coll": 18,
//             "letter": 'а'
//         },
//         {
//             "coll": 19,
//             "letter": 'п'
//         },
//         {
//             "coll": 20,
//             "letter": 'а'
//         },
//         {
//             "coll": 21,
//             "letter": 'н'
//         },
//         {
//             "coll": 22,
//             "letter": 'о'
//         },
//         {
//             "coll": 23,
//             "letter": 'в'
//         },

//         {
//             "coll": 25,
//             "letter": 'ч'
//         },

//         {
//             "coll": 28,
//             "letter": 'л'
//         },
//     ],
//     8: [
//         {
//             "coll": 4,
//             "letter": 'л'
//         },
//         {
//             "coll": 5,
//             "letter": 'и'
//         },
//         {
//             "coll": 6,
//             "letter": 'м'
//         },
//         {
//             "coll": 7,
//             "letter": 'и'
//         },
//         {
//             "coll": 8,
//             "letter": 'т'
//         },
//         {
//             "coll": 9,
//             "letter": 'а'
//         },
//         {
//             "coll": 11,
//             "letter": 'р'
//         },
//         {
//             "coll": 15,
//             "letter": 'м'
//         },
//         {
//             "coll": 17,
//             "letter": 'у'
//         },
//         {
//             "coll": 19,
//             "letter": 'а'
//         },
//         {
//             "coll": 25,
//             "letter": 'и'
//         },
//         {
//             "coll": 28,
//             "letter": 'л'
//         },
//     ],
//     9: [
//         {
//             "coll": 9,
//             "letter": 'р'
//         },
//         {
//             "coll": 11,
//             "letter": 'е'
//         },
//         {
//             "coll": 14,
//             "letter": 'б'
//         },
//         {
//             "coll": 15,
//             "letter": 'е'
//         },
//         {
//             "coll": 16,
//             "letter": 'а'
//         },
//         {
//             "coll": 17,
//             "letter": 'р'
//         },
//         {
//             "coll": 19,
//             "letter": 'х'
//         },
//         {
//             "coll": 20,
//             "letter": 'о'
//         },
//         {
//             "coll": 21,
//             "letter": 'д'
//         },
//         {
//             "coll": 22,
//             "letter": 'ч'
//         },
//         {
//             "coll": 23,
//             "letter": 'е'
//         },
//         {
//             "coll": 24,
//             "letter": 'н'
//         },
//         {
//             "coll": 25,
//             "letter": 'к'
//         },
//         {
//             "coll": 26,
//             "letter": 'о'
//         },
//         {
//             "coll": 27,
//             "letter": 'в'
//         },
//         {
//             "coll": 28,
//             "letter": 'а'
//         },
//     ],
//     10: [
//         {
//             "coll": 9,
//             "letter": 'ч'
//         },
//         {
//             "coll": 10,
//             "letter": 'а'
//         },
//         {
//             "coll": 11,
//             "letter": 'к'
//         },
//         {
//             "coll": 15,
//             "letter": 'р'
//         },
//         {
//             "coll": 23,
//             "letter": 'в'
//         },
//     ],
//     11: [
//         {
//             "coll": 9,
//             "letter": 'у'
//         },
//         {
//             "coll": 13,
//             "letter": 'д'
//         },
//         {
//             "coll": 15,
//             "letter": 'ф'
//         },
//         {
//             "coll": 17,
//             "letter": 'о'
//         },

//         {
//             "coll": 22,
//             "letter": 'б'
//         },
//         {
//             "coll": 23,
//             "letter": 'а'
//         },
//         {
//             "coll": 24,
//             "letter": 'л'
//         },
//         {
//             "coll": 25,
//             "letter": 'л'
//         },
//         {
//             "coll": 26,
//             "letter": 'а'
//         },
//         {
//             "coll": 27,
//             "letter": 'д'
//         },
//         {
//             "coll": 28,
//             "letter": 'а'
//         },
//     ],
//     12: [
//         {
//             "coll": 9,
//             "letter": 'к'
//         },
//         {
//             "coll": 10,
//             "letter": 'у'
//         },
//         {
//             "coll": 11,
//             "letter": 'п'
//         },
//         {
//             "coll": 12,
//             "letter": 'л'
//         },
//         {
//             "coll": 13,
//             "letter": 'е'
//         },
//         {
//             "coll": 14,
//             "letter": 'т'
//         },
//         {
//             "coll": 15,
//             "letter": 'и'
//         },
//         {
//             "coll": 16,
//             "letter": 'с'
//         },
//         {
//             "coll": 17,
//             "letter": 'т'
//         },
//         {
//             "coll": 26,
//             "letter": 'л'
//         },
//     ],
//     13: [
//         {
//             "coll": 2,
//             "letter": 'б'
//         },
//         {
//             "coll": 3,
//             "letter": 'а'
//         },
//         {
//             "coll": 4,
//             "letter": 'н'
//         },
//         {
//             "coll": 5,
//             "letter": 'д'
//         },
//         {
//             "coll": 6,
//             "letter": 'а'
//         },
//         {
//             "coll": 13,
//             "letter": 'п'
//         },
//         {
//             "coll": 17,
//             "letter": 'ч'
//         },
//         {
//             "coll": 26,
//             "letter": 'и'
//         },
//     ],
//     14: [
//         {
//             "coll": 6,
//             "letter": 'у'
//         },
//         {
//             "coll": 10,
//             "letter": 'л'
//         },
//         {
//             "coll": 11,
//             "letter": 'у'
//         },
//         {
//             "coll": 12,
//             "letter": 'с'
//         },
//         {
//             "coll": 13,
//             "letter": 'п'
//         },
//         {
//             "coll": 14,
//             "letter": 'е'
//         },
//         {
//             "coll": 15,
//             "letter": 'к'
//         },
//         {
//             "coll": 16,
//             "letter": 'а'
//         },
//         {
//             "coll": 17,
//             "letter": 'е'
//         },
//         {
//             "coll": 18,
//             "letter": 'в'
//         },
//         {
//             "coll": 20,
//             "letter": 'т'
//         },
//         {
//             "coll": 21,
//             "letter": 'а'
//         },
//         {
//             "coll": 22,
//             "letter": 'р'
//         },
//         {
//             "coll": 23,
//             "letter": 'к'
//         },
//         {
//             "coll": 24,
//             "letter": 'о'
//         },
//         {
//             "coll": 25,
//             "letter": 'в'
//         },
//         {
//             "coll": 26,
//             "letter": 'с'
//         },
//         {
//             "coll": 27,
//             "letter": 'к'
//         },
//         {
//             "coll": 28,
//             "letter": 'и'
//         },
//         {
//             "coll": 29,
//             "letter": 'й'
//         },
//     ],
//     15: [
//         {
//             "coll": 6,
//             "letter": 'д'
//         },
//         {
//             "coll": 8,
//             "letter": 'б'
//         },
//         {
//             "coll": 15,
//             "letter": 'л'
//         },
//         {
//             "coll": 26,
//             "letter": 'а'
//         },
//     ],
//     16: [
//         {
//             "coll": 3,
//             "letter": 'м'
//         },
//         {
//             "coll": 4,
//             "letter": 'и'
//         },
//         {
//             "coll": 5,
//             "letter": 'м'
//         },
//         {
//             "coll": 6,
//             "letter": 'и'
//         },
//         {
//             "coll": 7,
//             "letter": 'н'
//         },
//         {
//             "coll": 8,
//             "letter": 'о'
//         },

//         {
//             "coll": 10,
//             "letter": 'г'
//         },
//         {
//             "coll": 11,
//             "letter": 'о'
//         },
//         {
//             "coll": 12,
//             "letter": 'л'
//         },
//         {
//             "coll": 13,
//             "letter": 'у'
//         },
//         {
//             "coll": 14,
//             "letter": 'б'
//         },
//         {
//             "coll": 15,
//             "letter": 'и'
//         },
//         {
//             "coll": 17,
//             "letter": 'з'
//         },
//     ],
//     17: [
//         {
//             "coll": 8,
//             "letter": 'я'
//         },
//         {
//             "coll": 11,
//             "letter": 'д'
//         },
//         {
//             "coll": 15,
//             "letter": 'н'
//         },
//         {
//             "coll": 17,
//             "letter": 'б'
//         },
//         {
//             "coll": 19,
//             "letter": 'д'
//         },
//     ],
//     18: [
//         {
//             "coll": 4,
//             "letter": 'к'
//         },
//         {
//             "coll": 5,
//             "letter": 'а'
//         },
//         {
//             "coll": 6,
//             "letter": 'т'
//         },
//         {
//             "coll": 7,
//             "letter": 'е'
//         },
//         {
//             "coll": 8,
//             "letter": 'р'
//         },
//         {
//             "coll": 9,
//             "letter": 'и'
//         },
//         {
//             "coll": 10,
//             "letter": 'н'
//         },
//         {
//             "coll": 11,
//             "letter": 'а'
//         },

//         {
//             "coll": 13,
//             "letter": 'в'
//         },

//         {
//             "coll": 14,
//             "letter": 'и'
//         },

//         {
//             "coll": 15,
//             "letter": 'т'
//         },

//         {
//             "coll": 16,
//             "letter": 'о'
//         },

//         {
//             "coll": 17,
//             "letter": 'р'
//         },

//         {
//             "coll": 18,
//             "letter": 'г'
//         },

//         {
//             "coll": 19,
//             "letter": 'а'
//         },

//         {
//             "coll": 20,
//             "letter": 'н'
//         },
//     ],
//     19: [
//         {
//             "coll": 8,
//             "letter": 'с'
//         },
//         {
//             "coll": 17,
//             "letter": 'у'
//         },
//         {
//             "coll": 19,
//             "letter": 'н'
//         },
//         {
//             "coll": 27,
//             "letter": 'в'
//         },
//         {
//             "coll": 29,
//             "letter": 'в'
//         },
//     ],
//     20: [
//         {
//             "coll": 2,
//             "letter": 'х'
//         },
//         {
//             "coll": 3,
//             "letter": 'а'
//         },
//         {
//             "coll": 4,
//             "letter": 'б'
//         },
//         {
//             "coll": 5,
//             "letter": 'е'
//         },
//         {
//             "coll": 6,
//             "letter": 'н'
//         },
//         {
//             "coll": 7,
//             "letter": 'с'
//         },
//         {
//             "coll": 8,
//             "letter": 'к'
//         },
//         {
//             "coll": 9,
//             "letter": 'и'
//         },
//         {
//             "coll": 10,
//             "letter": 'й'
//         },

//         {
//             "coll": 14,
//             "letter": 'ш'
//         },
//         {
//             "coll": 15,
//             "letter": 'у'
//         },
//         {
//             "coll": 16,
//             "letter": 'б'
//         },
//         {
//             "coll": 17,
//             "letter": 'е'
//         },
//         {
//             "coll": 18,
//             "letter": 'р'
//         },
//         {
//             "coll": 19,
//             "letter": 'т'
//         },

//         {
//             "coll": 27,
//             "letter": 'а'
//         },

//         {
//             "coll": 29,
//             "letter": 'а'
//         },
//     ],
//     21: [
//         {
//             "coll": 8,
//             "letter": 'а'
//         },
//         {
//             "coll": 17,
//             "letter": 'в'
//         },
//         {
//             "coll": 19,
//             "letter": 'е'
//         },

//         {
//             "coll": 26,
//             "letter": 'б'
//         },
//         {
//             "coll": 27,
//             "letter": 'р'
//         },
//         {
//             "coll": 28,
//             "letter": 'а'
//         },
//         {
//             "coll": 29,
//             "letter": 'т'
//         },
//     ],
//     22: [
//         {
//             "coll": 4,
//             "letter": 'а'
//         },
//         {
//             "coll": 5,
//             "letter": 'ф'
//         },
//         {
//             "coll": 6,
//             "letter": 'о'
//         },
//         {
//             "coll": 7,
//             "letter": 'н'
//         },
//         {
//             "coll": 8,
//             "letter": 'я'
//         },

//         {
//             "coll": 19,
//             "letter": 'с'
//         },
//         {
//             "coll": 20,
//             "letter": 'а'
//         },
//         {
//             "coll": 21,
//             "letter": 'р'
//         },
//         {
//             "coll": 22,
//             "letter": 'а'
//         },

//         {
//             "coll": 27,
//             "letter": 'л'
//         },
//         {
//             "coll": 29,
//             "letter": 'с'
//         },
//     ],
//     23: [
//         {
//             "coll": 5,
//             "letter": 'а'
//         },
//         {
//             "coll": 11,
//             "letter": 'г'
//         },
//         {
//             "coll": 21,
//             "letter": 'а'
//         },
//         {
//             "coll": 27,
//             "letter": 'е'
//         },
//         {
//             "coll": 29,
//             "letter": 'о'
//         },
//     ],
//     24: [
//         {
//             "coll": 5,
//             "letter": 'р'
//         },

//         {
//             "coll": 7,
//             "letter": 'б'
//         },
//         {
//             "coll": 8,
//             "letter": 'а'
//         },
//         {
//             "coll": 9,
//             "letter": 'н'
//         },
//         {
//             "coll": 10,
//             "letter": 'д'
//         },
//         {
//             "coll": 11,
//             "letter": 'е'
//         },
//         {
//             "coll": 12,
//             "letter": 'р'
//         },
//         {
//             "coll": 13,
//             "letter": 'а'
//         },
//         {
//             "coll": 14,
//             "letter": 'с'
//         },
//         {
//             "coll": 21,
//             "letter": 'б'
//         },
//         {
//             "coll": 22,
//             "letter": 'у'
//         },
//         {
//             "coll": 23,
//             "letter": 'д'
//         },
//         {
//             "coll": 24,
//             "letter": 'у'
//         },
//         {
//             "coll": 25,
//             "letter": 'л'
//         },
//         {
//             "coll": 26,
//             "letter": 'а'
//         },
//         {
//             "coll": 27,
//             "letter": 'й'
//         },
//         {
//             "coll": 29,
//             "letter": 'н'
//         },
//     ],
//     25: [
//         {
//             "coll": 1,
//             "letter": 'г'
//         },
//         {
//             "coll": 2,
//             "letter": 'р'
//         },
//         {
//             "coll": 3,
//             "letter": 'е'
//         },
//         {
//             "coll": 4,
//             "letter": 'т'
//         },
//         {
//             "coll": 5,
//             "letter": 'а'
//         },
//         {
//             "coll": 11,
//             "letter": 'н'
//         },
//         {
//             "coll": 14,
//             "letter": 'э'
//         },
//         {
//             "coll": 21,
//             "letter": 'а'
//         },
//         {
//             "coll": 23,
//             "letter": 'ж'
//         },
//         {
//             "coll": 25,
//             "letter": 'у'
//         },
//     ],
//     26: [
//         {
//             "coll": 5,
//             "letter": 'д'
//         },
//         {
//             "coll": 11,
//             "letter": 'и'
//         },
//         {
//             "coll": 14,
//             "letter": 'р'
//         },
//         {
//             "coll": 23,
//             "letter": 'о'
//         },

//         {
//             "coll": 25,
//             "letter": 'ч'
//         },
//         {
//             "coll": 26,
//             "letter": 'и'
//         },
//         {
//             "coll": 27,
//             "letter": 'н'
//         },
//         {
//             "coll": 28,
//             "letter": 'г'
//         },
//         {
//             "coll": 29,
//             "letter": 'и'
//         },
//         {
//             "coll": 30,
//             "letter": 'з'
//         },
//     ],
//     27: [
//         {
//             "coll": 4,
//             "letter": 'б'
//         },
//         {
//             "coll": 5,
//             "letter": 'а'
//         },
//         {
//             "coll": 6,
//             "letter": 'р'
//         },
//         {
//             "coll": 7,
//             "letter": 'м'
//         },
//         {
//             "coll": 8,
//             "letter": 'а'
//         },
//         {
//             "coll": 9,
//             "letter": 'л'
//         },
//         {
//             "coll": 10,
//             "letter": 'е'
//         },
//         {
//             "coll": 11,
//             "letter": 'й'
//         },
//         {
//             "coll": 25,
//             "letter": 'к'
//         },
//     ],
//     28: [
//         {
//             "coll": 8,
//             "letter": 'й'
//         },
//         {
//             "coll": 22,
//             "letter": 'а'
//         },
//         {
//             "coll": 23,
//             "letter": 'д'
//         },
//         {
//             "coll": 24,
//             "letter": 'в'
//         },
//         {
//             "coll": 25,
//             "letter": 'о'
//         },
//         {
//             "coll": 26,
//             "letter": 'к'
//         },
//         {
//             "coll": 27,
//             "letter": 'а'
//         },
//         {
//             "coll": 28,
//             "letter": 'т'
//         },
//     ],
//     29: [
//         {
//             "coll": 8,
//             "letter": 'б'
//         },
//         {
//             "coll": 23,
//             "letter": 'р'
//         },
//         {
//             "coll": 27,
//             "letter": 'т'
//         },
//     ],
//     30: [
//         {
//             "coll": 3,
//             "letter": 'з'
//         },
//         {
//             "coll": 4,
//             "letter": 'а'
//         },
//         {
//             "coll": 5,
//             "letter": 'х'
//         },
//         {
//             "coll": 6,
//             "letter": 'а'
//         },
//         {
//             "coll": 7,
//             "letter": 'р'
//         },
//         {
//             "coll": 8,
//             "letter": 'о'
//         },
//         {
//             "coll": 9,
//             "letter": 'в'
//         },
//         {
//             "coll": 10,
//             "letter": 'а'
//         },
//         {
//             "coll": 23,
//             "letter": 'у'
//         },
//         {
//             "coll": 26,
//             "letter": 'б'
//         },
//         {
//             "coll": 27,
//             "letter": 'о'
//         },
//         {
//             "coll": 28,
//             "letter": 'н'
//         },
//         {
//             "coll": 29,
//             "letter": 'д'
//         },
//     ],
//     31: [
//         {
//             "coll": 8,
//             "letter": 'л'
//         },
//         {
//             "coll": 10,
//             "letter": 'в'
//         },
//         {
//             "coll": 23,
//             "letter": 'б'
//         },
//         {
//             "coll": 27,
//             "letter": 'с'
//         },
//     ],
//     32: [
//         {
//             "coll": 8,
//             "letter": 'и'
//         },
//         {
//             "coll": 10,
//             "letter": 'а'
//         },
//         {
//             "coll": 23,
//             "letter": 'и'
//         },
//     ],
//     33: [
//         {
//             "coll": 8,
//             "letter": 'т'
//         },
//         {
//             "coll": 10,
//             "letter": 'т'
//         },
//         {
//             "coll": 23,
//             "letter": 'ч'
//         },
//     ],
//     34: [
//         {
//             "coll": 10,
//             "letter": 'а'
//         },

//     ],
//     35: [
//         {
//             "coll": 10,
//             "letter": 'р'
//         },

//     ],
// }


// const res = Object.entries(data)
//     .map((row, rowNum) => {
//         let rowText = '';
//         for (let index = 1; index <= 30; index++) {
//             const isEl = row[1].find(el => el.coll === index);
//             if (isEl) {
//                 // rowText += `#item${rowNum + 1}-${index}:valid ~`
//                 rowText += `<input class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[${isEl.letter.trim().toLocaleLowerCase()}${isEl.letter.toUpperCase()}]{1}$" required="required" value="" id="item${rowNum + 1}-${index}" />`
//             } else {
//                 rowText += `<span class="crossword-board__item--blank" id="item${rowNum + 1}-${index}" ></span>`;
//             }
//         }
//         return rowText;

//     }).join('')
// console.log(res);