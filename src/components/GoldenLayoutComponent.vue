<template>
    <div>
        <div ref="layoutContainer" id="layout-root" style="width: 100%; height: 100vh; border: 2px solid black;"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { GoldenLayout } from 'golden-layout';
import VueComponent from './VueComponent.vue';
import MonacoEditor from './MonacoEditor.vue';
@Component({
    components: {
        'vue-component': VueComponent,
        'monaco-editor': MonacoEditor,
    },
})
export default class GoldenLayoutComponent extends Vue {
    @Ref('layoutContainer') layoutContainer!: HTMLDivElement;
    mounted() {
        const config = {
            content: [{
                type: 'row',
                content: [
                    { type: 'component', componentName: 'vue-component', },
                    { type: 'component', componentName: 'monaco-editor', },
                ]
            }]
        };

        const goldenLayout = new GoldenLayout(config, this.layoutContainer);
        let cnt = 1;
        // this is an inital way to register components
        const registerVueComponent = (componentName, component) => {
            goldenLayout.registerComponent(componentName, (container, componentState) => {
                container.on('open', () => {
                    let vue = new Vue({
                        render: function (createElement) {
                            return createElement(componentName, {} );
                        },
                        components: {
                            [componentName]: component,
                        }
                    });
                    const fragment = document.createDocumentFragment();
                    fragment.appendChild(vue.$mount().$el);
                    container.getElement().appendChild(fragment);
                })
            });
        }
        registerVueComponent('vue-component', VueComponent);
        registerVueComponent('monaco-editor', MonacoEditor);
        goldenLayout.init();
    }
}
</script>

<style scoped>
@import url('https://golden-layout.com/assets/css/goldenlayout-base.css');
@import url('https://golden-layout.com/assets/css/goldenlayout-dark-theme.css');
</style>