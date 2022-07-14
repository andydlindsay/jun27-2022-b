# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

1. plain-text passwords
2. plain-text cookies

https://localhost:8000/
https://www.npmjs.com/package/cookie-session
https://www.google.com/


req.query.q

https://www.google.com/search?
q=javascript&
sxsrf=ALiCzsYbq48NuBpcB56pV0Wpgu6SbcNceg%3A1657823480261&
source=hp&
ei=-GDQYpS2Dbet0PEPjZm4wAQ&iflsig=AJiK0e8AAAAAYtBvCOeIjISjL5FRC9B6s96Nl8kMdhEr&
ved=0ahUKEwiUko7dgfn4AhW3FjQIHY0MDkgQ4dUDCAk&uact=5&
oq=javascript&
gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBOgYIswEQhQQ6CAgAEI8BEOoCOggILhCPARDqAjoICC4QsQMQgwE6CAguEIAEELEDOggIABCxAxCDAToLCC4QgAQQsQMQgwE6DgguELEDEIMBEMcBEK8BOggIABCABBCxAzoOCC4QgAQQsQMQgwEQ1AI6CwguELEDEIMBENQCOgUIABCABDoICC4QgAQQ1AI6BQguEIAEOgsILhCABBDHARCvAVDsNli2RmDVR2gEcAB4AIABigGIAZUHkgEEMTIuMZgBAKABAbABCw&sclient=gws-wiz


### Hashing
* one-way encryption process
* plain-text + salt => hashing algo => 60 character hash


'1234' + 'fasdjhfalksdhfhasdf'

### Encryption
* encryption is a 2-way process

* plain-text cookie => encryption algo => encrypted string => stored in the browser
* encrypted cookie => decryption algo => plain-text cookie



request => middleware => middleware => middleware => request handler => middleware


req.session.user = 'nally'   res.cookie('gabagool', encryptedString)
request handler       =>    session middleware 

 
### Asymmetric Encryption
* public key
* private key

### REST
* REpresentational State Transfer
* the way we interact with a resource reflects the underlying data structure
* naming convention for routes

GET /all-urls-in-the-system

B GET   /comments
R GET   /comments/:id
E POST  /comments/:id
A POST  /comments
D POST  /comments/:id/delete

B GET     /users
R GET     /users/:id
E PATCH   /users/:id
A POST    /users
D DELETE  /users/:id

B GET /videos/5/comments
B GET /products/:id/reviews/:review_id

GET - retrieve a resource
POST - creating a resource
PATCH - replace a piece of a resource
PUT - replaces the resource entirely
DELETE - deletes a resource

<div></div>
<aside></aside>
<header></header>





