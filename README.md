# Multilingual Easter Website

This form mailer site is done in Ruby On Rails, and everything is standard MVC. JavaScript is what switches the languages of the site. There is no reloading required - if the form is filled in halfway, the values remain without any disruption to the user.

## JavaScript (apps/assets/javascripts)
Upon changing the value in the drop-down list, the `changeLang()` function is called. This in turn calls an AJAX sequence which accesses the route `langs/index/[lang]`. The purpose of this route is to change the Session object, just in case the user goes elsewhere and returns later, to maintain state.

After the AJAX sequence successfully returns, the `changeContent()` function is called. This accesses a JSON object, `labels`, that has all site strings stored in a hash table, organized by language as keys.

The function accesses every element on the page whose class name matches the `name` property of the current element of `labels`, and populates the placeholder directly with appropriate content.

## Views
The views use helpers to render labels that have the appropriate class name within the form. Outside of the form tag, the `class` attribute is used.

## Extra Functionality
An email is sent to the address specified in the form.

This is achieved via the `sendmail` route, which uses the `ApplicationMailer` class. `EasterMailer` is an instance of the `ApplicationMailer` class which uses the name and email address sent by the `sendmail` route to send the email.

Email templates are rendered via HTML and text files in the `views/easter_mailer` and `views/layout` folder.

Configuration of SMTP is handled in the `config/environments` folder.

*Note: This is an updated version from 2018. There may be some structural changes in Rails. The email functionality throws an error 500. It's possible that my configured password is incorrect.*
