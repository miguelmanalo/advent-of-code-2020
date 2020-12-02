// --- Day 1: Report Repair ---

// After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

// The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

// To save your vacation, you need to get all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

const exampleExpenses = [
  1721,979,366,299,675,1456
]; // 514579

const myExpenses = [
  1593,1575,1583,1609,1835,2008,1638,1396,1833,1524,1778,1574,1653,1962,1831,1557,1847,1587,1876,1914,1565,1585,1713,35,1862,1885,1735,1497,1989,1871,1923,1917,1719,1797,1222,1493,1939,1139,1260,1622,1625,1683,1742,1996,1579,1703,1692,1920,1536,1965,1936,1947,1800,1556,1633,1530,1612,1764,1810,1845,1750,1854,1973,1512,1856,1568,1634,1630,1602,1555,1681,1844,1544,1909,1690,1851,1785,863,1866,1988,1715,1881,1570,1380,1956,777,1693,1717,1724,1975,790,1484,1822,1922,1963,1741,1809,1896,1837,1980,1244,1832,1834,1643,1775,1818,1503,1802,1957,1174,1826,1649,1941,1571,1930,1629,1502,2002,1700,1880,1723,1803,2007,1543,1872,1993,1740,1919,1688,1067,1680,1580,1558,1772,1694,1480,1257,1796,2001,537,1701,1613,1784,1559,1482,1968,1604,983,1842,1817,1850,1788,1982,1535,1615,453,1895,1443,1308,1533,1714,1765,1037,1992,1843,1883,1981,1525,1038,1540,1766,1886,1546,1716,810,1899,1708,1508,1870,1051,1867,1840,1617,1726,1566,1616,1948,1771,1627,1994,1486,1913,1600,1983,1501,2003,1667,1620,1943,1674
];

// go thru an array of numbers only and find the two distinct values that sum up to 2020
// then take those two numbers and return their product

const numFinder = (arrNum) => {
  // make a copy of the array arg
  // sort the array small to big
  const sortedCopy = arrNum.slice().sort(((a, b) =>  a - b ));
  // iterate thru the array and ask if slicing the arg array forward includes the 2020 minus the current element
  for (let i = 0, len = sortedCopy.length; i < len; i += 1) {
    const forwardCopy = sortedCopy.slice(i + 1);
    // when index of returns not -1, take current element and what number is at the found index 
    if (forwardCopy.indexOf(2020 - sortedCopy[i]) !== -1) {
      // return the product of the two
      return sortedCopy[i] * forwardCopy[forwardCopy.indexOf(2020 - sortedCopy[i])];
    }
  }
};

console.log(numFinder(exampleExpenses));
console.log(numFinder(myExpenses));