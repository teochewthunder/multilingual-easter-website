// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function changeLang(lang)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            changeContent(lang);
        }
    };
    xmlhttp.open("GET", "../../langs/index/" + lang, true);
    xmlhttp.send();
}

function changeContent(lang)
{
	var labels = 
	[
		{
			"name" : "lblTitle",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Happy Easter 2018!"
				},	
				{
					"lang" : "cn",
					"val" : "2018复活节快乐!"
				}
			]			
		},
		{
			"name" : "lblName",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Name"
				},
				{
					"lang" : "cn",
					"val" : "名称"
				}
			]
		},
		{
			"name" : "lblEmail",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Email"
				},
				{
					"lang" : "cn",
					"val" : "电子邮件"
				}
			]
		},
		{
			"name" : "lblSendEmail",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Send mail"
				},
				{
					"lang" : "cn",
					"val" : "发送邮件"
				}
			]
		},
		{
			"name" : "lblAbout",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Easter is the celebration of the resurrection of Jesus from the tomb on the third day after his cruxifixion. Learn more about the meaning of Easter including the history and holiday symbols like easter eggs, the bunny, and lilies."
				},
				{
					"lang" : "cn",
					"val" : "复活节是在耶稣受难之后第三天从坟墓复活耶稣的庆祝活动。了解更多关于复活节的含义，包括复活节彩蛋，兔子和百合花等历史和假日符号。"
				}
			]
		},
		{
			"name" : "lblFooter",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "&copy; 2018 Teochew Thunder "
				},
				{
					"lang" : "cn",
					"val" : "&copy; 潮州雷"
				}
			]
		},
		{
			"name" : "lblMailSentTo",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "Mail sent to"
				},
				{
					"lang" : "cn",
					"val" : "邮件发送"
				}
			]
		},
		{
			"name" : "lblMailAt",
			"content" :
			[
				{
					"lang" : "en",
					"val" : "at email:"
				},
				{
					"lang" : "cn",
					"val" : ":"
				}
			]
		}
	]

	for (var i = 0; i < labels.length; i++)
	{
		var langLabels = document.getElementsByClassName(labels[i].name);

		for (var j = 0; j < langLabels.length; j++)
		{
			var content = labels[i].content.filter
			(
				function (x) 
				{
					return x.lang == lang;
				}
			)

			langLabels[j].innerHTML = content[0].val;
		}
	}
}
