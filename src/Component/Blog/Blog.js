import React from 'react';

const Blog = () => {
          return (
                    <div>
                    <h4>this is blog </h4>
                    <h3>Difference between javascript and nodejs</h3>
                    <p>javascript</p>
                    <p>1.It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.</p>
                    <p>2.We can only run JS on browsers.</p>
                    <p>3.It is utilised on the web pages client-side.</p>
                    <p>4.The JS can easily add HTML and even play with the DOM.</p>
                    <p>5.It runs mainly on the client-side. Thus, it is used in the development of the front end.</p>
                    <p>node js</p>
                    <p>1.It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.</p>
                    <p>2.NodeJS helps us run JS outside the browser as well.</p>
                    <p>3.It lets us use JS on the server-side as well since it works on the server-side.</p>
                    <p>4.The Node.JS, on the other hand, is not capable enough to add various HTML tags.</p>
                    <p>5.C, C++, and also Javascript are used for writing Node.JS.</p>

                    <h3> When should you use nodejs and when should you use mongodb</h3>
                    <p>When should we use Nodejs?

Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...</p>
<p>When should we use MongoDB?

If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing</p>
<h3>What is the purpose of jwt and how does it work</h3>
<p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                   
          </div>
          );
};

export default Blog;