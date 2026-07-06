# Core Concepts Mastered

## React Fundamentals & Workflow

- **Creating Modern React Projects:**
- Proficiency in initializing projects using build tools like Create React App, and configuring development environments.
- TO DO: learn Vite and production modren real-world app creation with React.

- **The `App` Component:**
- Understanding its role as the root node of the React component tree where the primary UI hierarchy originates.

- **React Strict Mode:**
- Using `<StrictMode>` during development to surface potential bugs, legacy API usages, and unintended side-effects by intentionally double-rendering components.

- **Debugging React Applications:**
- Comfortably navigating the browser console, parsing React stack traces, and utilizing the official React Developer Tools extension to inspect component state and props.

## Component Architecture & JSX

- **Creating & Reusing Components:**
- Designing modular JavaScript functions that return UI blueprints, maximizing code maintainability and reusability.

- **Declarative vs. Imperative Programming:**
- Understanding that React is _declarative_ (we describe _what_ the UI should look like based on current state, and React handles the updates) rather than _imperative_ (manually targeting and manipulating DOM nodes with vanilla JS).

- **What is JSX:**
- Writing HTML-like structures directly inside JavaScript, which under the hood compiles down to pure React.createElement() object declarations.

- **JavaScript Logic in Components:**
- Executing dynamic expressions, math operations, and array evaluations directly inside JSX layout structures using curly braces `{}`.

- **Conditional Rendering Strategies:**
- Understanding clean UI logic switching inside JSX using the short-circuiting `&&` operator (all-or-nothing rendering), ternary `? :` operators (either/or UI variations), and early `return` guard clauses to handle loading or error states.

- **Component Refactoring & Extraction:**
- Proficient in breaking down large, complex JSX layouts into small, isolated, single-responsibility sub-components to keep code readable and easy to test.

## Data Flow & Dynamic UI

- **Props (Properties):**
- Passing read-only configuration data down from parent components to child components to dynamically customize their output, practicing both standard `props` handling and modern ES6 destructuring.

- **Rendering Dynamic Lists:**
- Using the native JavaScript `.map()` method to transform arrays of raw data into arrays of JSX components, while consistently implementing unique, stable key props so React only updates the specific items that changed instead of re-rendering the whole list.
