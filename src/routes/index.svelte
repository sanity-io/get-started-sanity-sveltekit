<script>
	let EMSInfo = $$props.sektionstekst;
	/*
	   {
			_createdAt: "2022-03-08T09:28:00Z",
			_id: "1f69c53d-418a-452f-849a-e92466bb9c75",
			_rev: "xnBg0xhUDzo561jnWODd5e",
			_type: "forloeb",
			_updatedAt: "2022-03-08T09:28:00Z",
			name: "Test"
		  } 
	];*/
	import Section from '../components/Section.svelte'
  </script>

<div>
	<sveltekit:head>
	<title>EMS by Styrk</title>
	</sveltekit:head>

	<Section name='Velkommen til EMS by STYRK' backgroundColor={"dark"} showName={true} centerText={true}>
		<div class="container">
			<div class="row">
				<div class="column"></div>
				<div class="column">
					<img src={"src/img/laura.jpg"} class="img-fade-in" alt="EMS træning">
				</div>
				<div class="column"></div>
			</div>
		</div>
	</Section>

	<Section name={EMSInfo[0].name} backgroundColor={"light"} showName={true}>
		{JSON.stringify(EMSInfo[0].text)}

		<p>EMS står for Elektronisk Muskel-Stimulering, hvilket indebærer at elektroder stimulerer og aktiverer dine muskelgrupper. Dette gør det muligt at træne hele kroppen på samme tid og gennemføre en træningssession på bare 20 min. 1 EMS-træningssession på 20 min svarer til 90 min intensiv HIT træning, da elektroderne gør det muligt at øge intensiteten med op til 80%.</p>

		<p>Ønsker du at kickstarte et træningsforløb med EMS, og både mærke og se resultater af denne træning på din egen krop, så kontakt os og aftal en prøvetime for at se, om det er noget for dig.</p>
		
		<p><b>Hvorfor vælge EMS?</b></p>
		<ul>
			<li>Effektiv træning med øget intensitet</li>
			<li>Øger muskelmassen</li>
			<li>Øger fedtforbrændingen</li>
			<li>Mindsker cellulitis (appelsinhud)</li>
			<li>Forebygger og afhjælper skader</li>
			<li>Minimum belastning af muskler og led</li>
			<li>Tidsbesparing (kun 20 min træning)</li>
			<li>Personlig træning og skræddersyet program</li>
		</ul>
		
	</Section>
</div>

<style>
.img-fade-in {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>