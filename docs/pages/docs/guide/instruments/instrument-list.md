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

### Installation and settings
After installing this instrument, open the details and add the prompt:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/5d2e9920-4fc9-40e2-a655-c9e22020980a)

In this prompt, you need to specify how this instrument would handle the input and what should be extracted. Let's review the example when we want to extract the airline name from a FlightRadar JSON. Let's add this prompt in the *Details*:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/78185b8b-9c9d-4c05-aebb-00498c1804e2)

Then, on the *Interactions* page, create a new chat and ask the question:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/25c41128-96e1-42a4-99f7-8696a7a487f8)



# Chaining the instruments
