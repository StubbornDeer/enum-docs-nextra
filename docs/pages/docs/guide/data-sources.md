import { Callout, Steps } from 'nextra-theme-docs';

# Data Sources

Data sources are where you provide the system access to your data. When you load any text information into the system, it reads the text, split into chunks, and upload in a special storage (currently, we user a vector database). When a user query comes, we looks in the datastore to find the most fitting chunks, and then pass them to the ChatGPT engine which looks for an answer and build a human-like response.

## Add a data source
As soon as a project is created you may add the data source. A *data source* is a piece of information to be indexed and searched by our engine. Read more on [the data source documentation page](https://www.enumhq.com/docs/guide/data-sources).

 Click the "Add a new source" button and then select the corresponding type of data sources:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/5407348c-fac1-4a47-b9a3-b15b9a90267a)

<Callout>
  At the moment, you can add data sources of 3 types: PDF file, plain text, or a web site.
 </Callout>

Let's review all these datasource types.

### Plain text

After you create a new text data source, you will be redirected to its page:

![Plain text data source](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/45dfadbc-b28f-4d6f-8407-602253d7bbaf)

To save the data source under a specific title, enter it and click the *Save changes* button to save.

The plain text data source can contain multiple pages of text. To add a new page of text, click the *Add text* content button.
In the modal window, enter the title and the content of a data source:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/74b6b317-287f-4796-826d-0897836cc9de)

Then click the *Save & Index* button to save the changes and immediately index the content in our database to by used later by the chatbot.

### PDF files
When you select to create a file-based data source, just click the *Select or drag file(s)*, select your file, then click the *Upload* button.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/dfbe3858-2c00-441b-9185-3041c0d4bce4)

The process of uploading followed by indexing will start. You will something like that while it's in progress:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/2512492d-255e-4833-9831-10f77b2f7815)

When it's done you can click on a page to review and edit the text content:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/dd734032-c5bb-4999-92de-3a63fc02037b)


<Callout>
If you accidentally select a non-PDF file, it will be ignored.
</Callout>

<Callout>
Currently, only one file is allowed to be uploaded per data source.
</Callout>

### Web site
You may enter the full URL, or a subfolder, or even specify pages manually. Another option is to use the sitemap file. Let's review all these options:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/68b7f6f3-b920-41ca-9507-0972b8f3211c)


<Callout>
Note, you can enter an URL without a protocol "https://". But if you enter a bare URL, we will add an "https" protocol by default.
</Callout>


#### All pages within a domain (automatically)

We can parse  the data from a website. The workflow of the process is:

1. Enter a website's URL
2. Our system crawls it and finds all the links belonging to the same domain, excluding broken or private links.
3. You then may select which webpages to index.

Let's see how it works:

<Steps>
### Enter a URL
  We enter a website URL and click the "Start page indexing" which runs the crawler:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/49ff78ac-d78e-4319-bc43-781d289686f1)

During the crawling process, you will see the updated number of found pages. 
You can stop the crawler at any moment and the full list of found pages will be shown.

<Callout>
If a website has multiple pages, the process of indexing can take some time.
</Callout>

<Callout>
  If you have some pages hosted on a subdomain like *help.mydomain.com* they will not be indexed automatically, you need to check the corresponding flag.
</Callout>

### Select pages to be indexed
Select/unselect pages for indexing. Use the "Check all" and "Uncheck all" if needed:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/3ef86c68-1869-42f2-9b4c-f88c0b3cca43)


<Callout>
As you can see here, you are informed how many pages you can select accordingly to your current plan.
</Callout>

### Run indexing
  Click the "Add this source" button to start the indexing (reading the text content and adding to the database):

![image](https://github.com/StubbornDeer/public-media-files/assets/91156314/16e28a62-ef2e-4d1f-a924-7da7ef0d7943)


When a data source is added successfully, you will see the number of indexed pages and the button to re-index the data source.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/015af4ad-e501-42b7-ad81-8ddf41893d0e)


<Callout>
If you know your website has many pages whereas the crawler finds only one or two, we probably hit one of the problems that currently, we don't solve:

- Your website is protected by Cloudflare
- the content on your website is formed dynamically (that is, by some JavaScript code).
To get more information on those issues, please click the "Too few pages" button (see the image below): 
</Callout>

![image](https://github.com/StubbornDeer/public-media-files/assets/91156314/3aa21737-382c-4796-a96a-e4c7f91279e3)

</Steps>

#### Only within a specific path (like inside of a folder), automatically

You enter a path you want all the pages under would be indexed:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/16feecd2-c5e0-4255-87d2-92baebdbd4b0)


#### Manually entered pages

Enter a URL in the corresponding input and click the plus button:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/ef387a58-0296-454d-b006-6fff1b31fe5f)


You can add as many pages as you want within your limits.

### Re-indexing website
In some cases, you'd like to re-index your website. For example, if you update your website, or we delivered some functionality that can be activated only during the indexing.
To re-index your website just click the button on your website card:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/c2526c08-3baa-444f-bb15-3575066c0ea9)

Then you will see all the pages already found in your data source. You can leave everything as-is, start a new crawling, or check/uncheck the web pages:


![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/2020ae79-b906-4168-88d9-f2bbdfd0ef48)

When you selected all the pages, click the *Reindex the data source* button.
