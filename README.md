
The name of my project is DevStack.

Its a React based website,where we can select 
different types of technologies to build our stack.


Technologies i use are
HTML,
CSS5,
Tailwind CSS,
JAVASCRIPT,
TypeScript,
git and github and
React JS.


3 features about your project
Important 3 features of my project are:-

1.It is Responsive.(mobile+desktop)
2.Can select multiple technology.
3.There is a count value that will increase with adding stack
   and decrease on removing a stack .

i.What is JSX, and why is it used in React?
 
 = Full meaning of JSX is JavaScript extension.
   It looks like HTML but its not .
   It is used in React because it is easy to use and
   use javascript too.

ii.What is the difference between props and state?

 = The difference between props and state is 
   props are used to send data in different component,
   when state is basically to manage or change data .

iii.What does the useState hook do, and where did you use it in this project?
  
   = useState is a hook that is used in react to manage data .
     it have 3 parts:- count,setCount,initial value.
     using useState we can change or manage the data in the project.

     I also used useState hook. I used it in Technologies.tsx twice.
     One to count the total added stack and another to show reducing after removing every stack
     And also for button remove all to remove all stack at once

iv.What does the useEffect hook do, and why did you need it to load the JSON data?
 
  = useEffect is also a hook in react . Which helps us to fetch data from
    a json data if we have it.It is also used for Promise .

    I did not use the useEffect in my project .  I used fetch() to get my data from JSON file.

v.Why does every item in a .map() list need a unique key prop?
 
 = When  use .map() in react to create a list of elements, each item needs a unique key so React can identify which item is which.

vi.What is conditional rendering? Show one place you used it (example: the empty stack message).
 
  =Conditional rendering means showing different UI depending on some condition.
  I used it in Selectedtech.tsx file where the conditional rendering was when count>0 then activate the Remove all button.

vii.How do you pass data from a parent component to a child component, and how does a child      send something back to the parent?
 
 = To pass the data from parent to child we need to send props to the child 
   so that the child gets the data from parent.

   To send something back to parents we use lifting state up way to send a state 
   from child to parent. 
