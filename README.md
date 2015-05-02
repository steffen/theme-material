## Material Design theme for Ext JS

A theme package for Ext JS that provides styles and custom components that follow Google's [Material Design guideline](http://www.google.com/design/spec/).

### Status (May 2, 2015)

This theme package was created for my talk on April 8, 2015 at [SenchaCon 2015](http://www.senchacon.com/).
The slides for my talk can be found [here](https://speakerdeck.com/steffenhiller/materializing-ext-js).  
The theme package is far from being a complete Ext JS theme package, it's just a start.
In the future I plan to provide a more detailed overview of what Material Design components are included in the theme and which ones are still pending.

### Plan

The theme package and example application was created with Ext JS 5.1.0.
My plan is to upgrade the package and example application to Ext JS 6.0.0 modern toolkit before continuing developing it.  
As people have asked me: Even though I work for Sencha, this theme is purely a side project and not an official theme from Sencha. 

### Examples

[Conference Manager](http://steffen.github.io/theme-material/extjs-5/examples/conference-manager/)

### Usage

In order to use this theme package, check it out into your app's or workspace's packages folder. Make sure to use Ext JS 5.1.0.
If you just want to run the example locally, you can create an empty workspace and put the "theme-material" package in your workspace's packages folder. The conference manager example application also requires the "[scaffold](https://github.com/steffen/scaffold)" package which I created with this application so you need to put that one into your workspace's packages folder as well.

Here's how you create an empty workspace:
```
sencha -sdk /path/to/ext-5.1.0 generate workspace /path/to/workspace
```

Once you have everything checked out, you need to run `sencha app build development` in the `theme-material/examples/conference-manager` folder. You should then be able to open the conference manager app on your machine.

### Issues

As mentioned above, the current theme package's and example application's state is just a start. There are many rough edges in the example application and many styles and components missing in the theme package.  
Over time I'll add issues that I know of to the repository's [issue tracker](https://github.com/steffen/theme-material/issues). You're welcome to add issues and questions to the issues tracker as well.

### Why is the package called "theme-material" and not "material-theme"?

It's called "theme-material" not only to make Yoda happy, but also to follow Sencha's naming convention for theme packages.

### Contributions

As people already offered to contribute, I'm happy to take pull requests.

### Contact

If you have any questions, best is to create an issue in the repository's [issue tracker](https://github.com/steffen/theme-material/issues). You can also write me on [Twitter](https://twitter.com/steffenhiller).
