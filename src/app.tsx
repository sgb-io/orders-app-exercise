import { Alert } from "antd";

import orders from "./orders.json";

const App = () => {
  return (
    <div id="container">
      <h1>Orders App</h1>
      <Alert
        message="Note: antd is available, it's advised to use antd components where possible to save time."
        type="info"
      />
      <br />
      <p>Put your implementation here - please read the README!</p>
      <p>
        See all the available antd components here:{" "}
        <a href="https://ant.design/components/overview/">
          https://ant.design/components/overview/
        </a>
      </p>
      <p>There are {orders.length} orders:</p>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
};

export default App;
