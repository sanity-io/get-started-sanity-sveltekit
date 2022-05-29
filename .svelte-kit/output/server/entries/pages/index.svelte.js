import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-00e51b25.js";
import { S as Section } from "../../chunks/Section-6c2d9a37.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><sveltekit:head><title>EMS by Styrk</title></sveltekit:head>

	${validate_component(Section, "Section").$$render($$result, {
    name: "Mere information kommer snart!",
    backgroundColor: "dark",
    showName: true
  }, {}, {
    default: () => {
      return `<div class="${"container"}"><div class="${"row"}"><div class="${"column"}"></div>
				<div class="${"column"}"><img src="${"static/img/laura.jpg"}" class="${"img-fluid"}" alt="${"EMS tr\xE6ning"}"></div>
				<div class="${"column"}"></div></div></div>`;
    }
  })}

	${validate_component(Section, "Section").$$render($$result, {
    name: "Mere information kommer snart!",
    backgroundColor: "dark",
    showName: true
  }, {}, {
    default: () => {
      return `<main><h1>Mere information kommer snart!</h1>
			
			${escape("Nanna og Laura Styrk")}</main>`;
    }
  })}</div>`;
});
export { Routes as default };
