# Travel App

## Description

Travel App is a modern React application designed to provide users with an interactive and engaging travel experience. It includes features such as a dynamic weather search, login/signup authentication, and various sections showcasing popular travel destinations, offers, and company information.

## Features

- **Authentication**: User login and sign-up functionality with modal-based forms.
- **Weather Search**: Users can search for weather information related to travel destinations.
- **Interactive Components**: Includes popular destinations, special offers, and contact forms.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/oumi-beep/travel-app.git
   cd travel-app

### Installation

1. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   
# Run the Application

# To start the development server and view the application, use:

npm run dev

# And you can navigate to http://localhost:3000 in your browser to view the app.

# Code Structure

- App.jsx: Main component that manages the state for modals, user authentication, and weather search visibility.
- Head.jsx: Contains the header with navigation and user authentication options.
- Footer.jsx: Includes the footer with contact information and social media links.
- Body.jsx: The main content area with a video background, search functionality, and offers display.
- Popular.jsx: Displays popular travel destinations.
- Offer.jsx: Lists special offers with details and images.
- About.jsx: Provides information about the company and team.
- Contact.jsx: Includes a contact form for users to reach out.
- WeatherSearch.jsx and WeatherInfo.jsx: Allows users to search for weather information related to travel destinations.
- AuthModal.jsx: Modal component for user login and sign-up forms.

# Styling

- SCSS/CSS: Styles are located in respective .scss or .css files, e.g., auth_modal.scss, body_css.css, contact_css.scss, etc.

# Components

## App.jsx
**Purpose**: Main component that renders the application layout and manages state for modal visibility, user information, and weather search.

**Features**:
- Manages modal states (login/signup).
- Handles user login and sign out.
- Toggles visibility of the WeatherSearch component.
![image](https://github.com/user-attachments/assets/c9faeeeb-5965-4579-9ff4-882f395f320e)

### Head.jsx

**Purpose**: Contains the header with navigation and user authentication options.

**Features**:
- Responsive menu toggle.
- Dropdown for user profile with options.
![image](https://github.com/user-attachments/assets/1df7eff8-2e82-4d50-94ea-30468e7bffce)


## About.jsx
**Purpose**: Displays information about the company including mission and team.
**Features**:
- Shows mission statement and team information.
- Includes images related to the company's mission and team.
![image](https://github.com/user-attachments/assets/46a19d91-e39f-462a-9bcc-ed9905c5810f)


## AuthModal.jsx
**Purpose**: Handles user authentication (login and sign-up) through a modal.
**Features**:
- Toggles between login and sign-up views.
![image](https://github.com/user-attachments/assets/6adc7554-5e97-4246-ac52-d62d7ba22f23)
![image](https://github.com/user-attachments/assets/ae2be714-a283-496e-8c39-9b6d03c2ebf5)
- Validates user credentials and stores user information.
- Manages form input and error messages.
![image](https://github.com/user-attachments/assets/25734d5a-5133-46f6-a533-d248d573a64c)
![image](https://github.com/user-attachments/assets/a25fc1e9-170f-427a-94c0-53a5c113830f)
- After loging
![image](https://github.com/user-attachments/assets/cd5d7e03-e971-404d-b2c9-3ca3739d800a)


## Body.jsx
**Purpose**: Contains the main content of the application including search functionality and social media icons.
**Features**:
- Allows users to search for travel destinations.
![image](https://github.com/user-attachments/assets/02f7fad5-83d7-45c4-b6e2-f2d68bad08a7)
- Displays search results with travel offers.
![image](https://github.com/user-attachments/assets/5ee307ec-bb57-4d0e-8ec2-b1f44d96a711)
- Includes a video background and social media icons.

## Popular.jsx
**Purpose**: Displays popular travel destinations.
**Features**:
- Lists and showcases various popular travel destinations.
- Includes images and descriptions of each destination.
- May feature links or buttons for more information or booking.
![image](https://github.com/user-attachments/assets/6ac408f8-8fa5-4161-aa38-702c5c4f505e)

## Offer.jsx
**Purpose**: Lists special offers and promotions related to travel.
**Features**:
- Displays special travel offers with details and images.
- Highlights discounts, packages, or exclusive deals.
- Provides information on how to take advantage of these offers.
![image](https://github.com/user-attachments/assets/36ed2c9d-3c86-4d65-92d6-b88eb72471c8)

### `WeatherSearch.jsx`
- **Purpose:** Allows users to search for weather information related to travel destinations.
- **Features:**
  - Contains input field for location.
  - Displays weather information fetched from the API.


### `WeatherInfo.jsx`
- **Purpose:** Displays weather information based on the selected location.
- **Features:**
  - Fetches weather data from OpenWeatherMap API.
  - Displays temperature, weather description, and humidity.
![image](https://github.com/user-attachments/assets/3bb9d2ff-b6ba-423a-9f1f-7ee5903e628e)


## Contact.jsx
**Purpose**: Provides a contact form for users to send messages to the support team.
- **Features:**
- Handles form submission and message sending via EmailJS.
![image](https://github.com/user-attachments/assets/d3cb2ea6-5620-4b9a-987e-795840753405)
- Displays submission status messages.
- result:
![image](https://github.com/user-attachments/assets/b8ac437b-d10f-4725-9581-4e2b08c0bbc9)

## Footer.jsx
**Purpose**: Displays footer content including branding and contact information.
- **Features:**
- Contains links to social media and company email.
- Includes branding logo.
![image](https://github.com/user-attachments/assets/2fd5561e-92dd-43a4-93d2-19f04a5fd55f)


## Acknowledgments

- **React**: For building the user interface.
- **EmailJS**: For handling email sending.
- **FontAwesome**: For icons.
- **OpenWeatherMap**: For weather data.
- **Various open-source libraries**: For styling and other utilities.



