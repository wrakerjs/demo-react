import { Wraker } from "wraker";
import { useEffect } from "react";

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  name: "my-worker",
  type: "module",
});

function App() {
  useEffect(() => {
    const wraker = Wraker.fromWorker(worker);

    wraker.fetch("/hello").then((response) => {
      if (response.error) {
        document.getElementById("error").textContent = response.error;
      } else {
        document.getElementById("data").textContent = response.body;
      }
    });
  }, []);

  return (
    <div>
      <style scoped>
        {`
        p {
          font-size: 2rem;
        }

        #data {
          color: green;
        }

        #error {
          color: red;
        }
        `}
      </style>

      <p id="data"></p>
      <p id="error"></p>
    </div>
  );
}

export default App;
