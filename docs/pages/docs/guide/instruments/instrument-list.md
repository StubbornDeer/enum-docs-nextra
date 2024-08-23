import { Callout, Steps } from 'nextra-theme-docs';

# List of instruments (currently available)
Let's review the instruments we have at the moment. From this review, you will know about our instruments, which benefits they bring, and how in practice, they could be used.

<Callout>
  Don't forget to add your project description to the instrument's settings! Even though the chatbot can work without them, but with this description, it's much more precise. Please find the information about this setting in the [corresponding article](https://www.enumhq.com/docs/guide/instruments/general-instruments-guide#provide-your-project-description).
</Callout>

## Check parcel status
Using the tracking number, it checks the parcel status and the date of the latest update. Supports multiple couriers. If the user doesn't provide a tracking number, the instrument will ask for it.

### Installation and settings
This instrument doesn't require any settings. Just install and use it right in the chatbox!

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/348ac9ea-d5ab-4983-924f-1c35a3854db5)

You also may ask additional questions:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/350782df-ccdb-4867-a627-b93f1f416443)


### Limitations
Internally, this instrument calls to a service that checks a parcel based on its tracking number. It can track more than 1000 carrier companies. In some cases, it may not find a parcel because:

- your carrier may not be on the list of carriers
- some additional authentication is required.

In the case of the latter, please try to use the Query custom API instrument.

## Get URL content
Reads a web page, and extracts the text content from it. This instrument may be useful if your users ask questions on the data that is out of your data sources. Here is an example: let's ask a question on some page on the Internet, for example about some article on Reddit [https://www.reddit.com/r/Fitness/comments/1cg1ufj/ultrarunning_and_strength_training_racing_100/](https://www.reddit.com/r/Fitness/comments/1cg1ufj/ultrarunning_and_strength_training_racing_100/) that we are too lazy to read:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/c57240a3-5f5a-49c7-90b8-a3909df2afaf)


### Installation and settings
No settings are required.

## Extract data from JSON

This instrument allows to extract data from JSON and pass it to the chatbot which will generate a human-friendly response based on the passed data.

### Installation and settings
After installing this instrument, open the details and add the prompt:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/5d2e9920-4fc9-40e2-a655-c9e22020980a)

In this prompt, you need to specify how this instrument would handle the input and what should be extracted. Let's review the example when we want to extract the airline name from a FlightRadar JSON. Let's add this prompt in the *Details*:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/78185b8b-9c9d-4c05-aebb-00498c1804e2)

Then, on the *Interactions* page, create a new chat and ask the question:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/25c41128-96e1-42a4-99f7-8696a7a487f8)



## Custom API endpoint

You can use this instrument to hit an API endpoint, pass the data to it, and read the response which will be passed to the chatbot. You may install as many instruments of this type as you want.

### Installation and settings
You need to configure the settings of your API endpoint to be able to pass the data.

### Full description
Provide the full description of what exactly this instrument does. It's necessary for proper choosing and running it. For example, you can write something like "Checks the flight status by the provided flight number."

![image](https://github.com/user-attachments/assets/7badbc48-c394-4835-bd7c-c299dc36a709)


### Prompt
This part helps to collect the proper information to run the instrument. For example, if a user wants to know the flight status but forgot to provide the flight number, the chatbot should ask them. For it, you can write something like "If user wants to check the flight status, collect the flight number."

![image](https://github.com/user-attachments/assets/2843cfeb-f797-4696-bb7c-89e5330556b2)


### Return value
The API call may return complex data in any format. You need to provide clear instructions on which data to extract. For example, you can write "From JSON, extract the value from field X."

![image](https://github.com/user-attachments/assets/7eff5cd1-e560-42be-bdfa-4c233dbc32c6)


### API endpoint
Provide a fully qualified URL to the API endpoint, for example, "https://app.myservice.com/api/customer".

![image](https://github.com/user-attachments/assets/193e9f6e-8c5b-4069-a911-57c9e3b734b2)


### API method
We support all the standard HTTP methods, listed below (for general information about HTTP methods, please check [the official documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)):

- GET
- POST
- PUT
- DELETE
- PATCH
- HEAD
- OPTIONS
- TRACE
- CONNECT

![image](https://github.com/user-attachments/assets/f34cea90-ea32-4a63-a68e-a27d82170f66)


### Headers
If the API call should be accompanied by specific headers, you can set up them here.

![image](https://github.com/user-attachments/assets/3bb26099-a691-4d6e-9ed4-b7877d29fe14)

### Params
If some params should be passed within the call (in the body), set them up here:

![image](https://github.com/user-attachments/assets/a8c2a0e3-61a3-4957-b651-cc991666d67e)

### Additional settings

![image](https://github.com/user-attachments/assets/f3182ac6-f9c3-4038-9b16-66c4cbc74b22)

#### Data should be passed as a list
Sometimes there is a requirement to pass data not as an object but rather as a list.

#### Extract text content from HTML
If your API is actually a URL that is returning a valid HTML page, check this setting to extract text from it.

#### Allow redirects
Sometimes, API internally redirects the call to another endpoint, so check this setting if you know that your endpoint does it.

#### Data
Here, you provide data that should be passed to the endpoint. This data is passed to the chatbot (for example, collected during the conversation), so you need to formalize data to be extracted from the conversation and passed properly

![image](https://github.com/user-attachments/assets/043e96d9-3efb-43cf-a0cb-8ea8e2942a92)

### Full example
Let's review a full example of working with such a great instrument as "API endpoint". We will create a chatbot that will give us the information on a custom flight.
First of all, let's choose the flight we would like to know about (to test the results and verify their quality). Open the [Flight Radar website](https://www.flightradar24.com/) and select some flight. We liked this one:

![image](https://github.com/user-attachments/assets/648b04cc-cce1-4dfb-b5ca-45afa66c17db)

# Let's fun begin!

#### Step 1. Find and install the API endpoint
You can find a good API on the [Rapid API service](https://rapidapi.com/) - it doesn't only have tons of great APIs, but many of them are free or super-cheap! 

The first step is to sign up and confirm your email.
Before we proceed with this API, we need to create an app. Please, navigate to the *App* page and click the *Add New App* on the left menu:

![image](https://github.com/user-attachments/assets/46e1432e-06ad-4063-8bb8-4eb96bee3bca)

Give it any name and then click the *Add app* button:

![image](https://github.com/user-attachments/assets/c1f63948-f8c8-438b-ab70-e561ed04784c)

So, after you creating an app, you will be navigated to https://rapidapi.com/hub where you "flight status" in the search field:

![image](https://github.com/user-attachments/assets/430efc58-010a-47a2-a037-52aa300cb578)


Click the "Flighter Flight Data" and you will be redirected to their RapidAPI page:

![image](https://github.com/user-attachments/assets/937a3b12-b516-4fe7-9003-890c85bae405)


Now, to test the endpoint, you need to subscribe to their API. They have a free plan so click the *Subscribe to Test* button (it doesn't require you to provide your CC information):

![image](https://github.com/user-attachments/assets/0176ea18-f1a3-4238-93ab-49b9f23b224f)

Click the *Start free plan* button, then click the *Subscribe* button:

![image](https://github.com/user-attachments/assets/7adf4b13-3b57-41d6-8cee-91bf3aeebb6d)

Then, click the *Skip, get started* button and you are good to go!

![image](https://github.com/user-attachments/assets/99ccbd59-b104-4fb2-9146-4a438d30889b)

You will be redirected to the *App* tab of the page, so click the *flightStatistics* item on the left menu:

![image](https://github.com/user-attachments/assets/08211b07-b731-4a95-9af7-6b9f58212433)

Click the *Params* tab and enter the flight number (see the screenshot of the FlightRadar website above, to find the flight number):

![image](https://github.com/user-attachments/assets/376d71d1-cd00-4a51-baec-a4ecf14b1faf)

While you enter your data, the service will automatically generate the code snippet that you can use, it's very convenient to figure out which data we should use, and how (we selected *Python* but you can select any other available programming language):

![image](https://github.com/user-attachments/assets/dd9f9817-5b1f-4c03-bb64-a6b3fe938360)

Click the *Test endpoint* button and then move to the *Results* tab (select the *JSON* format of data):

![image](https://github.com/user-attachments/assets/2abe6692-78ac-471e-91d5-f9949d5040d3)

We highlighted the data we are interested. It's the departure and destination airports, and the delay. If we check the flight stats (from the FlightRadar screenshot) we see that this value **avg_delay** is exactly delay we would like to know, and the value in minutes. Remember this fact. 

#### Step 2. Install and configure the API endpoint instrument in the Enum dashboard
Now, come back to the Enum dashboard. Open the *Instrument market* page in your project and click the *Install* button for the *Custom API endpoint* instrument.

![image](https://github.com/user-attachments/assets/b354695b-617a-4797-b97f-79362ea20221)

Move to the *My instruments* menu and see our instrument is installed. Click the *Details* button to configure the instrument:

![image](https://github.com/user-attachments/assets/2880261f-9901-4fea-8feb-c915c8257917)

Provide the following data for the corresponding fields:

- **Full description**: "Answers questions on flight status, delay, and other information."
- **Prompt**: "If user wants to check the flight status or obtain any other information about it, collect the flight number."
- **Return value**: "Read the returning JSON data. The field "avg_delay" gives the average delay in minutes so if the question is about delay, read from this field. The fields "from" and "to" mean the airport abbreviation. You should know what they mean, so give the full qualified name of airport."

Copy values for the next fields from the code snippet:

![image](https://github.com/user-attachments/assets/4449ee42-7111-4b4a-97ec-b8aef6e9e7ea)


- **API endpoint**: "https://flightera-flight-data.p.rapidapi.com/flight/statistics"
- **Method**: select *GET*
- **Headers**: copy two your values

So, your data so far should like like that:

![image](https://github.com/user-attachments/assets/b322a9db-5781-45a4-b083-00b36d58e4d7)

![image](https://github.com/user-attachments/assets/90de720e-f277-4b61-993f-392865acc8d0)



Now, the most interesting part which makes the magic true!
Have you noted the "Data" part on the screenshot above? We can just add it to the parameters value but we don't want it to "hardcode" - as our goal is to allow the users to enter the flight number on their own. So, instead of parameters, we provide this part in the *Data* section. Add one variable, copy the "flnr" to the *Name* field, then select *string* type and add the description, for example, "flight number".

![image](https://github.com/user-attachments/assets/342b4d79-6fcf-4d5e-8a0f-6dc61542172d)

Providing this data, we tell the chatbot to extract the flight number and pass it as "flnr" variable with the corresponding value to the endpoint.
Now, save the data, and let's test our instrument!

#### Step 3. Testing and tuning our instrument
For testing purposes, let's move to the *Interaction* page where we can test without using any Crisp chatbot and ask the chatbot about our flight:

![image](https://github.com/user-attachments/assets/dc16c155-e6d5-4aff-b393-3152c5adea94)

So far so good but not very specific... let's try again:

![image](https://github.com/user-attachments/assets/ddb88bc4-4272-48d4-81f7-7de35e7fef9a)

But... it's slightly wrong, let's go back to the API test response:

![image](https://github.com/user-attachments/assets/f1c36c9a-a3ee-4c0b-9db1-eb08f9785ea5)

It looks like the chatbot takes the delay information from a wrong field. Let's improve the instrument's settings. Open its configuration and change the return value to *"Read the returning JSON data. The field "avg_delay" gives the average delay in minutes so if the question is about delay, read from this field, and ignore "delay_30d" field. the fields "from" and "to" mean the airport abbreviation. You should know what they mean, so give the full qualified name of airport."*

![image](https://github.com/user-attachments/assets/ca22f97d-911e-4b68-80a6-e824664562b5)

Save the instrument and then, let's try again:

![image](https://github.com/user-attachments/assets/535d518e-ace8-46b0-b4f8-b95f1f079544)

This is exactly what we need! Let's also test the departure and destination:

![image](https://github.com/user-attachments/assets/ead55436-60b3-4854-95d7-2afbd5f59f70)

Now, it works as expected! 

Let's test our real chatbot:

![image](https://github.com/user-attachments/assets/c3c14f62-57cf-4483-8244-f0c87322d7ba)

What if we change the model to a Claude 3 Haiku by Anthropic? It works really great:

![image](https://github.com/user-attachments/assets/924d09ab-78aa-4b11-8752-c7b3ef75e604)

If you wonder what was the raw data, here you are:

![image](https://github.com/user-attachments/assets/031368d8-27ee-487b-ae05-88b488867f0f)


If you like the article and this use case, let us know by sharing it on social networks. You also can send us your opinion at info@enumhq.com!
