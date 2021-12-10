const Minters = [
  {
    mint: "9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR",
    holder: "9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR",
  },
  {
    mint: "ES9DRHdPeKLvsKWr8Q81KWurUQujiFUMQNzXdqp8PrQ9",
    holder: "7ZUdyHHmJLwYECSHUvPT1etgB3BaDmpHC7wT9FF2LuiY",
  },
  {
    mint: "CZydB9kvf8gQhUDKEW2mCSocqcEboRnegHt9uA5ViBvs",
    holder: "9kmUn6xsXxfejMEvnMJdBKVbGMnqVu6Vp4JXvzT3K296",
  },
  {
    mint: "97viPe6WcNkNXeavcKjEefCMzctNjRsbbheEpnszePo7",
    holder: "F2xGWh2LWrgTjB8yZvMRFSUy7UAMGLbyQ8QEdkCezwNL",
  },
  {
    mint: "EEyy1313mu88omLZo34iH5HfJWYJxbkoVvSkTiZA7mB",
    holder: "7pBFi47GzrbNvmPy94nBpGcWw1CywEi7RoYcmu9qF8VS",
  },
  {
    mint: "Bsj78FRa6ZC7Hh1MqbSfJnQ1ybWHZqyn8wXyhVJQtruA",
    holder: "DFawGzrZPq68zrm5yeP6aYJGxCPqaZQjAqZNGrg3xnLP",
  },
  {
    mint: "6E8nsqtSjtHLE88wv9b6WjnxKpBechQmznCMRthfRJKd",
    holder: "5aRgKHuHN5DvdSwfX5JWojjy4tUrqPssYRtsmk4Q6Dbx",
  },
  {
    mint: "5VDxA7kvia4weU9L916hHSubCatCCy87WeF1NGyzFy6w",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "57SYeQFuPvQB667DvNz8rB9VGmRGVF1pk8Xt5xyWXtEH",
    holder: "DqKJpN1tzF7V7XyQcxHFiphWWACVMs8Nn9BW2wZmttQc",
  },
  {
    mint: "5zcaJwzREEHWeQ6tRRma87wShaxZmzHT62RR47dXejEM",
    holder: "GqcgVWgE3VB5FQouoy73Hmv2RJMJnjSh7UbgzmpZdRWS",
  },
  {
    mint: "HEsuwhW6XC4wUuVVVt6xh1qe2W3BdC6DHqMjpKqAJscH",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "Da4NXA2QzhhQwRZFsto4agBU6PwU1wgpzXUerJkFVp2Y",
    holder: "3Ge8mPgitUhnXCNn2mCnkDcEbFYfXJKLAwJkfomSzeia",
  },
  {
    mint: "5i6nYk5eoVBMBewWxAn8pHuB5chTHnNg55AZi53LLqpe",
    holder: "E1yemcdHqbkhVjjS5VhmjWyuaGbetgy82QovYGA13bQu",
  },
  {
    mint: "EebncwZ1e6mfqUWfQbbM5KmqMzWZYm5SCSWvoLF9uX5v",
    holder: "HKA8NxFViEvKGNvXXgkTmVgR6NGf1FVqqm2GNuK3E7DT",
  },
  {
    mint: "BdMU3Uvm2WE4MfLSCWYYsanmx9YqYX3KbiSmRe8gpWxd",
    holder: "EjJobybBFy13WL4uwhhunC6CbuuiF6u4wg1iw4k9Eg3K",
  },
  {
    mint: "5cq7Pr3RCh1395apV76pBL93rkMhgB3UF8HDVAtc8cqA",
    holder: "FUMgC5oQ2TTRqoLAYQcPNjfRY79yLL8V2yczRrzShfmD",
  },
  {
    mint: "4cL4sHr1Dn2CMcrrDKBDq6A9Yf6DTqzkhTfGzfabR7Z6",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "G36PEcEg3t4YQEQaQQKxdgkqbWhnge9FrWjgyMGLWg2B",
    holder: "8ZUYcQP91tcqz418fy16DrEDDKmMCfhMGEc5tNnJzQEF",
  },
  {
    mint: "9qZuqohSsFoEj1TQTK7KUq9hHSt9SjqjAHqydRrXSHWH",
    holder: "85DTtJPLwjgnsDUKcqTVu3m8T2TZovjsMrd6duZEL3VN",
  },
  {
    mint: "ArYV7KupLWCtGXy8MZNEXui8bv2vqdyCwb662dGtbJZJ",
    holder: "2B6LPExVR21KPChtbzQuLGEL5Z2rEqVWRVCwNKe1iHeT",
  },
  {
    mint: "G2pUhxtZaDVy3hfLozSirRon89k6XwMy7AkxZQuiv2Nf",
    holder: "4J7BsFYLUVagbZZ56qbjd9kqHbqyh1t4owsPFmPetstY",
  },
  {
    mint: "AVzMZTBhd5hW477obDViKGzAKD1wuHBjWhupYhmRKGwr",
    holder: "3c99M9dd8KqJZfyqNpy7JeYR23as9MRjLukAXFWYnKVx",
  },
  {
    mint: "HEgD2CaP6k8o4uK6KN3BW2ieyNzFxx7jUiCQHramvRXS",
    holder: "3ByncERa2D35xsR8wkNJCvxTGgzzj8hyBkgrrSTj2k3U",
  },
  {
    mint: "B3fcuqzFNWLwedem7CrekMXsMJhaTftqfDcLMeTYtvwV",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "9NLZi2ehYchxPK98jCCauR3GfbauU4cbsxGgpSxrDXZF",
    holder: "FN9HWNvotnwMjRuXhH7m2KqF8rGehuGnD9djLB3pW4i5",
  },
  {
    mint: "CGpFzpWphinUpSNDvzUTefiU6jkxwn2NNCYjoPi2C8AN",
    holder: "jCjbaaYdfMj2UyrWZLCJ7LpiC9o7kuLXSzZN2AiZLda",
  },
  {
    mint: "CYXXJcshMJWPtNtacFPfYSHxXfy8gQBqEH7NqC8hovCv",
    holder: "A2RKdUygAG8aGQcPknZQHQrqeL4tnTWuxpVfADBZ3Joj",
  },
  {
    mint: "AEYe7asvkp3agTkyEiUKyjt66oHR9QkDjxKfmZvutjXU",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "DmaX6PupbMcgUvLHe5vpoJkR8bTNX2bcctmHcFo2sDQr",
    holder: "8p82N5jWDooufFJV6hGn2Z75Shsh9TtYkH8d2Hyc9hEz",
  },
  {
    mint: "F6YSk4tYEHyUfBR9eWMSfTzudMQTV1ntq4NtBxDq2iBv",
    holder: "BHsmssR7EwpWHcPqr416feYZNU4vGq9iQe79gEEbg3NN",
  },
  {
    mint: "6ugSsMoaKDYu6yxJ4zmkifaHS9Tuixk67fjkdq1XTQQf",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "oVanG4VWf8jKjBoS7jsJxiZ2DFrHP7cPJfARxf37mvP",
    holder: "9A8tJWWMtyFz1NTF1hWpEAd7iLmuke4yr8DTgGjwXZYK",
  },
  {
    mint: "9kbEmVQKXN2gn6dvmqEwd7hDF94oeyURCAWEghEf8n1m",
    holder: "FUGQ3r3FHF5LTHW6QRsG4VSwsSSRkrsPa6SSZfXeMAtk",
  },
  {
    mint: "HK9c6ZAkhA2UQMUqEepS5NmEYBBFydDJrgjksPMVd8Sf",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "8jjdPqnotWyMETFQGywU5qFU7Smaa9RaMbcuypbeWLLC",
    holder: "CVbXDrYdaBmfFQzbAu4e5h4yoj1HS4AgbiKbEN8VLG6H",
  },
  {
    mint: "4rFaZ8gWpFrD7vzfkXaXfM3psSfLS2jYqk9RN5nkqtFz",
    holder: "9i4AZqY9yKR4naNVCxvwSRkQbPUyWfDyNBVhqA3hGxhN",
  },
  {
    mint:"9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR",
    holder:"9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR"
  }
];

export default Minters;
