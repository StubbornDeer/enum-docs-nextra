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

![image](https://github.com/user-attachments/assets/1bd0b55a-1a1b-47ca-9e3b-c45570773bd8)


### Prompt
This part helps to collect the proper information to run the instrument. For example, if a user wants to know the flight status but forgot to provide the flight number, the chatbot should ask them. For it, you can write something like "If user wants to check the flight status, collect the flight number."

![image](https://github.com/user-attachments/assets/54872a99-2832-4e0c-8163-1bc370c3a203)


### Return value
The API call may return complex data in any format. You need to provide clear instructions on which data to extract. For example, you can write "From JSON, extract the value from field X."

![image](https://github.com/user-attachments/assets/6c37c464-c187-4c9d-9278-d6f4757baee9)


### API endpoint
Provide a fully qualified URL to the API endpoint, for example, "https://app.myservice.com/api/customer".

![image](https://github.com/user-attachments/assets/c73d0abf-d0f2-4fb3-90a2-e8a5d01e39c4)


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
Let's review a full example of working with such a great instrument as "API endpoint". We will create a chatbot that




