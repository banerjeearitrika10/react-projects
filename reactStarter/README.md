# Parcel
- Dev build
- Local Server
- HMR - Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster Build
- Image Optimization
- Minification
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Error Handling
- Https
- Tree Shaking - remove unused code
- different dev and prod bundles

# JSX - Html like syntax(Not html inside js) - created by facebook devlopers

 - JSX (transpiled before it reaches to js engine) - transpilation(convert code jsx to react code) done by babel maneges by parcel
 - JSX - bable transpiles it to React.createElement => ReactElement-Js Object => HtmlElement(render) 

# React components
- Classbased component
- Functional component(function that return JSX code)

# Hooks -> react utility function
-In useState we use the 2nd array element(set) to trigger the algoritm and check the diff between virtual DOM , and automatically update ythe real DOM

-useEffects - first argument is a callback and 2nd is a dependency array
  if no dependency array => useEffects is called in every render
  if dependency array is empty = [] => useEffect is callled on initial render(just Once)
  if dependency array has some state variable , it get called when the state of the variable is changed

# Routing
-ServerSide Routing
-ClientSide Routing - in react we use this