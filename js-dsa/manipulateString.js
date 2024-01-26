let str = "aabcccabba";
/**
 * 1) split and rev: cabba|aabcc
 * 2) remove the right suffix and left prefix if same chars:
 *  2.a) cabb|bcc
 *  2.b) ca|cc
 * 3) output: cacc, len: 4
 */

/**
 * Approach: The given problem can be solved by using Two Pointers by finding similar characters present in the suffix of the string and the prefix of the string. 
    Follow the steps below to solve the problem:
        - Initialize two variables, say i as 0 and j as (N – 1).
        - Iterate a loop until i < j and the characters S[i] and S[j] are the same, and perform the following steps:
        - Initialize a variable, say d with S[i], and shift pointer i towards the right while i is at most j and d = S[i].
        - Shift pointer j towards the left until i is at most j and d = S[j].
        - After completing the above steps, the value of (j – i + 1) is the minimum possible length of the string.
 */

const manipulateStr = (s) => {
  // Initialize two pointers
  i = 0;
  j = s.length - 1;

  // Traverse the string S
  while (i < j && s[i] == s[j]) {
    // Current char on left pointer
    d = s[i];

    // Shift i towards right
    while (i <= j && s[i] == d) i += 1;

    // Shift j towards left
    while (i <= j && s[j] == d) j -= 1;

    // Return the minimum possible
    // length of string
  }

  return j - i + 1;
};

console.log(manipulateStr(str));
