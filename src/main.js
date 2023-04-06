import { createApp } from "vue";
import App from "./App.vue";
import componets from "./components/UI/componets";
import router from "./router";
import store from "./store";
import "@/assets/style/style.scss";

const app = createApp(App);

app.mixin({
	methods: {
		getImageUrl(url) {
			return require("@/assets/" + url);
		},
	},
});
componets.forEach((component) => {
	app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
