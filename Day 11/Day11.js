/* ============================================================
   DAY 11 — SCOPE, NESTED SCOPE, LEXICAL SCOPE, SCOPE CHAIN, SHADOWING
   ============================================================ */


/* ============================================================
   1) SCOPE KYA HOTA HAI? (Simple language)
   ============================================================

   Scope = ek "area" ya "region" jaha se ek variable accessible hota hai.
   Simple words me: variable kaha kaha se dikhta (visible) hai, kaha nahi.

   Har variable ek "ghar" me rehta hai. Us ghar ke bahar se
   uss variable ko seedha access nahi kar sakte (kuch exceptions ke saath).

   console.log(x); // agar x kahi define hi nahi, to "x is not defined" error aayega

*/


/* ============================================================
   2) GLOBAL SCOPE
   ============================================================

   Jo variable kisi function/block ke andar nahi, bahar declare
   hua hai — wo GLOBAL SCOPE me hai. Poori file me kahi se bhi
   access ho sakta hai.

*/

// let globalVar = "Mai global hoon";

// function showGlobal() {
//     console.log(globalVar); // yaha se access ho sakta hai
// }

// showGlobal();
// console.log(globalVar); // yaha se bhi access ho sakta hai


/* ============================================================
   3) FUNCTION SCOPE
   ============================================================

   Jo variable kisi function ke ANDAR declare hota hai, wo sirf
   USI function ke andar accessible hota hai. Function ke bahar
   se access nahi hoga.

*/

// function myFunction() {
//     let funcVar = "Mai sirf function ke andar hoon";
//     console.log(funcVar); // ✅ yaha chalega
// }

// myFunction();
// console.log(funcVar); // ❌ Error: funcVar is not defined


/* ============================================================
   4) BLOCK SCOPE
   ============================================================

   let / const block scope follow karte hain — matlab { } ke
   andar jo bhi declare hota hai, wo sirf usi block ke andar
   accessible hota hai (if, for, while, ya simple { } bhi).

   NOTE: "var" block scope follow NAHI karta — wo function scope
   follow karta hai. example se smjhte hai - 

*/


// if (true) {
//     let blockVar = "Mai sirf is block ke andar hoon";
//     console.log(blockVar); // ✅ chalega
// }
// console.log(blockVar); // ❌ Error

// // ab var ke saath compare karo:
// if (true) {
//     var oldVar = "Mai var hoon, block scope nahi maanta";
// }
// console.log(oldVar); // ✅ chal jayega (var ka gadbad wala behaviour)


/* ============================================================
   5) NESTED SCOPE
   ============================================================

   Function/block ke andar function/block ho sakta hai —
   isse "nesting" kehte hain. Andar wala scope, bahar wale scope
   ke variables ko access kar sakta hai — lekin ulta nahi.

*/

// function outer() {
//     let outerVar = "Mai outer function me hoon";

//     function inner() {
//         let innerVar = "Mai inner function me hoon";
//         console.log(outerVar); // ✅ inner, outer ka variable dekh sakta hai
//         console.log(innerVar); // ✅ apna khud ka
//     }

//     inner();
//     console.log(innerVar); // ❌ Error: outer, inner ka variable NAHI dekh sakta
// }

// outer();


/* ============================================================
   6) LEXICAL SCOPE (basic idea)
   ============================================================

   "Lexical" ka matlab hai — CODE me jaha WRITE hua hai, uss
   JAGAH (position) ke hisaab se scope decide hota hai.
   Function ko call kaha se kiya, wo matter nahi karta —
   function KAHA DEFINE hua tha, wo matter karta hai.

   Isiliye upar wale example me "inner" function, "outer" ke
   variables ko dekh paaya — kyunki inner, outer ke ANDAR
   LIKHA gaya tha (definition ki jagah fix hai).

*/

// function outer2() {
//     let name = "Aditya";
//     // let name;

//     function inner2() {
//         // 'name' yaha define nahi hai, lekin lexically
//         // ye outer2 ke andar likha gaya hai, isliye access mil jata hai
//         // name = "CodeWeavers";
//         console.log("Naam hai:", name);
//     }

//     inner2();
// }

// outer2();


/* ============================================================
   7) SCOPE CHAIN (Trace karna)
   ============================================================

   Jab JS engine ko koi variable dhoondhna hota hai, wo:
   1. Pehle current (sabse andar wale) scope me dekhta hai
   2. Nahi mila to ek level bahar dekhta hai
   3. Aisa karte karte GLOBAL scope tak jata hai
   4. Wahan bhi nahi mila to "ReferenceError" deta hai

   Ye chain — innermost se outermost tak — SCOPE CHAIN kehlati hai.

*/

// let a = "global a";

// function level1() {
//     let b = "level1 b";

//     function level2() {
//         let c = "level2 c";

//         function level3() {
//             // yaha se teeno accessible hain — scope chain follow karke
//             console.log(a); // global scope se milega
//             console.log(b); // level1 scope se milega
//             console.log(c); // apne khud ke scope se milega
//         }

//         level3();
//     }

//     level2();
// }

// level1();


/* ============================================================
   8) VARIABLE LOOKUP OUTCOMES PREDICT KARNA (Practice)
   ============================================================

   Student se pucho: "ye console.log kya print karega?"
   Pehle predict karwao, phir run karke check karo.

*/

// let x = 10;

// function test() {
//     console.log(x); // predict: kya print hoga?
//     let x = 20;      // (hint: TDZ / hoisting wala trap hai)
// }

// test();

// -----------------------------------------------
// Ek aasan wala bhi:

// let y = "outside";

// function testY() {
//     let y = "inside";
//     console.log(y); // predict karo
// }

// testY();
// console.log(y); // predict karo


/* ============================================================
   9) VARIABLE SHADOWING (basic identify)
   ============================================================

   Shadowing tab hoti hai jab ek ANDAR wale scope ka variable,
   BAHAR wale scope ke SAME NAAM wale variable ko "chhupa" deta
   hai (temporarily) — sirf uss inner scope ke andar.

   Bahar wala variable delete nahi hota, bas andar se "dikhna"
   band ho jata hai.

*/

// let color = "red";

// function printColor() {
//     let color = "blue"; // ye 'color' outer wale color ko shadow kar raha hai
//     console.log(color); // "blue" print hoga (inner wala)
// }

// printColor();
// console.log(color); // "red" print hoga (outer wala safe hai)


/* ============================================================
   10) COMMON SCOPE MISTAKES (Debug karna)
   ============================================================

   Chlo kuch bugs fix krein -

*/

// MISTAKE 1: Function ke bahar se andar ka variable access karna
// function mistake1() {
//     let secret = "hidden";
//     // return secret; // fix: return karo ya bahar declare karo
// }
// // let secret = mistake1(); // fix: variable ko store karo
// console.log(secret); // ❌ Error — fix: return karo ya bahar declare karo


// MISTAKE 2: var ki wajah se accidental leak / overwrite
// function mistake2() {
//     for (var i = 0; i < 3; i++) {
//         // kuch kaam
//     }
//     console.log(i); // var block scope nahi maanta, isliye ye chal jayega (3)
//     // fix: 'let' use karo agar loop ke bahar 'i' nahi chahiye
// }
// mistake2();


// MISTAKE 3: Same naam se global variable accidentally banana
// function mistake3() {
//     total = 100; // 'let/const/var' bhool gaye — ye silently GLOBAL ban jayega!
// }
// mistake3();
// console.log(total); // ye chal jayega — dangerous mistake
// (isse agla point connect hota hai — global variables ka problem)


/* ============================================================
   11) UNNECESSARY GLOBAL VARIABLES PROBLEMATIC KYU HAIN?
   ============================================================

   1. Naam clash: Bade project me alag alag files/functions
      agar same naam ka global variable use kar le, to ek
      dusre ko OVERWRITE kar sakte hain — bugs create hote hain.

   2. Debug karna mushkil: Global variable ko KAHI SE BHI modify
      kiya ja sakta hai — pata karna mushkil ho jata hai ki
      value kaha se badli.

   3. Memory: Global variables poori program ki life tak
      memory me rehte hain — unnecessarily memory consume karte hain.

   4. Predictability kam: Function jab apne locals use karta
      hai to predictable hota hai. Global use karne se function
      "impure" ho jata hai — outside state pe depend karta hai.

*/

// BAD example:
// let count = 0; // unnecessary global
// function increment() {
//     count++;
// }

// GOOD example:
// function counter() {
//     let count = 0; // local — safe, sirf isi function ke andar
//     count++;
//     return count;
// }


/* ============================================================
   12) SCOPE KO FUNCTIONS (DAY 9-10) SE CONNECT KARNA
   ============================================================

   Recap: Function ek "block of code" hai jo kaam karta hai.
   Scope batata hai ki us function ke ANDAR declare hui cheezein
   KAHA TAK "dikhti" hain.

   - Function parameters bhi function scope ke andar hote hain
   - Har function CALL apna NAYA scope banata hai (fresh copy)
   - Isiliye same function ko multiple baar call karne pe,
     purani call ke variables nayi call ko affect nahi karte

*/

// function greet(name) {
//     // 'name' parameter bhi is function ka LOCAL scope hai
//     let message = "Hello, " + name;
//     console.log(message);
// }
//
// greet("Aditya"); // apna alag scope
// greet("Riya");   // ye bhi apna alag scope — dono ek dusre se independent

// Isse pata chalta hai: Har function call, apna NAYA "box"
// (scope) banata hai jisme uske apne variables rehte hain.


/* ============================================================
   END OF DAY 11
   ============================================================ */