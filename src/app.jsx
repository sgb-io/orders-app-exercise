import orders from "./orders.json";

const App = () => {
  return (
    <div id="container">
      <h1>Orders App</h1>
      <p>Put your implementation here - please read the README!</p>
      <p>There are {orders.length} orders:</p>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
};

export default App;
