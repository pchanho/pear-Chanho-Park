# info30005-pear

INFO30005 Group Assignment - Pear

Authors: Chanho Park, Deevesh Shanmuganathan, Dimitri Sadikin, Gemma Seeley, Glenn Phillips

## Deliverable 3

In this deliverable, we are to implement a web application with its various components; models, routes, controllers and presentation.
This implementation addresses 2 out of 3 of our core functionalities previously created in deliverable 2. The 2 functionalities explored are the Accounts and Converation functions of our project, Pear.

The web application we have implemented include several pages:
  - Landing Page
  - Account Page
  - Home Page
  - Create conversaton Page
  - Chat Page
  - and 2 non functioning page support and report (for the final deliverable)
  
  
### Question 4
For the core functionalities that your group has chosen, please write 2-3 sentences describing each functionality. You can describe what functions each feature achieves, inputs, and outputs. 


### Question 5
### Account

Account system allows users to create and manage their account utilising password encryption for account security. Accounts are then securely checked for email and password verification before access is granted to the user into the application. The account page contains two forms, one for create an account and the other for logging into a users account. 

Create account form 
  -	Requires user to input all fields (first name, last name, email, birthday, and password)
  -	The user is required to be older than 65 years, must input a relevant email address and the password is stored as a hash 
  -	Access to the sight is only available with successful account creation (redirect to home page)

Login form 
  -	Checks that the input email and password is correct and present in the database
  -	Only allows user access to the account if credentials match (redirect to home page)

### Question 6
The conversation system allows users to create create conversations based on a topic, once this has been done, 2 participants can join a chat room and have a conversation. Initially our team decided to group the message functionality and the conversation functionality into one big function in our deliverable 2. However, we realised that the scope of the tasks involved was too large and as a result decided to tackle the conversations aspect of our application as the second feature to be implemented. We will detail the features involved below

Create Conversation form
  -	Requires users to enter a category and topic as input
  -	Users can also optionally upload a conversation picture
  -	In the case that a user does not want to upload an image or an image upload error occurs, a default image will be used in place.

Home form
  -	Displays the various conversations buttons that users can click to join
  -	Users can view the topic, category and topic image on these buttons to preview the conversation before they enter.

Chat form:
  -	Displays a messaging UI that will faciliate a conversation
  -	Displays the conversation image
  -	messages are currently hardcoded but will be implemented for the final product


### Conversation




