# 🏕️ My First Full Stack Project

YelpCamp is a full-stack web application where users can discover, create, and review campgrounds. Built with Node.js, Express, MongoDB, and EJS. YelpCamp lets you share your outdoor experiences with the world.

## 🌐 Demo

🔗 [Live Demo](https://yelpcamp-3m7f.onrender.com/)  
*(Make sure to allow some time for Railway to spin up the backend)*

## 📸 Features

- 🔐 User Authentication with Passport.js
- 📍 Map Integration with Mapbox for location-based search
- 🖼️ Image Uploads using Cloudinary
- ✍️ Leave reviews and ratings on campgrounds
- 📦 RESTful CRUD operations for Campgrounds and Reviews
- 🛡️ Input validation and error handling with Joi
- 🎨 EJS templating and Bootstrap UI
- ⚙️ Session support and flash messaging

---

## 🛠️ Tech Stack

- **Frontend:** EJS, Bootstrap, Mapbox
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** Passport.js (Local Strategy)
- **Cloud Services:** Cloudinary (Images), Mapbox (Maps)
- **Validation:** Joi
- **Hosting:** Railway (or your own choice)

---

## 📂 Project Structure
```
└── fudailzafar-yelpcamp/
    ├── README.md
    ├── app.js
    ├── middleware.js
    ├── package.json
    ├── schemas.js
    ├── cloudinary/
    │   └── index.js
    ├── controllers/
    │   ├── campgrounds.js
    │   ├── reviews.js
    │   └── users.js
    ├── models/
    │   ├── campground.js
    │   ├── review.js
    │   └── user.js
    ├── public/
    │   ├── javascripts/
    │   │   ├── clusterMap.js
    │   │   ├── showPageMap.js
    │   │   └── validateForms.js
    │   └── stylesheets/
    │       ├── app.css
    │       ├── home.css
    │       └── stars.css
    ├── routes/
    │   ├── campgrounds.js
    │   ├── reviews.js
    │   └── users.js
    ├── seeds/
    │   ├── cities.js
    │   ├── index.js
    │   └── seedHelpers.js
    ├── utils/
    │   ├── catchAsync.js
    │   └── ExpressError.js
    └── views/
        ├── error.ejs
        ├── home.ejs
        ├── campgrounds/
        │   ├── edit.ejs
        │   ├── index.ejs
        │   ├── new.ejs
        │   └── show.ejs
        ├── layouts/
        │   └── boilderplate.ejs
        ├── partials/
        │   ├── flash.ejs
        │   ├── footer.ejs
        │   └── navbar.ejs
        └── users/
            ├── login.ejs
            └── register.ejs
```


## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### Installation

```bash
git clone https://github.com/fudailzafar/YelpCamp.git
cd YelpCamp
npm install
````

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection_string
SECRET=session_secret
```

### Running the App

```bash
npm run dev
```

Visit `http://localhost:3000` to explore YelpCamp locally.

## 🧪 Sample Credentials (for demo)

```txt
Email: testuser@test.com
Password: test123
```

## 🧹 Future Improvements

* Email verification with nodemailer
* Pagination on campgrounds and reviews
* Better accessibility and mobile-first design
* Role-based permissions (admin controls)
* Unit and integration testing with Jest/Supertest

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
