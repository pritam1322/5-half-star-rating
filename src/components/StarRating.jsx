import { useState } from "react";

// Simple StarIcon
const StarIcon = ({ filled }) => (
  <span style={{ color: filled ? "#FFD700" : "#CCCCCC", fontSize: "2rem" }}>
    ★
  </span>
);

// StarRating component
export const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const calculateValue = (event, index) => {
    const { left, width } = event.target.getBoundingClientRect();
    const x = event.clientX - left;
    return x < width / 2 ? index - 0.5 : index;
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        position: "relative",
        flexDirection: "row",
      }}
    >
      {[...Array(totalStars)].map((_, i) => {
        const starIndex = i + 1;
        const fillValue = hover || rating;

        const isFull = fillValue >= starIndex;
        const isHalf = fillValue === starIndex - 0.5;

        return (
          <span
            key={i}
            onMouseMove={(e) => setHover(calculateValue(e, starIndex))}
            onMouseLeave={() => setHover(0)}
            onClick={(e) => setRating(calculateValue(e, starIndex))}
            style={{
              cursor: "pointer",
              position: "relative",
              display: "inline-block",
            }}
          >
            <StarIcon filled={isFull} />
            {isHalf && (
              <span
                style={{
                  color: "#FFD700",
                  fontSize: "2rem",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  overflow: "hidden",
                  pointerEvents: "none",
                }}
              >
                ★
              </span>
            )}
          </span>
        );
      })}
      <span
        style={{ marginLeft: "1rem", fontSize: "1.2rem", paddingTop: "0.7rem" }}
      >
        {rating ? `Rating: ${rating}` : ""}
      </span>
    </div>
  );
};
