import { StarRating } from "./components/StarRating";
import "./styles.css"; // optional for additional styling

// App component
export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <StarRating totalStars={5} />
    </div>
  );
}
