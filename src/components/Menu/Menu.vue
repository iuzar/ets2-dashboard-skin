<template>
	<div class="menu">
		<nav>
			<ul>
				<li
					v-bind:class="{ active: currentTab === tab }"
					v-bind:key="tab"
					v-for="tab in tabs"
					v-on:click="currentTab = tab"
				>{{ tab }}
				</li>
			</ul>
		</nav>
		<component class="tab-content" v-bind:is="currentTabComponent"></component>
	</div>
</template>

<script>
	import TabAbout from './tabs/TabAbout';
	import TabSkins from './tabs/TabSkins';
	
	export default {
		name:       'Menu',
		components: {
			TabSkins,
			TabAbout
		},
		data() {
			return {
				currentTab: 'About',
				tabs:       [ 'Skins', 'About' ]
			};
		},
		computed:   {
			currentTabComponent: function () {
				return 'Tab' + this.currentTab;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/menu/menu';
</style>
