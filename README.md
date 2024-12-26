# Next Step Guide Frontend🏋️‍♂️  
**Streamline Your Sports Gear Management**  

Welcome to **Next Step Guide**, a dynamic platform designed to make managing sports equipment effortless. With robust features like querying, recommendations, secure authentication, and a responsive design, this application simplifies inventory management and enhances user interaction.

### Live Site URL  
Visit the live site here: [next-step-guide.web.app](https://next-step-guide.web.app)  

---

## Features  

- **Comprehensive Query Management:**  
  - Add, update, and delete product queries easily.  
  - View all queries submitted by users and their recommendations.  

- **Recommendations System:**  
  - Add, view, and manage recommendations for specific queries.  
  - Users can delete their own recommendations while keeping track of recommendations made by others.  

- **Search and Filtering:**  
  - Search queries dynamically by product name.  
  - Toggle between grid layouts ( 2, or 3 columns) for a customizable viewing experience.  

- **Secure Authentication System:**  
  - Firebase Authentication with email/password and Google login.  
  - JWT-based private routes for secure access.  

- **User-Friendly and Responsive Design:**  
  - Fully responsive UI built with **Tailwind CSS** and **DaisyUI**.  
  - Dynamic navigation menus based on user authentication state.  

- **Interactive Animations:**  
  - Animated sections with **React Awesome Reveal**.  
  - Sliders and carousels implemented with **Swiper**.  

---

## Technologies Used  

- **Frontend:**  
  - React  
  - Tailwind CSS  
  - DaisyUI  
  - React Awesome Reveal  
  - React Icons  
  - SweetAlert2  

- **Authentication and Security:**  
  - Firebase Authentication  
  - JSON Web Tokens (JWT)  

- **Routing:**  
  - React Router with private routes and dynamic layouts.  

- **Additional Libraries:**  
  - React Helmet Async (for dynamic page titles)  
  - Swiper (for carousel displays)  

---

## Key Pages  

1. **Home Page:**  
   - Displays a slider showcasing the purpose of the website.  
   - Shows the six most recent queries in a card format.  
   - Includes two animated sections for user engagement.  

2. **Queries Page:**  
   - Displays all product queries with filtering and sorting options.  
   - Allows users to view query details and recommend products.  

3. **My Queries (Private):**  
   - Shows all queries added by the logged-in user.  
   - Includes options to update, delete, or add new queries.  

4. **Recommendations:**  
   - Allows users to add, delete, or view product recommendations.  

5. **Error Page (404):**  
   - Displays a friendly message for invalid routes with a button to redirect to the homepage.  
