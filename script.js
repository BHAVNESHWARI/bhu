const baseURL = "https://your-glitch-project.glitch.me/users"; // Replace with your Glitch URL

// 1. Create User
document.getElementById("createUser").addEventListener("click", async () => {
  const name = document.getElementById("userName").value;
  if (!name) {
    alert("Please enter a user name");
    return;
  }
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      alert("User added successfully");
    } else {
      alert("Error adding user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// 2. Fetch and console all users
document.getElementById("fetchUsers").addEventListener("click", async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// 3. Update user of id 1
document.getElementById("updateUser").addEventListener("click", async () => {
  try {
    const response = await fetch(`${baseURL}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Alice" }),
    });

    if (response.ok) {
      alert("User updated successfully");
    } else {
      alert("Error updating user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// 4. Delete user of id 1
document.getElementById("deleteUser").addEventListener("click", async () => {
  try {
    const response = await fetch(`${baseURL}/1`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("User deleted successfully");
    } else {
      alert("Error deleting user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
