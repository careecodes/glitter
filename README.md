# WWCode Glitter v0.1.0

**Official Styles variables for Women Who Code**

## About
This Repo includes the holy grail of Women Who Code style variables so you can have Women Who Code "glitter" on your website. Guidelines for usage are covered by [the Non-Profit Open Software License version 3.0 (NPOSL-3.0)](https://opensource.org/licenses/NPOSL-3.0).

## Open Source License
[The Non-Profit Open Software License version 3.0 (NPOSL-3.0)](https://opensource.org/licenses/NPOSL-3.0).
Contact coreteam@womenwhocode.com with any questions.
*WWCode reserves the right to change the open source license at anytime.*

### Contributing

:tada:

Getting ready to start jumping in? :smiley_cat: Once you've read this README, jump to our [contributing guidelines](.github/CONTRIBUTING.md), our PR process is contingent on this.

## Discuss project issues and efforts
* If you have questions or comments about a particular issue or pull request, you can submit a comment directly in GitHub.  For further discussion, [sign up to join](http://goo.gl/forms/3TZ3eO47Yc) the Women Who Code Projects/Apps Slack team.

## Project Reviewers
* @WomenWhoCode/glitter-reviews
  * [kaitlynhova](https://github.com/kaitlynhova)
  * [Zassmin](https://github.com/zassmin)
  * [isometimescode](https://github.com/isometimescode)

## Requirements
Since this repo is a scss file of variables, your app will need to support [sass](http://sass-lang.com/install). Check out [their docs to check out how to install sass in your app](http://sass-lang.com/install).

## Installation

**If you use CSS**
Add this tag in the [head tag](https://www.w3schools.com/tags/tag_head.asp) of your app before any other style tags:
```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/WomenWhoCode/glitter/4/wwcode.css" />
```

**If you use SCSS**
Import the scss file into your app!
First, navigate to the folder you'd like to host the Women Who Code styles in.

```
cd /url/to/your/scss/folder
```
 
Then, download the files into your project:

```
curl -o wwcode.scss https://raw.githubusercontent.com/WomenWhoCode/glitter/4/wwcode.scss
```

Next, make sure that the wwcode styles are imported into your main app style file. Sometimes this is done automatically in your asset pipeline, but if it's not you need to import it into your desired main style file with this line:

```
@import "wwcode";
```



## Guide
If instalation is sucessful & there are no overriding styles in your app, you should be able to copy and paste the following code into your app:

**Form Styles**
1. [Links](#links)
2. [Buttons](#buttons)
3. [Checkboxes](#checkboxes)
4. [Radio Buttons](#radios)
5. [Uploaders](#uploaders)
6. [Textareas](#textareas)
7. [Inputs](#inputs)
8. [Tags](#tags)
9. [Selects](#selects)
10. [Errors](#errors)
11. [Alerts](#alerts)

---

### Links
*NOTE: when links are hovered, they should have a teal background & black text.*

#### Link
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510606387739-Screen+Shot+2017-11-13+at+12.50.31+PM.png" width="50">

```
<a class="wwcode-link" href="womenwhocode.com">Link</a>
```

#### Link with Underline
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510606574130-Screen+Shot+2017-11-13+at+12.55.26+PM.png" width="50">

```
<a class="wwcode-link wwcode-link-underline" href="womenwhocode.com">Link</a>
```


### Buttons
*NOTE: When buttons are hovered they should have a lighter teal color. When they are pressed they should have a darker teal color.*
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840800017-Screen+Shot+2017-11-27+at+7.46.23+PM.png" width="150">

```
<button class="wwcode-button"> Yay! </button>
```

### Checkboxes

*NOTE: Checkboxes will require Javascript. Here is an example if you want to use straight Javascript in order to make it work:*
```
<script>
  $('.wwcode-square').click(function(){
    var isChecked = event.target.nextElementSibling.checked;
    $(this).toggleClass("selected");
    event.target.nextElementSibling.checked = !isChecked;
  });
</script>
```

#### Unselected


<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840339881-Screen+Shot+2017-11-27+at+7.36.49+PM.png" width="200">

```
<label class="wwcode-label">Title</label>
<div class="wwcode-checkbox"> 
  <span class="wwcode-square"></span>
  <input type="checkbox" />
  <span class="wwcode-checkbox-text">This is a Checkbox</span>
</div>
<div class="wwcode-checkbox"> 
  <span class="wwcode-square"></span>
  <input type="checkbox" />
  <span class="wwcode-checkbox-text">This is a Checkbox</span>
</div>
```

#### Selected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840381116-Screen+Shot+2017-11-27+at+7.37.25+PM.png" width="280">

```
<label class="wwcode-label">Title</label>
<div class="wwcode-checkbox"> 
  <span class="wwcode-square selected"></span>
  <input type="checkbox" checked/>
  <span class="wwcode-checkbox-text">This is a Selected Checkbox</span>
</div>
<div class="wwcode-checkbox"> 
  <span class="wwcode-square selected"></span>
  <input type="checkbox" checked/>
  <span class="wwcode-checkbox-text">This is a Selected Checkbox</span>
</div>
```

### Radios
*NOTE: Radio buttons will require Javascript. Here is an example if you want to use straight Javascript in order to make it work:*
```
<script>
  $('.wwcode-square').click(function(){
    var isChecked = event.target.nextElementSibling.checked;
    $(this).toggleClass("selected");
    event.target.nextElementSibling.checked = !isChecked;
  });
</script>
```

#### Unselected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840537462-Screen+Shot+2017-11-27+at+7.42.01+PM.png" width="240">

```
<label class="wwcode-label">Title</label>
<div class="wwcode-radio"> 
  <span class="wwcode-square"></span>
  <input type="radio" />
  <span class="wwcode-radio-text">This is a Radio Button</span>
</div>
<div class="wwcode-radio"> 
  <span class="wwcode-square"></span>
  <input type="radio" />
  <span class="wwcode-radio-text">This is a Radio Button</span>
</div>
```

#### Selected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840640697-Screen+Shot+2017-11-27+at+7.43.41+PM.png" width="300">

```
<label class="wwcode-label">Title</label>
<div class="wwcode-radio"> 
  <span class="wwcode-square selected"></span>
  <input type="radio" checked/>
  <span class="wwcode-radio-text">This is a Selected Radio Button</span>
</div>
<div class="wwcode-radio"> 
  <span class="wwcode-square"></span>
  <input type="radio" />
  <span class="wwcode-radio-text">This is a Radio Button</span>
</div>
```

### Uploaders
*NOTE: When hovered, uploaders should have a teal border with teal text.*
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511840894361-Screen+Shot+2017-11-27+at+7.47.59+PM.png" width="330">

```
<div id="wwcode-filepicker-url"><p>Click to Upload</p></div>
```

### Textareas
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511841007824-Screen+Shot+2017-11-27+at+7.49.54+PM.png" width=430>

```
<label class="wwcode-label">Title</label>
<textarea class="wwcode-textarea">General Textarea</textarea>
```

### Inputs

**text**

<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511889214668-Screen+Shot+2017-11-28+at+9.13.04+AM.png" width="350">

```
<label class="wwcode-label">Title</label>
<input type="text" class="wwcode-input" placeholder="This is a general text input">
```

**Number**

<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511889296394-Screen+Shot+2017-11-28+at+9.12.56+AM.png" width="350">

```
<label class="wwcode-label">Title</label>
<input type="number" class="wwcode-input" placeholder="This is a general number input">
```

**submit**
*NOTE: When submit inputs are hovered they should have a lighter teal color. When they are pressed they should have a darker teal color.*

<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511889346083-Screen+Shot+2017-11-28+at+9.12.46+AM.png" width="350">

```
<input type="submit" class="wwcode-input" placeholder="This is a general submit input">
```

### Tags

<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511892815965-Screen+Shot+2017-11-28+at+10.13.16+AM.png" width="380">

```
<label class="wwcode-label">Title</label>
<input type="text" class="wwcode-input" placeholder="This is a general input">
<div class="wwcode-tag">
  <span>tag</span>
  <span class="wwcode-delete">+</span>
</div>
```

### Selects
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511903624321-Screen+Shot+2017-11-28+at+1.13.14+PM.png" width="300">

```
<label class="wwcode-label">Title</label>
<select class="wwcode-select">
  <option>Cool Select</option>
</select>
```

### Errors

#### Inline_errors

NOTE: If you want inline error functionality you will need to use javascript in order to update a general input to display an error. Here is an example:
```
<script>
  $('.wwcode-input').addClass('wwcode-error-input');
  $('.wwcode-error-text').text("This is inline error text.");
</script>
```
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510604096279-Screen+Shot+2017-11-13+at+12.14.37+PM.png" width="350">

```
<label class="wwcode-label">Title</label>
<input class="wwcode-error-input wwcode-input" placeholder="This is a general input with error">
<div class="wwcode-error-text">
  <span>This is inline error text.</span>
</div>
```


### Alerts
NOTE: place these outside of any width constraining container (banners will be 100% the width of the screen). Banners will appear under your top nav, which is assumed to be fixed at the top of the page & 75px high.
#### Sucess Alert Banner
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1511299152083-sucess.jpg" width="600">

```
<div class="wwcode-alert">
  <span class="wwcode-alert-text">Sucess Alert!</span>
  <span class="wwcode-delete">+</span>
</div>
```
#### Error Alert Banner
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510604996148-Screen+Shot+2017-11-13+at+12.29.41+PM.png" width="600">

```
<div class="wwcode-alert wwcode-alert-error">
  <span class="wwcode-alert-text">Error Alert!</span>
  <span class="wwcode-delete">+</span>
</div>
```

### Open Source License

[The Non-Profit Open Software License version 3.0 (NPOSL-3.0)](https://opensource.org/licenses/NPOSL-3.0)

Contact coreteam@womenwhocode.com with any questions

WWCode reserves the right to change the open source license at anytime
