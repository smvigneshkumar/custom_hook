import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="App">
      {data &&
        data.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
    </div>
  );
}
