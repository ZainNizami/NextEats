import React, { useState } from "react";
import "./ReviewForm.css";

export default function ReviewForm({ selectedRestaurant }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || review.trim() === "") {
      setError("Please provide both a rating and a review.");
      return;
    }

    setError("");
    console.log("✅ Review submitted:", {
      restaurant: selectedRestaurant.name,
      rating,
      review,
    });

    // Reset
    setRating(0);
    setReview("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Leave a review for <span>{selectedRestaurant.name}</span></h2>

      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "filled" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
        rows={4}
      />

      {error && <div className="error-msg">{error}</div>}

      <button type="submit">Submit Review</button>
    </form>
  );
}
