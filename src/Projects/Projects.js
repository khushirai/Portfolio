export const Projects = [
    {
        name: "Chat Application",
        src: "ChatApp.jpg",
        alt: "Chat Application",
        slug: "chat",
        description:
            "Tools and Technologies: Node.js, Libraries: Socket.io, Express",
        link: "https://khushi-node-v3-chat-app.herokuapp.com/",
        summary:
            "Since these days, chat applications are growing in every field both at professional and personal level. Almost every companies uses chat applications like slack, in order to communicate with their employees. I have created a chat application as well using node.js and libraies such as socket.io which is a JavaScript library for realtime web applications that enables realtime, bi-directional communication between web clients and servers. In this application, user can create chat rooms and the users present in that chat room can communicate. It also features to send the live location of a person using Google Maps. Moreover, it keeps a track when a user enters the chat room and when the user exits the room. Also, a JavaScript filter 'bad-words' is used in order to warn the users and make sure that profanity doesnot exists in the chat room. Moreover, it has been made sure that a user that is not part of the chat room cannot send a message in that particular group.",
        images: ["/chat1.png", "/chat2.png"],
    },
    {
        name: "Shopping Cart",
        src: "ShoppingCart.jpg",
        alt: "Shopping Cart",
        slug: "shopping",
        description: "Tools and Technologies: React.js",
        link: "https://save-on-foods.vercel.app/",
        summary:
            "In this current era, technology is growing at rapid rate and has helped people a lot during this pandemic by providing the essentials to the people. Various ecommerce sites like Amazon, Flipkart, Instacart has helped the community a lot. I have built a shopping cart website that helps users add their stuff into the cart. (...)",
        images: ["/cart1.png", "/cart2.png"],
    },
    {
        name: "Weather App",
        src: "weather.jpg",
        alt: "Weather App",
        slug: "weather",
        description: "Tools and Technologies: Node.js",
        summary:
            "I have created a web application that shows the weather of any location as per the user's need. It is a simple project that uses gelocation and various other API's such as mapbox and darksky. I have used darksky API in order to obtain the latitude and longitude of the place that is entered by the user. It also throws respective errors in case it is not able to connect to weather service or if the location entered by user does not exist. Similarly, mapbox API is used to obtain the latitude and longitude of the address that is entered by the user and stores the value of latitude, longitude and location in order to obtain its current weather. It also throws respective errors in case it is not able to connect to location services probably when there is mismatch in the values of latitude, longitude. Also, if the place entered by user doesn't exist. Also, various concepts of Javascript are implemented in this project such as making http requests, callback chaining, destrcuting, building a JSON HTTP Endpoint.",
        link: "https://khushi-weather-application.herokuapp.com",
        images: ["/weather1.png", "/weather2.png"],
    },

    {
        name: "Personal Project",
        src: "personal.jpg",
        alt: "Personal Project",
        slug: "personal",
        description: "Tools and Technologies: React.js",
        link: "https://khushi-portfolio.vercel.app/",
        summary:
            "I have created a basic personal project using react.js by picking one of the random style using squarespace. The project comprises of three main web pages: Work, About and Contact. The Work Page links to various small projects that comprises pictures of the particular topics such as Butterfly, Camping, Italy, Landscape, Mountain and Wine. The About comprises of some information and the Contact page is a form which a user can fill in order to work on a project together and provide some basic information about their business. The project makes use of material-ui, a popular react framework that build react components for faster and easier web development. Its various compoenents are used such as Grid, CardMedia, Typography. Also, Material Icons are used for representing the social media icons in the project.",
        images: ["/personal1.png", "/personal2.png"],
    },
    {
        name: "Wikipedia Engine",
        src: "wikipedia.jpg",
        alt: "Wikipedia Engine",
        slug: "wikipedia",
        description: "Tools and Technologies: Angular Libraries: Bulma, RxJs",
        link: "https://wikipedia-search-engine.vercel.app/",
        summary:
            "Wikipedia is one of the most popular online encyclopedia. I have built a wikipedia search engine using Angular framework that pops with a search box and displays Title, Word Count and Snippet(short description) in a tabular form. The project makes use of RxJs library that uses Observables and made use of operators for better optimization. Also, for styling purposes bulma is used which is a free, open source CSS framework based on Flexbox. The project potrays a clear understanding of Modules, Components, Services etc. Also, Dependency Injection has been implemented which is an important application design pattern used in order to increase efficiency and modularity. In addition to this, components interaction has been implemented between parent and child using input binding i.e adorning with Input decorator. One of the most useful concept of Angular i.e Lazy Loading has been implemented in the project in order to keep the initial bundle sizes smaller and as a result, the application can be loaded much faster. ",
        images: ["/wikipedia1.png", "/wikipedia2.png"],
    },
    {
        name: "Password Generator",
        src: "password.jpg",
        alt: "Password Generator",
        slug: "password",
        description: "Tools and Technologies: Angular, Bulma",
        link: "https://password-generator-dun.vercel.app/",
        summary: "Password Generator is a simple application built in Angular that helps user to generate random password. The application asks for the length of the password, usage of symbols, letters or special signs from the user and generates a random password on the based of needs of the user ",
        images: ["/password1.png", "/password2.png"],
    },
    {
        name: "Typing Game",
        src: "typing.jpg",
        alt: "Typing Game",
        slug: "typing",
        description: "Tools and Technologies: Angular, Bulma",
        link: "https://typing-game-delta.vercel.app/",
        summary:
            "It is a simple typing game that has a randomly generated text everytime you play and expects you to type the same exact text as the randomly generated text. It displays the text as green in color if the user is typing in factual manner. It also displays a 'Success' message if you have gone throughout the whole game correctly, by default the Success message is hidden. However, it displays the text color in red if inaccurate text is typed. The random text generated every time is achieved through faker, a javascript library which is used to create fake amount of texts. Bulma, a CSS framework has been used for styling purposes ",
        images: ["/typing1.png", "/typing2.png"],
    },
];
