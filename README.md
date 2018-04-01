### A Simple Jekyll based Github pages theme

A simple, minimalistic yet good looking jekyll based github pages theme based on [artemsheludko/flexible-jekyll](https://github.com/artemsheludko/flexible-jekyll).

It has almost all the features available in **flexible-jekyll** and some additional features on top of it; and some modifications.

Features derived from **flexible-jekyll** include:

* Theme layout
* Markdown to HTML transformation
* Pagination
* Icon/logo support in post listing page
* Tags support
* Integration with [Disqus](https://disqus.com) for comments
* Integration with [Google analytics](https://www.google.com/analytics/)
* browser-sync for dynamically testing changes locally without restarting
* Gulp to simplify build management

Additional features include:

* Instant search using a modified version of [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)
* minimization/uglification of JS and CSS for better performance
* Addition of a new **about me** page
* Few more config properties
* ChartJS library for beautifying your accomplishments :D

Modification includes:

* Correction/deletion/addition of stylesheet elements to fit properly in smaller form factors such as Mobile, tablet, etc
* Extracting the about author section into a new page
* Modifying the original about author section into the about site section
* Copyleft instead of copyright. ;) 


#### Using the code for your own site

It's simple:

1. Fork this github repository.
2. Change the forked repository name from `hariharanv01.github.io` to `<your-github-user-id>.github.io` in github.
3. Go to *_config.yml* file, and change the configurations.
4. Replace the posts and images in **_posts** and **asses/img** folders respectively with your own.
5. Push your changes to your github remote, and your are done.

Navigate to `https://<your-github-user-id>.github.io` to see your own github page. It might take sometime for your changes to propagate.


#### To try locally

1. Go to root folder of this repo in your local box.
2. Run `npm install`. Assuming you already have `npm` installed in your box.
3. Run `gulp` to build your project and start browser-sync. It will automatically open the page in your default browser.


#### To configure your search field options

Go to `search.json` file and update it.


**To serve minified JS/CSS in production, you need to push the build folders to github - preferably to a separate branch. Google for more info on this**

