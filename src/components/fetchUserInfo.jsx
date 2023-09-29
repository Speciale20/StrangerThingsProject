const fetchUserInfo = async () => {
  try {
    const response = await fetch("https://your-api-url/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include the user's token
      },
    });

    if (response.ok) {
      const userData = await response.json();
      console.log("User information:", userData);
    } else {
      console.error("Failed to fetch user information");
    }
  } catch (error) {
    console.error("Error fetching user information:", error);
  }
};
