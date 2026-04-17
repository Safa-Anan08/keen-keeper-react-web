#  KeenKeeper

## Description

KeenKeeper is a responsive relationship management web app that helps users track, maintain, and improve their personal connections. Users can monitor interactions, view timelines, and analyze communication patterns with friends.

---

## Technologies Used

*  React (Vite)
*  Tailwind CSS
*  Recharts (for data visualization)
*  React Router DOM
*  React Icons

---

## Key Features

### 1. Friend Management

* View all friends in a clean card layout
* Track contact status (On Track, Almost Due, Overdue)
* Detailed friend profile with bio, tags, and actions

### 2. Interaction Timeline

* Log interactions (Call, Text, Video)
* Filter timeline using dropdown (Filter timeline / Call / Text / Video)
* Visual timeline UI with icons and dates

### 3.  Friendship Analytics

* Dynamic Pie Chart based on interactions
* Real-time data updates from user activity
* Shows communication distribution (Call/Text/Video)

---

### Interaction System (Dynamic Feature)

  How it works
  From the Friend Details page, users can perform:
* Call
* Text
* Video

When any action is clicked:
A new entry is instantly added to the Timeline.
The entry includes:
Interaction type (Call/Text/Video),
Friend name.
Current date
* Real-Time Updates,
* Timeline Page.
Displays all interactions dynamically.
Supports filtering by interaction type.
* Stats Page
Pie chart updates automatically,
Shows real-time ratio of Call / Text / Video interactions.
 User Feedback ->
Toast notification appears after each interaction ,
Confirms that the action was successfully logged.

### Key Benefit

This system ensures a seamless flow:

User Action → Timeline Update → Analytics Update

Making the app interactive, real-time, and data-driven.

##  Responsive Design

* Fully responsive for mobile, tablet, and desktop,
* Optimized layouts and spacing across all devices.

---

##  Additional Features

* Toast notifications on interaction
* Loading state while fetching data
* 404 Not Found page for invalid routes

---

##  Project Status

  Completed and ready for deployment ->
  Installation & Setup,
  git clone https://github.com/Safa-Anan08/keen-keeper-react-web ,
  npm install ,
  npm run dev

### Live Demo

🔗 https://keen-keeper-react.netlify.app/ 


## Future Improvements
  1.Edit/Delete friend functionality,
  2.Authentication system,
  3.Dark mode

### Author

Developed as part of a frontend assignment project.



