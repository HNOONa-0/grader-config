<template>
    <div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

@Component
export default class MonacoEditor extends Vue {
    editor: monaco.editor.IStandaloneCodeEditor | null = null;
    model: monaco.editor.ITextModel | null = null;

    mounted() {
        this.editor = monaco.editor.create(this.$el as HTMLElement, {
            autoIndent: "none",
            formatOnPaste: true,
            formatOnType: true,
            automaticLayout: true,
        });
        this.model = this.editor.getModel();
        this.model?.onDidChangeContent(() => {
        });
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
}
</style>