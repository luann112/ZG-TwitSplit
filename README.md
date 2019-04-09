# ZG-TwitSplit
The product Tweeter allows users to post short messages limited to 50 characters each.
Sometimes, users get excited and write messages longer than 50 characters.
Instead of rejecting these messages, we would like to add a new feature that will split the message into parts and send multiple messages on the user's behalf,
all of them meeting the 50 character requirement.

Example
Suppose the user wants to send the following message:
"I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."
This is 91 characters excluding the surrounding quotes. When the user presses send, it will send the following messages:
"1/2 I can't believe Tweeter now supports chunking" "2/2 my messages, so I don't have to do it myself."
Each message is now 49 characters, each within the allowed limit.

# Technologies
- Server: NodeJS, NextJS, ExpressJS, Socket IO
- Front-end: ReactJS, Redux, Redux-saga
- Test: Jest, Enzyme
- Compiler: Babel

# Commands
- Install the enssential packages: ```yarn install```
- Start in dev enviroment (make sure you run on localhost with port 3000): ```yarn dev```
- Test: ```yarn test```

# Screenshots
- The applicaion is compatible on all screen size.
- At the first page you have to choose one user.
Screen Shot 2019-04-09 at 11.08.29 PM
Screen Shot 2019-04-09 at 11.08.45 PM
- At the chat page you could choose any channels to send the message. You can use another tab with a nother user to make the conversation.
Screen Shot 2019-04-09 at 11.19.21 PM
Screen Shot 2019-04-09 at 11.19.38 PM
Screen Shot 2019-04-09 at 11.11.27 PM
