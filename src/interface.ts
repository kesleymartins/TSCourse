interface IAuthor {
  name: string,
  avatar: string
}

interface IPost {
  title: string,
  body: string,
  tags: string[],
  createdAt: Date,
  author: IAuthor
}

const firstAuthor: IAuthor = {
  name: "mario",
  avatar: "mario.png"
}

const firstPost: IPost = {
  title: "My first post",
  body: "Something interesting",
  tags: ["gaming", "tech"],
  createdAt: new Date(),
  author: firstAuthor
}

// Functions
function createPost(post: IPost): void {
  console.log(`Created post: ${post.title} by: ${post.author.name}`)
}

function generatePost(author: IAuthor): IPost {
  return {
    title: "Generated title",
    body: "Generated body",
    tags: ["generated", "post"],
    createdAt: new Date(),
    author: author
  }
}

createPost(firstPost)
const secondPost: IPost = generatePost(firstAuthor)

// Arrays
const posts: IPost[] = [firstPost, secondPost]


// Logs
console.log('author', firstAuthor)
console.log('first post', firstPost)
console.log('second post', secondPost)
console.log('posts', posts)
