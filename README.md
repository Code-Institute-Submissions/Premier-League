# Project's Name: Premier League

About: I have based my project on the Premier League. I planned to create a clear, easy and well structured wedsite on the English Premier League.
I will use big fonts sizes, clear links to relivant pages ie teams official websites.  I am going to use a colour palette of nice bright blues.
The main reason for the Project is to develope a site that is useful and easy to navigate for people who are not tech savvy.

# UX:

**STEP 1:** The first thing i did before i even looked at a laptop, i went and asked some people(not tech savvy) that i thought would be kean users.
I asked one simple Question. Do you find it easy to locate information about the Premier League online.

*USERS*

*Name:* Philip O'Reilly *Age:* 71
*Answer:* No
*Quote:* >"The Premier League website has way too much going on and i find it very confusing and time consuming"

*Name:* Johnny O'Reilly *Age:* 88
*Answer:* >"On what line"

*Name:* Lucas O'Reilly *Age:* 8
*Answer:* No
*Quote:* >"Every time i go on to Premier League.com i clicked on something by accident and then i go to a different site"

**STEP 2:** I then made a wireframe of my planned site. After alot of planning and alot of  wireframes i finally create a 
wireframe that i was happy with (with the help of my potential users) 

**STEP 3:** I did some research on the Premier League and its online users.
The Premier League is the top division of English football. The Premier League is the most watched sports league in the world.
Broadcast in 212 territories to 643 million homes and a potential tv audience of 4.7 billion people.
It also has countless online users looking for information 24/7 on the Premier League in every corner of the internet.

Some of the Premier League online users numbers:

Premier League's Facebook has over 44.5 million followers.
Premier League's Twitter has over 22.1 followers.
Premier League's Youtube has 996K subscribers and counting.

Even with all these resources my father found it very difficult to get easy, clear and useful information on the Premier League.
A Quote from my father: "The Premier League website has way too much going on and i find it very confusing and time consuming"

**STEP 4:** I went back to my potential users and asked them what informatiom they want to find on the Premier League?

*USERS*

*Name:* Philip O'Reilly *Age:* 71
*Answer:* >"To find the clubs official website easily because their is so many different Liverpool sites"

*Name:* Johnny O'Reilly *Age:* 87
*Answer:* >"History of the Premier League"

*Name:* Lucas O'Reilly *Age:* 8
*Answer:* >" What teams are in it and where are they from" 

**STEP 5:** After the answer giving from my potential users i picked my features that would accmmodate their needs.

**STEP 6:** I picked my colour palette font sizes.

**STEP 7:** I found all the images that i planned to use in my website.

**STEP 8:** i located all the relivant links to the teams official websites .

**STEP 9:** Finally I picked the API'S that i wanted to use.



# Features:

**Nav Bar:** My Nar bar has 4 links to Home, News, Tickets and History.
I added the font awesome class of hvr-bounce-to-bottom so that you can clearly see which link you are on.
The reason i used hvr-bounce-to-bottom was because it looks like a bouncing football.(On every page)

**Footer:**  I added 3 link to the Premier League Facebook, Twitter and Youtube in my footer and used the font awesome 
class hvr-bounce-to-top also because its clear to see.(On every page)

**Google Map:** On my home page i used the Google maps API to display the 20 teams in the Premier league on a map of England.
When a user clicks on a team crest an info window will pop up with that teams stadium infomatiom.

**Table on the Home page:** I added a table to display the teams of the Premier League and made the crests a link to that 
team official website.

**Email on the Tickets Page:** I put an email form for users to enquire about tickets for matchs.

**Table on the History page:** I added another table on the History page to display the winners of the Premier League through the years.
I made the crests into links to information and stats of that years season.

**Features Left to Implement:** One feature that i sent days trying to implement was a stats page. Unfortunately i was not able to get the API 
to render stats correctly due to the API key. I will try to do this in the future with a different sports API

# Technologies Used:

 **GitHub/GitPod:** I used these to built my website and host it.
 Within GitPod and GitHub i used HTML, CSS and JavaScript.

 *HTML:* For the stucture of my pages
 *CSS:* For my Styling
 *JavaScript:* For my Map,Email and APIS
 Link:[GitHub](http://github.com)

 **Balsamiq cloud:** I used to build my wireframes
 link:[Balsamiq cloud](https://balsamiq.com)

# Testing:

I tested my website on google chrome, internet explorer, firefox and safari and found no problems displaying my website in any browser.
I also tested my site on all screen sizes.
Galaxy S5 = No problems.
Pixel 2 and 2 XL = No problems.
Iphone 5 = No problems.
Iphone 6/7/8  = No problems.
Iphone 5 = No problems.

I had problems at all until my site try to display on an ipad .
My colume for my Premier League teams on the home page looked pressed against the map and the side of the screen
I fixed this problem by setting the colume size to col-md-12 which means full width on medium screens
I had no problems displaying my site on any larger screens

I added a test in my maps.js to make sure an icon and content was present in my loop

 //Check for custom icon
           if(props.iconTeam){
           //Set icon image
               marker.setIcon(props.iconTeam);
           }

           //Check content
           if(props.content){
               var infoWindow = new google.maps.InfoWindow({
                 content:props.content
               });


# Deployment:

I develoed this Website in GitPod IDE and pushed all my files to GitHub using the git command line.
Pushing files from GitPod to GitHub in the command line is very easy.
**STEP 1:** git add
**STEP 2:** git commit -m "work that you have done since your last commit"
**STEP 3:** git push - u origin master (this means i added the files to the master branch)

To deploy my site i opened my GitHub repos opened Premier League and went to settings.
In settings i scrolled down to GitHub pages selected master branch from the source menu.
The page reloaded and my Premier League Website was deployed.

# Credits:

**Content:**
I got the text in my History paragraph from the History page on Premier League.com
Link: [Premier League.com](https://www.premierleague.com/history)

**Media:**
I got my 20 images for my team crests off Premier League.com . They are on the home at the top
Link: [Premier League.com](https://www.premierleague.com)

I got the rest off my images from google

**Acknowledgements:**
I received inspiration and code for my nav bar and email  from the lessons in my course
I found the email code very easy to understand and use. 
I received inspiration for my google map JavaScript function from multiple tutorials and videos across the internet.