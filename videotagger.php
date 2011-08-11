<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Video tagging tool</title>
		<script src="http://code.jquery.com/jquery-1.6.2.min.js" type="text/javascript"></script>
        <link href="css/styles.css" rel="stylesheet" />
		<script type="text/javascript">
			$(function(){
				window.appView = new ApplicationView;
				//console.log(ApplicationView);
			});
		</script>
    </head>
    <body>
        <div id="application" class="index">
			<div class="background"></div>
			<div class="content"></div>
        </div>

		<script id="login-template" type="text/html">
			<fieldset>
				<legend>Login</legend>
				<p>
					<label>user</label>
					<input type="text" value="" name="username"/>
				</p>
				<p>
					<label>login</label>
					<input type="password" value="" name="password"/>
				</p>

				<p><input type="button" value="login" name="login" class="loginButton" /></p>
			</fieldset>
		</script>

		<script id="home-template" type="text/html">

			<h1>Categories</h1>
			<ul class="categories">
			</ul>
			<p>
				<input type="button" value="save" />
				<input type="button" value="logout" class="logoutButton"/>
			</p>
		</script>

		<script type="text/javascript" src="js/underscore-min.js,backbone-min.js,jquery.tmpl.js,models/ModelExtended.js,models/ApplicationModel.js,views/ApplicationView.js,views/ApplicationLoginView.js,views/ApplicationHomeView.js,models/CategoryModel.js,collections/CategoryCollection.js,views/CategoryView.js"></script>		
    </body>
</html>
