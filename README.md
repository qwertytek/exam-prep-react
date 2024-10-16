# Exam Preparation for React Developer role

The purpose of this project is to cover all the topics, based on the requirements for this Exam.

## Exam rules

**DO NOT USE:**
- External Libraries
- ChatGPT Stack Overflow or any other tool where you copy
and paste code. You should write your own code.

## Preparation

1. Review Custom hooks in React
2. DOM Manipulation in TypeScript
3. Please also review React/TS fundamentals before starting

## Requirements/Installation

Since the no external libraries rules is in place (other than react), the project should be as minimal as possible. 
Which means no NPM and consequently no bundler like (vite or webpack).

So react is installed over CDN

```language=html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

In order to perform tasks like running scripts I'll use bash. So in order to enable scripts:

```language=bash
chmod +x serve.sh
```

Dev server is normally handled by vite or webpack configuration. 
Without a bundle the option is to use somthing most developers have installed in their machine is python.

To check if you have python available run:
```language=bash
python --version
```

Unfortunately this means no Hot module reloading. 
So server needs to be restared everytime there is a change.

## Run the application

```language=bash
./serve.sh
```













