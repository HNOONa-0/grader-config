<template>
    <div id="app">
        <golden-layout-component></golden-layout-component>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import GoldenLayoutComponent from './components/GoldenLayoutComponent.vue'
// Define component options using the @Component decorator
@Component({
    components:{
        'golden-layout-component': GoldenLayoutComponent,
    },
})
export default class MyComponent extends Vue {
    // Define props using the @Prop decorator
    @Prop({ default: 'John Doe' }) name!: string;
    @Prop({ default: 12 }) age!: number;

    // Define a computed property
    get greeting(): string {
        return `Welcome, ${this.name}!  are ${this.age} years old.`;
    }
}
</script>

<style></style>