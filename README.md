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

### Hooks

- router hook for minimal navigation features
- localstorage and localseasion access and write
- useFetch to abstract the fetching logic 

Main concepts for understanding hooks:
- return and object of state values and/or state setters
- use useState, useEffect to create more complex hooks
- encapsolated logic for separation

### Dom Manipulation

main concepts

1.selecting elements
- document.getElementById()
- document.querySelector()
- document.querySelectorAll()
2. creating elements
- document.createElement()
3. Modifying elements
- element.textContent
- element.innerHTML
- element.setAttribute('class', 'my-class')
4. event handling
- button.addEventListener('click', () =>)
- button.addEventListener('popstate', () => )
5. manipulating styles
- element.style.color
- element.classList.add('className')
6. Traversing the DOM
- element.parentElement
- element.children
- element.nextElementSibling
7. typecasting
- HTMLElement
- HTMLButtonElement
- HTMLInputElement
- (...)

#### window & document

1. dimensions
- window.innerWidth
- window.innerHeight
2. open and closing
- window.open(url, '_blank')
- window.close()
3. navigation
- window.location.href
- window.location.reload()
- window.history.back()
- window.history.forward()
4. timers
- setTimeout(() => , 1000)
- clearTimeout(timeout)
- setInterval(() =>, 1000)
- clearInterval(interval)
5. dialogue boxes
- window.alert(text)
- window.confirm(text)
- window.prompt(text)
6. screen properties
- window.screen.width
- window.screen.height
- window.screen.colorDepth
7. event listener
- window.addEventListener('resize', () => )
- window.addEventListener('scroll', () => )
8. cookies
- document.cookie
9. localstorage
- localStorage.setItem('key', 'value')
- localStorage.getItem('key')
- localStorage.removeItem('key')
- localStorage.clear()
10. Typecasting 
- window as Window & typeof globalThis
- document as Document
- document as HTMLDocument
- window.navigator as Navigator
- document.location as Location
- window.localStorage as Storage

### React/Ts fundamentals

1. Component Basics
- const MyComponent: React.FC<Props> = ({ title }) => <h1>{title}</h1>;
2. State and Life cycle
- const [count, setCount] = useState<number>(0);
3. Even handling
- const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => event.target
4. Children Prop
-   children: React.ReactNode;
5. Context Api
- const MyContext = React.createContext<{ value: string; setValue: React.Dispatch<React.SetStateAction<string>> }>({} as any);
6. Generic asertion
function getValue<T>(value: T): T {
  return value;
}
let stringValue = getValue<string>("Hello") as string;
7. forced double assertion
let value: number = 5;
let str: string = (value as unknown) as string;


## Requirements/Installation

Since the no external libraries rules is in place (other than react), the project should be as minimal as possible. 

Additionally I'll install vite and types (when necessary)

## Commands

Dev
```language=bash
npm run dev
```

build
```language=bash
npm run preview
```

Preview
```language=bash
npm run preview
```