import "./App.css";
import LazyLoadingExample from "./LazyLoading/LazyLoadingExample";
import MemoizedExample from "./Memo/MemoizedExample";
import Debouncing from "./ThrottlingAndDebouncing/Debouncing";
import Throttling from "./ThrottlingAndDebouncing/Throttling";
import UseTransition from "./UseTransition/UseTransition";

function App() {
  return (
    <div className="App">
      {/* <ListOptimization /> */}
      {/* <LazyLoadingExample /> */}
      {/* <MemoizedExample /> */}
      {/* <Throttling /> */}
      {/* <Debouncing /> */}
      <UseTransition />
    </div>
  );
}

export default App;
