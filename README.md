# In progress application that visualizes Covid data (norwegian specific) 

# Client:
Authenticate with Open ID Connect/google and use the access-token to make API calls.\
Visualzie the Covid data in graphs/tabels.\

# Server: 
Schedule cronjobs that matches the time that the original dataset is updated for so to fetch and store the updated data in mongodb.\
Verify if requests asking for a resource has an valid access-token (JWT) as a part of the Authorization header.\


