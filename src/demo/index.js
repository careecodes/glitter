$(document).ready(function(){ 
    var template = $('#loadNav').html();
    var output = $('#navMenu');
  
    var data = {
        "Subject": "Template Engines",
        "navLinks": [
            {
                "linkDestination": "index.html",
                "linkName": "Home",
            },
            {
                "linkDestination": "links.html",
                "linkName": "Links",
            },
            {
                "linkDestination": "buttons.html",
                "linkName": "Buttons",
            },
            {
                "linkDestination": "checkboxes.html",
                "linkName": "Checkboxes",
            },
            {
                "linkDestination": "radios.html",
                "linkName": "Radio Buttons",
            },
            {
                "linkDestination": "uploaders.html",
                "linkName": "Uploaders",
            },
            {
                "linkDestination": "textareas.html",
                "linkName": "Textareas",
            },
            {
                "linkDestination": "inputs.html",
                "linkName": "Inputs",
            },
            {
                "linkDestination": "tags.html",
                "linkName": "Tags",
            },
            {
                "linkDestination": "selects.html",
                "linkName": "Selects",
            },
            {
                "linkDestination": "errors.html",
                "linkName": "Errors",
            },
            {
                "linkDestination": "alerts.html",
                "linkName": "Alerts",
            }

        ]
    };
  
    var result = Mustache.render(template, data);
    
    output.append(result);
  
  });