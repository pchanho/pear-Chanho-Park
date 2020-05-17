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
  -	The user is required to be older than 65 years, must input a relevant email address and       the password is stored as a hash 
  -	Access to the sight is only available with successful account creation (redirect to home       page)

  Login form 
    -	Checks that the input email and password is correct and present in the database
    -	Only allows user access to the account if credentials match (redirect to home page)

### Question 6
### Conversation




