// utils/trackVisitor.js
export const trackVisitor = async (page) => {
  try {
    await fetch("https://pms-tracker-2.onrender.com/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page }),
    });
  } catch (err) {
    console.log("Tracking failed");
  }
};