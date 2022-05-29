<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
	  <a class="navbar-brand" href="/">EMS by Styrk</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
		  <a class="nav-link" href="/hvorfor-ems">Hvorfor EMS?</a>
		  <a class="nav-link" href="/dine-traenere">Dine trænere</a>
		  <a class="nav-link" href="/kontakt">Kontakt</a>
		</div>
	  </div>
	</div>
  </nav>

  <slot></slot>

  <footer class="p-3" style="color: white; background-color: var(--bs-body-color); min-height: 60px;">
	  <div>
		  <b>Kontakt for mere information og booking</b>
		  <p>Privatbesked til <a href="https://www.instagram.com/emsbystyrk/">@EMSbyStyrk</a> på Instagram <br></p>
		  <p>Send en besked på <br>
		  +45 4140 5993 eller <br>
		  +45 2618 5312</p>
	  </div>
  </footer>

  <style>
	  a {
		  color: gray;
		  text-decoration: none;
	  }

	  a:hover {
		  opacity: 0.5;
	  }
  </style>