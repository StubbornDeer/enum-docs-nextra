import { Callout, Steps } from 'nextra-theme-docs';

# Instruments®

Instruments® is a new way to use the chatbot. With Instruments®, your users may not only ask questions about your products but also get help with data that is out of the scope of your documentation. The examples of such interactions are (not limited to):

- ask for a parcel status
- connect to a third-party API and ask the chatbot to handle the obtained data
- connect to your inner API
- open any webpage on the Internet, read its content, and ask questions about it
- run a query against another project
- extract data from JSON.

## How do they work
At first glance, it looks like magic. You just make several clicks and suddenly, your chatbot knows what to do. How does it happen? Without loading you with technical details, here is the workflow that our system is using when handling the query (in a situation when at least one instrument is installed):

<Steps>
### Figuring out which instrument should be used

Every instrument has its own description. For standard instruments, like "parcel checking", the description is already provided internally. For custom instruments, you provide a description for each of them. This description helps the system to figure out what exactly to do: sometimes there is no need to run any instrument and just query the ChatGPT. For example, if the query is "check my parcel status" and the system finds the instrument with a description matching this query, it will run this instrument, nothing else.

### Applying the instrument prompt

Some instruments may have prompts. For example, for the "parcel checking" instrument, its prompt checks if the user provides a tracking number and if not, it instructs the chatbot to ask for it.

### Running the instrument internally

As soon as the current instrument is selected, the system runs the corresponding function in the code which does something useful. For the "parcel checking" instrument, the code is calling for a service that can check multiple carriers. After running, the function returns some value. It can be a string or another structure. The result is passed to the system.

### Getting the result and processing it

Now, the result is passed to AI which tries to understand the result according to the instrument's description and prompt. As the output, it's a human-manner answer. For example, an instrument's function that should return the temperature in a specific area, returns the structure like ```"{"area": "London", "temp": "+22", "units": "C"}"```. As you can see it's not very human-friendly text. At first glance, it's very easy to understand what's it about but in some cases it may be much more complicated, something like that ```{"abbr": "DTCH", "usfar": "780"}``` So, the AI transforms these structure to a normal texts like ```"The temperature in London is 22 degrees in Celsium"``` and ```"The type of this house is 'detached', and its useful area is 780 square feet."```.

</Steps>

## Instruments® limitations

Although the instruments® are very useful tools they are still not omnipotent. For example, the "parcel checking" instrument can check only 1000+ carriers and your specific carrier may not be among them. The prompt could be a bit vague and not comprehensive that could prevent AI from getting the right and precise answer. However, they have a huge potential and we hope, you will try our standard and custom instruments, and will be able to create your own instruments in the near future.
