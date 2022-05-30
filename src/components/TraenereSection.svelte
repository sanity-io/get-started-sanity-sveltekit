<script>
	import Section from './Section.svelte'
	import TraenerComponent from "./TraenerComponent.svelte"

	let traenerInfo = [
		{
			name: "Laura",
			image: "src/img/laura.jpg",
			intro: "Jeg hedder Laura. Jeg er 28 år og har en kandidat i historie og medievidenskab. Udover min uddannelse har jeg altid haft en passion for træning og behandlinger, der kan styrke min krop.",
			mainText: "Jeg har, så længe jeg kan huske, døjet med smerter i ryg og nakke, som ofte har kunne slå mig ud med migræne og ulidelige smerter op gennem ryggen og til spændingshovedpine.\n\nFor mig har EMS betydet, at jeg har mindsket mine ryg- og nakkeproblemer, da træningen sørger for at få alle muskelgrupper med i træningen uden at tilføje ekstra belastning.\n\nUdover færre smerter, så jeg også resultater på kortere tid, end jeg har set med andre træningsformer. Min krop er blevet strammet op, og mine muskler er blevet mere tonede, og jeg er blevet endnu mere vild med træningsformen.\n\nDet resulterede i, at jeg ikke kunne se mig selv uden EMS-træning. Jeg valgte derfor, sammen med min søster, at starte vores egen EMS-træning op ved at tage uddannelsen til EMS-instruktør, fordi vi simpelthen synes, at denne form for træning er for god til at andre skal gå glip af den.\nDerfor er det vores intension at skabe større opmærksomhed om træningen og forhåbentlig inspirere og få nogle klienter ind i forløb, så de også kan mærke og se resultaterne på egen krop gennem denne fantastiske træning.\n\nDette er et træningsforløb du ikke vil gå glip af!\n\nSkriv for interesse og lad os se om du ikke også vil falde pladask for denne træning, som jeg er."
		},
		{
			name: "Nanna",
			image: "src/img/nanna_box.jpg",
			intro: "Jeg hedder Nanna og er 31 år gammel. Jeg er udover at være uddannet EMS-træner også uddannet dyrlæge og arbejder ved siden af EMS med smådyr.",
			mainText: "Jeg har altid været interesseret i træning og fitness, og med min viden og interesse inden for kroppens anatomi, har jeg fundet en niche, hvor jeg både har kunnet kombinere min faglighed med min hobby.\nDerfor blev min passion for EMS også allerede vakt ved min første prøvetime. Den følelse og energi det giver i kroppen er fantastisk og vanedannende, og teorien bag træningen er ekstremt spændende at fordybe sig i.\n\nEMS vækker kroppen på en helt anden måde, end konventionel fitness gør. Og med arbejde, mand, hund og barn i hverdagen er der ikke altid overskud og tid til de lange timer med træning i et fitnesscenter. EMS er tidsbesparende og giver samtidig gode resultater! Med 1-2 træninger af 20 min om ugen vil du mærke og se resultater hurtigere end andre træningsformer. Træningen vil altid foregå med mig eller min søster som din personlige træner. Så med EMS hos os går du ikke på kompromis med familieliv eller træningsresultater, der får det hele i én pakke.\n\nOg så gør det jo ikke noget, at man i dragten ligner Lara Croft fra Tomb Raider imens. \n\nSkriv for interesse og lad os se om du ikke også vil elske ikke at skulle vælge mellem træningen og familielivet, men kunne få det hele med EMS."
		}
	]

</script> 

<Section name="Dine trænere" backgroundColor="light" showName={true}>
	<div class="container">
		<div class="row">
			{#each traenerInfo as traener}
				<div class="col col-sm-12 col-lg-6">
					<TraenerComponent
						name={traener.name}
						image={traener.image}
						intro={traener.intro}
						mainText={traener.mainText}
					/>
				</div>
			{/each}
		</div>
	</div>
</Section>