❌ Bad Code:
```javascript
function sum(){ return a+b; }
```

🔍 Issues:
*   ❌ `a` and `b` are not defined within the function's scope. This will likely result in an error, or the function will rely on global variables, which is bad practice.
*   ❌ The function doesn't accept any arguments, limiting its reusability.

✅ Recommended Fix:
```javascript
function sum(a, b) {
  return a + b;
}
```

💡 Improvements:
*   ✔ The function now accepts `a` and `b` as parameters.
*   ✔ The function now uses parameters for calculation, avoiding reliance on global variables and making it reusable.
*   ✔ Clear definition of the function inputs (a and b).
