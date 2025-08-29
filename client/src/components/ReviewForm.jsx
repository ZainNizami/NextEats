import React, { useState } from "react";

function ReviewForm({ selectedRestaurant }) {
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: "demoUser",
      restaurantId: selectedRestaurant.id,
      rating,
      reviewText,
    };

    try {
      const res = await fetch("/api/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
      <h3>Leave a review for {selectedRestaurant.name}</h3>
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <br />
      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        required
        rows={4}
        cols={50}
        style={{ marginTop: "10px" }}
      />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
