export const postsData = [
    {
        userID: 1,
        authorName: "Meskatul Islam",
        imgSrc: "./img/meskat.jpeg",
        duration: "1h",
        content: `
        This is my post. So I can delete or edit this post.
        Click on the "..." (3 dots) to edit or delete this post.
        Click on the "Comment" button to view comments or create a comment on this post.
        
        `,
        like: 14,
        isLiked: true,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 1,
                name: "Meskatul Islam",
                imgSrc: "./img/meskat.jpeg",
                comment: "This is my comment. I can delete or edit this comment.",
            },
            {
                id: 1,
                parent_id: 0,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 3,
                parent_id: 1,
                userID: 1,
                name: "Meskatul Islam",
                imgSrc: "./img/meskat.jpeg",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    },

    {
        userID: 2,
        authorName: "Pondits",
        imgSrc: "./img/pondit.png",
        duration: "1h",
        content: `# Features of Facebook news feed app
        01. Render multiple post
        02. Create post
        03. Edit post
        04. Delete post
        05. Like post
        06. Number of likes
        07. Create comment
        08. Reply comment
        09. Edit comment
        10. Delete comment (with child comments)
        11. Render nested comments
        12. Number of comments
        `,
        like: 19,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 1,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 1,
                name: "Meskatul Islam",
                imgSrc: "./img/meskat.jpeg",
                comment: "This is my comment. I can delete or edit this comment.",
            },
        ],
    },
    
    {
        userID: 3,
        authorName: "TensorFlow.js",
        imgSrc: "./img/tensorflow.png",
        duration: "3h",
        content: "TensorFlow.js is a JavaScript library developed by Google for training and using machine learning (ML) models in the browser. It’s a companion library to TensorFlow, a popular ML library for Python. Read on to learn about its features, its future, and how it can help you.",
        like: 10,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    },
    
    {
        userID: 4,
        authorName: "React",
        imgSrc: "././logo192.png",
        duration: "30m",
        content: "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. ",
        like: 15,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    },
    
    {
        userID: 6,
        authorName: "Node.js",
        imgSrc: "./img/node.png",
        duration: "1h",
        content: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
        like: 10,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    },
    
    {
        userID: 5,
        authorName: "Tesla",
        imgSrc: "./img/tesla.png",
        duration: "1h",
        content: "Tesla was founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars. Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products. Tesla believes the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better.",
        like: 20,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    },
    
    {
        userID: 1,
        authorName: "Meskatul Islam",
        imgSrc: "./img/meskat.jpeg",
        duration: "1h",
        content: "p2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        like: 17,
        isLiked: false,
        comments: [
            {
                id: 0,
                parent_id: null,
                userID: 2,
                name: "Pondits",
                imgSrc: "./img/Pondit.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
            {
                id: 2,
                parent_id: null,
                userID: 2,
                name: "React.js Org",
                imgSrc: "./logo192.png",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            },
        ],
    }
]